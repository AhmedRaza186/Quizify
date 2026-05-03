const API_BASE = 'http://localhost:8000/api';

// Utility for API calls
async function apiCall(endpoint, method = 'GET', body = null) {
    const token = localStorage.getItem('Quizify-token');
    const headers = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = token;
    }

    const config = {
        method,
        headers
    };
    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, config);
        const data = await response.json();
        if (!response.ok || !data.status) {
            if (response.status === 401) {
                localStorage.removeItem('Quizify-token');
                window.location.href = '../../auth/login.html';
                return null;
            }
            throw new Error(data.message || 'API request failed');
        }
        return data.data;
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error);
        return null;
    }
}

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
let currentQuizTitle = ""; // Added
let hintsLeft = 0;
let isReviewMode = false;
let userAnswers = [];
let previousAnswers = [];

// --- Initialize Quiz ---
async function initQuiz() {
    const params = new URLSearchParams(window.location.search);
    currentSubName = decodeURIComponent(params.get('sub') || "");
    currentQuizId = params.get('id');
    isReviewMode = params.get('mode') === 'review';

    if (!currentSubName || !currentQuizId) {
        window.location.href = '../index.html';
        return;
    }

    try {
        const cards = await apiCall(`/quiz/cards/${currentSubName}`);
        if (!cards) throw new Error("Could not load quiz cards");

        const activeQuiz = cards.find(c => String(c.order) === String(currentQuizId));

        if (activeQuiz) {
            quizData = activeQuiz.questionsDetails.questions;
            currentQuizTitle = activeQuiz.title; // Store title
            categoryLabel.textContent = isReviewMode ? `Review: ${activeQuiz.title}` : activeQuiz.title;

            if (isReviewMode) {
                const progress = await apiCall(`/quiz/progress?subName=${currentSubName}`);
                if (progress && progress[currentQuizId]) {
                    previousAnswers = progress[currentQuizId].answers || [];
                }
                hintBtn.style.display = 'none';
                timerRing.parentElement.style.display = 'none';
                timerText.style.display = 'none';
                quitBtn.innerHTML = '<span class="quit-icon">←</span> Exit Review';
            } else {
                hintsLeft = activeQuiz.questionsDetails.hints === -1 ? Infinity : (activeQuiz.questionsDetails.hints || 0);
                updateHintUI();
            }
            
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
    
    if (isReviewMode) {
        nextBtn.disabled = false;
        nextBtn.textContent = (currentIdx === quizData.length - 1) ? "Exit Review" : "Next Question →";
    } else {
        nextBtn.disabled = true;
        nextBtn.textContent = (currentIdx === quizData.length - 1) ? "Finish Quiz" : "Save & Next";
    }
    
    questionText.textContent = currentQuestion.question;
    qCountDisplay.textContent = `${String(currentIdx + 1).padStart(2, '0')}/${quizData.length}`;

    const qImage = document.getElementById('q-image'); 
    if (qImage) {
        if (currentQuestion.imageURL) {
            qImage.src = currentQuestion.imageURL;
            qImage.style.display = 'block';
        } else {
            qImage.style.display = 'none';
        }
    }

    if (!isReviewMode && (hintsLeft > 0 || hintsLeft === Infinity)) {
        hintBtn.disabled = false;
        hintBtn.style.opacity = "1";
    }

    optionsGrid.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-card';
        
        let badgeHtml = '';
        if (isReviewMode) {
            const userAnswer = previousAnswers[currentIdx];
            const isCorrect = index === currentQuestion.correct;
            const isUserSelected = index === userAnswer;

            if (isCorrect) {
                button.classList.add('correct-review');
                badgeHtml = `<span class="review-badge correct-badge">Correct Answer</span>`;
            } else if (isUserSelected) {
                button.classList.add('incorrect-review');
                badgeHtml = `<span class="review-badge incorrect-badge">Your Answer</span>`;
            }
            button.style.pointerEvents = 'none';
        }

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
            ${badgeHtml}
        `;
        if (!isReviewMode) button.onclick = () => handleSelect(button);
        optionsGrid.appendChild(button);
    });

    if (!isReviewMode) {
        startTimer(currentQuestion.time || 15);
    }
}

function handleSelect(selectedElement) {
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    selectedElement.classList.add('selected');
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', handleNext);

async function handleNext() {
    if (isReviewMode) {
        if (currentIdx < quizData.length - 1) {
            currentIdx++;
            updateProgressBar();
            renderQuestion();
        } else {
            window.location.href = '../index.html';
        }
        return;
    }

    clearInterval(timerInterval);
    
    const selectedOption = document.querySelector('.option-card.selected');
    const currentQuestion = quizData[currentIdx];
    let selectedIndex = -1;
    
    const allOptions = Array.from(document.querySelectorAll('.option-card'));
    
    if (selectedOption) {
        selectedIndex = allOptions.indexOf(selectedOption);
        selectedOption.classList.remove('selected'); // Remove selected to let feedback colors shine
        
        // Show feedback immediately
        if (selectedIndex === currentQuestion.correct) {
            selectedOption.classList.add('correct');
            selectedOption.innerHTML += `<span class="review-badge correct-badge">Correct!</span>`;
            score++;
        } else {
            selectedOption.classList.add('incorrect');
            selectedOption.innerHTML += `<span class="review-badge incorrect-badge">Your Answer</span>`;
            
            allOptions[currentQuestion.correct].classList.add('correct');
            allOptions[currentQuestion.correct].innerHTML += `<span class="review-badge correct-badge">Correct Answer</span>`;
        }
    } else {
        // No selection (timer out) - show correct answer
        allOptions[currentQuestion.correct].classList.add('correct');
        allOptions[currentQuestion.correct].innerHTML += `<span class="review-badge correct-badge">Correct Answer</span>`;
    }

    userAnswers.push(selectedIndex);
    nextBtn.disabled = true;

    // Delay for feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (currentIdx < quizData.length - 1) {
        currentIdx++;
        updateProgressBar();
        renderQuestion();
    } else {
        finishQuiz();
    }
}

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
    if (!isReviewMode && (hintsLeft > 0 || hintsLeft === Infinity)) {
        useHint();
    }
});

function useHint() {
    const currentQuestion = quizData[currentIdx];
    const options = Array.from(document.querySelectorAll('.option-card'));

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
    hintBtn.disabled = true;
}

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

    if (!isReviewMode) {
        const msg = "Quit now? Your progress will be lost!";
        if (confirm(msg)) {
            clearInterval(timerInterval);
            window.location.href = '../index.html'; 
        }
        
    }
    window.location.href = '../index.html'; 
    return
});

async function finishQuiz() {
    nextBtn.disabled = true;
    clearInterval(timerInterval);
    const wrapper = document.querySelector('.quiz-content-wrapper');
    const percentage = Math.round((score / quizData.length) * 100);

    // Save individual progress (Backend handles aggregate stats)
    await apiCall('/quiz/progress', 'POST', {
        subCategory: currentSubName,
        quizId: currentQuizId,
        percentage: percentage,
        answers: userAnswers,
        quizName: currentQuizTitle, // Added
        category: currentSubName     // Added
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
            <div class="result-btns">
                <button class="nav-btn" onclick="window.location.href='../index.html'">Dashboard</button>
                <button class="nav-btn review-btn" onclick="window.location.href='?sub=${encodeURIComponent(currentSubName)}&id=${currentQuizId}&mode=review'">Review Result</button>
            </div>
        </div>
    `;
}

initQuiz();
