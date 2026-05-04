// imports
import { uploadImg } from "../cloudinary.js";
const API_BASE = window.location.hostname === "localhost"
  ? "http://localhost:8000/api"
  : "https://quizify-backend-nine.vercel.app/api";

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
                window.location.href = '../auth/login.html';
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

// declarations
// sidebar functionality
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggleSidebar');
let dp = document.querySelector('.circle');
let overlay = document.querySelector('.overlay');
let categoriesContainer = document.querySelector('.quizCategories');
let subCategoriesContainer = document.querySelector('.subCategories');
let cardsContainer = document.querySelector('.quizCards');
let profilePicCircle = document.querySelectorAll('.pic');

// Initialize sidebar state from localStorage
const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
if (sidebar && isCollapsed) {
    sidebar.classList.add('collapsed');
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-active');
        overlay.classList.remove('active');
    });
}


if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });
}

// Hover to expand functionality
if (sidebar) {
    sidebar.addEventListener('mouseenter', () => {
        if (sidebar.classList.contains('collapsed')) {
            sidebar.classList.remove('collapsed');
            sidebar.classList.add('hover-expanded');
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        if (sidebar.classList.contains('hover-expanded')) {
            sidebar.classList.add('collapsed');
            sidebar.classList.remove('hover-expanded');
        }
    });
}

// User State
let userData = null;

// Initialization
async function init() {
    const token = localStorage.getItem('Quizify-token');
    if (!token) {
        window.location.href = '../auth/login.html';
        return;
    }

    userData = await apiCall('/users');
    if (!userData) return;

    updateUI(userData);
    loadCategories();
}

function updateUI(data) {
    // Name Display
    const { firstName, lastName } = data;
    const showFullName = document.querySelectorAll('#name');
    showFullName.forEach((name) => {
        name.innerText = firstName + ' ' + lastName;
    });

    // Profile Pic Display
    if (data.profilePic) {
        profilePicCircle.forEach((circle) => {
            circle.style.backgroundImage = `url(${data.profilePic})`;
            circle.style.backgroundSize = 'cover';
            circle.style.backgroundPosition = 'center';
            circle.innerText = '';
        });
    } else {
        profilePicCircle.forEach((circle) => {
            circle.innerText = (firstName[0] + lastName[0]).toUpperCase();
            circle.style.backgroundImage = 'none';
        });
    }

    // Progress bar 
    const progressText = document.getElementById('overallScore');
    const progressFill = document.querySelector('.progressFill');
    const quizCountUI = document.querySelector('.basedOnQuizzes');

    if (progressText && progressFill) {
        const userProgress = data.progress || 0;
        progressText.innerText = `${userProgress}%`;
        progressFill.style.width = `${userProgress}%`;
    }

    if (quizCountUI) {
        quizCountUI.innerText = data.quizPlayed || 0;
    }
}

// Sidebar / Avatar click navigates to profile
if (dp) {
    dp.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            sidebar.classList.add('mobile-active');
            overlay.classList.add('active');
        } else {
            window.location.href = './profile/profile.html';
        }
    });
}


// Logout Functionality for both sidebar and bottom nav
document.querySelectorAll('.logout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('Quizify-token');
        localStorage.removeItem('Quizify-user');
        window.location.href = '../auth/login.html';
    });
});

// Categories & Sub-categories Display
function showCategorySkeletons() {
    categoriesContainer.innerHTML = Array(4).fill(0).map(() => `<div class="skeleton-category skeleton"></div>`).join('');
}

function showSubCategorySkeletons() {
    subCategoriesContainer.innerHTML = Array(3).fill(0).map(() => `<div class="skeleton-subCategory skeleton"></div>`).join('');
}

function showCardSkeletons() {
    cardsContainer.innerHTML = Array(4).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton-img skeleton"></div>
            <div class="skeleton-title skeleton"></div>
            <div class="skeleton-progress skeleton"></div>
            <div class="skeleton-meta skeleton"></div>
            <div class="skeleton-btn skeleton"></div>
        </div>
    `).join('');
}

async function loadCategories() {
    showCategorySkeletons();
    showSubCategorySkeletons();
    showCardSkeletons();

    let categories = await apiCall('/quiz/categories');
    if (!categories) return;

    categoriesContainer.innerHTML = '';
    categories.forEach((cat) => {
        let btn = document.createElement('button');
        btn.className = 'category';
        btn.innerText = cat.title;

        btn.onclick = () => {
            document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            showSubCategorySkeletons();
            showCardSkeletons();

            if (!cat.subCategories || cat.subCategories.length === 0) {
                subCategoriesContainer.innerHTML = `<p style="color: gray">Coming soon...</p>`;
                cardsContainer.innerHTML = '';
                return;
            }

            subCategoriesContainer.innerHTML = '';
            cat.subCategories.forEach((sub, i) => {
                let subBtn = document.createElement('button');
                subBtn.className = 'subCategory';
                subBtn.innerText = sub;

                subBtn.addEventListener('click', async () => {
                    document.querySelectorAll('.subCategory').forEach(b => b.classList.remove('active'));
                    subBtn.classList.add('active');

                    showCardSkeletons();

                    const cards = await apiCall(`/quiz/cards/${sub}`);
                    const userProgress = await apiCall(`/quiz/progress?subName=${sub}`);

                    if (cards && userProgress !== null) {
                        const mergedCards = cards.map(card => {
                            const progress = userProgress[String(card.order)];
                            return {
                                ...card,
                                quizCompleted: progress ? progress.isCompleted : false,
                                percentage: progress ? progress.percentage : 0
                            };
                        });
                        showCards(mergedCards, sub);
                    }
                });
                subCategoriesContainer.appendChild(subBtn);
                if (i === 0) subBtn.click();
            });
        };
        categoriesContainer.appendChild(btn);
    });

    const firstCat = categoriesContainer.querySelector('.category');
    if (firstCat) firstCat.click();
}

function showCards(cards, sub) {
    cardsContainer.innerHTML = '';

    cards.forEach(card => {
        const isFailed = card.quizCompleted && card.percentage < 40;
        const isMastered = card.quizCompleted && card.percentage >= 40;
        const statusClass = card.quizCompleted ? 'completed' : '';
        const accentColor = isFailed ? '#ef4444' : (isMastered ? '#10b981' : 'var(--accent)');
        const badgeLabel = isFailed ? '✕ Failed' : '✓ Mastered';

        const cardEl = document.createElement('div');
        cardEl.className = `quizCard ${statusClass}`;
        cardEl.dataset.sub = sub;
        cardEl.dataset.id = card.order;

        cardEl.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${card.img}" alt="${card.title}">
                ${card.quizCompleted ? `<span class="status-badge" style="background: ${accentColor}">${badgeLabel}</span>` : ''}
            </div>
            
            <div class="cardBody">
                <div class="card-header">
                    <h3>${card.title}</h3>
                </div>

                <div class="card-progress-track">
                    <div class="card-progress-fill" style="width: ${card.percentage ? card.percentage : 0}%; background: ${accentColor}"></div>
                </div>

                <div class="cardMeta">
                    <span class="level">${card.level}</span>
                    <span class="questions">questions:${card.questions}</span>
                </div>

                <button class="startBtn">
                    ${card.quizCompleted ? 'Review Result' : 'Start Quiz'}
                </button>
            </div>`;
        cardsContainer.appendChild(cardEl);
    });
}

cardsContainer.addEventListener('click', (e) => {
    const startBtn = e.target.closest('.startBtn');
    if (!startBtn) return;

    const card = startBtn.closest('.quizCard');
    const subName = card.dataset.sub;
    const quizId = card.dataset.id;

    const isReview = startBtn.textContent.trim() === 'Review Result';

    const encodedSub = encodeURIComponent(subName);
    let url = `./quizPage/quizpage.html?sub=${encodedSub}&id=${quizId}`;
    if (isReview) url += '&mode=review';

    window.location.href = url;
});

init();
