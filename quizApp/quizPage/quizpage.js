import { getLoggedInUser, getQuizCardsBySub, getUserDetails, getUserProgressBySub, saveUserProgress, updateUserDetails } from '../../firebase.js';

// --- DOM Elements ---
const categoryLabel = document.querySelector('.category-label');
const questionText = document.querySelector('.main-question');
const optionsGrid = document.querySelector('.options-grid');
const qCountDisplay = document.getElementById('q-count');
const nextBtn = document.querySelector('.nav-btn.next');
const progressBar = document.querySelector('.progress-bar');
const timerText = document.getElementById('timer-text');
const timerRing = document.getElementById('timer-ring');
const quitBtn = document.querySelector('.quit-btn');
const hintBtn = document.getElementById('hint-btn');
const hintCountDisplay = document.getElementById('hint-count');

// --- Quiz State ---
let quizData = []; 
let currentIdx = 0;
let score = 0;
let timerInterval;
let currentSubName;
let currentQuizId;
let hintsLeft = 0;

// --- Initialize Quiz ---
async function initQuiz() {
    const params = new URLSearchParams(window.location.search);
    currentSubName = decodeURIComponent(params.get('sub') || "");
    currentQuizId = params.get('id');

    if (!currentSubName || !currentQuizId) {
        window.location.href = '../index.html';
        return;
    }

    try {
        const cards = await getQuizCardsBySub(currentSubName);
        const activeQuiz = cards.find(c => String(c.order) === String(currentQuizId));

        if (activeQuiz) {
            quizData = activeQuiz.questionsDetails.questions;
            categoryLabel.textContent = activeQuiz.title;

            // Set up hints (Handling -1 as infinite)
            hintsLeft = activeQuiz.questionsDetails.hints === -1 ? Infinity : (activeQuiz.questionsDetails.hints || 0);

            updateHintUI();
            
            renderQuestion();
        } else {
            throw new Error("Quiz Card not found");
        }
    } catch (err) {
        console.error("Initialization error:", err);
        alert("Oops! We couldn't load your quiz. Returning to dashboard.");
        window.location.href = '../index.html';
    }
}

// --- Question Rendering ---
function renderQuestion() {
    const currentQuestion = quizData[currentIdx];
    
    nextBtn.disabled = true;
    nextBtn.textContent = (currentIdx === quizData.length - 1) ? "Finish Quiz" : "Save & Next";
    
    questionText.textContent = currentQuestion.question;
    qCountDisplay.textContent = `${String(currentIdx + 1).padStart(2, '0')}/${quizData.length}`;

    // Handle Question Image
    const qImage = document.getElementById('q-image'); 
    if (qImage) {
        if (currentQuestion.imageURL) {
            qImage.src = currentQuestion.imageURL;
            qImage.style.display = 'block';
        } else {
            qImage.style.display = 'none';
        }
    }

    // Reset Hint Button for the new question
    if (hintsLeft > 0 || hintsLeft === Infinity) {
        hintBtn.disabled = false;
        hintBtn.style.opacity = "1";
    }

    // Prepare options grid
    optionsGrid.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-card';
        button.style.visibility = 'visible'; // Ensure visible on new question
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text"></span>
        `;
        button.querySelector('.option-text').textContent = option;
        button.onclick = () => handleSelect(button);
        optionsGrid.appendChild(button);
    });

    startTimer(currentQuestion.time || 15);
}

// --- Interaction & Navigation ---
function handleSelect(selectedElement) {
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    selectedElement.classList.add('selected');
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', handleNext);

function handleNext() {
    clearInterval(timerInterval);
    
    const selectedOption = document.querySelector('.option-card.selected');
    const currentQuestion = quizData[currentIdx];
    
    if (selectedOption) {
        const allOptions = Array.from(document.querySelectorAll('.option-card'));
        const selectedIndex = allOptions.indexOf(selectedOption);
        if (selectedIndex === currentQuestion.correct) {
            score++;
        }
    }

    if (currentIdx < quizData.length - 1) {
        currentIdx++;
        updateProgressBar();
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// --- Hint Functionality ---
function updateHintUI() {
    if (hintCountDisplay) {
        hintCountDisplay.textContent = hintsLeft === Infinity ? "∞" : hintsLeft;
    }
    if (hintsLeft <= 0 && hintsLeft !== Infinity) {
        hintBtn.disabled = true;
        hintBtn.style.opacity = "0.5";
    }
}

hintBtn.addEventListener('click', () => {
    if (hintsLeft > 0 || hintsLeft === Infinity) {
        useHint();
    }
});

function useHint() {
    const currentQuestion = quizData[currentIdx];
    const options = Array.from(document.querySelectorAll('.option-card'));
    let removed = 0;

    // Filter to find wrong options, shuffle them, and hide two
    const wrongOptions = options.filter((_, index) => index !== currentQuestion.correct);
    const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5);

    shuffledWrong.forEach((btn, index) => {
        if (index < 2) {
            btn.style.visibility = 'hidden';
        }
    });

    if (hintsLeft !== Infinity) {
        hintsLeft--;
    }
    
    updateHintUI();
    hintBtn.disabled = true; // Use only one hint per question
}

// --- Utilities (Timer & Progress) ---
function startTimer(seconds) {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    timerText.textContent = timeLeft;
    timerRing.style.strokeDashoffset = '0';

    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        
        const offset = 138 - (timeLeft / seconds) * 138;
        timerRing.style.strokeDashoffset = offset;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleNext();
        }
    }, 1000);
}

function updateProgressBar() {
    const progressPercent = (currentIdx / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

quitBtn.addEventListener('click', () => {
    if (confirm("Quit now? Your progress will be lost!")) {
        clearInterval(timerInterval);
        window.location.href = '../index.html'; 
    }
});

// --- Results & Saving ---
async function finishQuiz() {
    nextBtn.disabled =true
    clearInterval(timerInterval);
    const wrapper = document.querySelector('.quiz-content-wrapper');
    const percentage = Math.round((score / quizData.length) * 100);

    // Save individual progress
    await saveUserProgress(currentSubName, currentQuizId, percentage);

    // Update global user stats
    const logginedUserUid = await getLoggedInUser();
    const userData = await getUserDetails(logginedUserUid);

    const newQuizPlayed = (userData.quizPlayed || 0) + 1;
    const oldAvg = userData.progress || 0;
    const oldCount = userData.quizPlayed || 0;
    const newAvg = Math.round(((oldAvg * oldCount) + percentage) / newQuizPlayed);

    await updateUserDetails(logginedUserUid, {
        progress: newAvg,
        quizPlayed: newQuizPlayed
    });

    const isPassed = percentage >= 40;
    const statusClass = isPassed ? 'status-pass' : 'status-fail';
    let message = isPassed ? "Excellent work! You've mastered this." : "Keep your head up! Practice makes perfect.";
    if (percentage === 100) message = "Perfect! You're an absolute legend! 🏆";

    wrapper.innerHTML = `
        <div class="result-card">
            <h2 class="${statusClass}">${isPassed ? '🎉 PASSED' : '❌ FAILED'}</h2>
            <p style="color: rgba(255,255,255,0.6)">${message}</p>
            <div class="percentage-display">${percentage}%</div>
            <p class="score-details">
                You correctly answered <strong>${score}</strong> out of <strong>${quizData.length}</strong> questions.
            </p>
            <button class="nav-btn" onclick="window.location.href='../index.html'">
                Return to Dashboard
            </button>
        </div>
    `;
}

initQuiz();
