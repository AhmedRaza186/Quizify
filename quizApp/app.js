// imports
import { uploadImg } from "../cloudinary.js";
import { API_BASE, showToast } from "../utils.js";

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
    if (!userData) {
        showToast("Failed to load user data.", "error");
        return;
    }

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
        const accentColor = isFailed ? '#ef4444' : (isMastered ? 'var(--cyan)' : 'var(--cyan)');
        const badgeClass = isMastered ? 'badge-mastered' : (isFailed ? 'badge-failed' : '');
        const badgeLabelText = isFailed ? '✕ Failed' : '✓ Mastered';

        const iconMappings = [
            // ==================== HTML ====================
            { keywords: ['html basics'], icon: 'fab fa-html5' },
            { keywords: ['forms & inputs'], icon: 'fas fa-file-signature' },
            { keywords: ['semantic html'], icon: 'fas fa-code' },

            // ==================== CSS ====================
            { keywords: ['css fundamentals'], icon: 'fab fa-css3-alt' },
            { keywords: ['flexbox & grid'], icon: 'fas fa-table-cells-large' },
            { keywords: ['responsive design'], icon: 'fas fa-mobile-screen-button' },

            // ==================== JAVASCRIPT ====================
            { keywords: ['js basics'], icon: 'fab fa-js' },
            { keywords: ['arrays & objects'], icon: 'fas fa-layer-group' },
            { keywords: ['dom manipulation'], icon: 'fas fa-sitemap' },
            { keywords: ['fetch & modules'], icon: 'fas fa-arrows-rotate' },

            // ==================== REACT ====================
            { keywords: ['jsx & components'], icon: 'fab fa-react' },
            { keywords: ['state & props'], icon: 'fas fa-diagram-project' },
            { keywords: ['hooks'], icon: 'fas fa-anchor' },

            // ==================== NODE.JS ====================
            { keywords: ['node basics'], icon: 'fab fa-node-js' },
            { keywords: ['express.js'], icon: 'fas fa-server' },
            { keywords: ['middleware'], icon: 'fas fa-filter' },

            // ==================== DATABASES ====================
            { keywords: ['sql basics'], icon: 'fas fa-database' },
            { keywords: ['nosql introduction'], icon: 'fas fa-file-code' },
            { keywords: ['joins & queries'], icon: 'fas fa-link' },

            // ==================== APIs ====================
            { keywords: ['rest api'], icon: 'fas fa-network-wired' },
            { keywords: ['http methods'], icon: 'fas fa-globe' },
            { keywords: ['authentication'], icon: 'fas fa-shield-halved' },

            // ==================== DOCKER ====================
            { keywords: ['docker basics'], icon: 'fab fa-docker' },
            { keywords: ['containers & images'], icon: 'fas fa-box' },
            { keywords: ['docker compose'], icon: 'fas fa-layer-group' },

            // ==================== ALGEBRA ====================
            { keywords: ['linear equations'], icon: 'fas fa-equals' },
            { keywords: ['quadratic equations'], icon: 'fas fa-chart-line' },
            { keywords: ['polynomials'], icon: 'fas fa-superscript' },

            // ==================== GEOMETRY ====================
            { keywords: ['triangles & circles'], icon: 'fas fa-shapes' },
            { keywords: ['coordinate geometry'], icon: 'fas fa-crosshairs' },
            { keywords: ['3d shapes'], icon: 'fas fa-cube' },

            // ==================== STATISTICS & PROBABILITY ====================
            { keywords: ['mean, median, mode'], icon: 'fas fa-chart-column' },
            { keywords: ['probability basics'], icon: 'fas fa-dice' },
            { keywords: ['distributions'], icon: 'fas fa-chart-area' },

            // ==================== DEBIT & CREDIT ====================
            { keywords: ['basic rules'], icon: 'fas fa-scale-balanced' },
            { keywords: ['journal entries'], icon: 'fas fa-book' },
            { keywords: ['trial balance'], icon: 'fas fa-scale-unbalanced' },

            // ==================== ASSETS & EXPENSES ====================
            { keywords: ['asset types'], icon: 'fas fa-boxes-stacked' },
            { keywords: ['expense classification'], icon: 'fas fa-tags' },
            { keywords: ['expense recording'], icon: 'fas fa-receipt' },

            // ==================== LIABILITIES, REVENUE & CAPITAL ====================
            { keywords: ['liabilities basics'], icon: 'fas fa-file-invoice-dollar' },
            { keywords: ['revenue recognition'], icon: 'fas fa-money-bill-trend-up' },
            { keywords: ['capital accounts'], icon: 'fas fa-coins' },

            // ==================== FINANCIAL STATEMENTS ====================
            { keywords: ['income statement'], icon: 'fas fa-file-invoice' },
            { keywords: ['balance sheet'], icon: 'fas fa-scale-balanced' },
            { keywords: ['cash flow statement'], icon: 'fas fa-money-bill-transfer' },

            // ==================== ECONOMICS — BASIC CONCEPTS ====================
            { keywords: ['introduction to economics'], icon: 'fas fa-landmark' },
            { keywords: ['scarcity & choice'], icon: 'fas fa-scale-balanced' },
            { keywords: ['opportunity cost'], icon: 'fas fa-code-compare' },

            // ==================== DEMAND & SUPPLY ====================
            { keywords: ['law of demand'], icon: 'fas fa-arrow-trend-down' },
            { keywords: ['law of supply'], icon: 'fas fa-arrow-trend-up' },
            { keywords: ['market equilibrium'], icon: 'fas fa-scale-balanced' },

            // ==================== PRICE ====================
            { keywords: ['price determination'], icon: 'fas fa-tags' },
            { keywords: ['price elasticity'], icon: 'fas fa-chart-line' },
            { keywords: ['price theory'], icon: 'fas fa-money-bill-wave' },

            // ==================== NATIONAL INCOME ====================
            { keywords: ['gdp basics'], icon: 'fas fa-chart-column' },
            { keywords: ['gnp & nnp'], icon: 'fas fa-globe' },
            { keywords: ['income methods'], icon: 'fas fa-money-bill-transfer' },

            // ==================== INTERNATIONAL TRADE ====================
            { keywords: ['trade theories'], icon: 'fas fa-handshake' },
            { keywords: ['balance of payments'], icon: 'fas fa-scale-balanced' },
            { keywords: ['trade policies'], icon: 'fas fa-file-contract' },

            // ==================== GEOGRAPHY ====================
            { keywords: ['continents & oceans'], icon: 'fas fa-earth-americas' },
            { keywords: ['countries & capitals'], icon: 'fas fa-city' },
            { keywords: ['physical geography'], icon: 'fas fa-mountain' },

            // ==================== GENERAL SCIENCE ====================
            { keywords: ['chemistry basics'], icon: 'fas fa-flask' },
            { keywords: ['physics basics'], icon: 'fas fa-atom' },
            { keywords: ['biology basics'], icon: 'fas fa-dna' },

            // ==================== FUN PLAY ====================
            { keywords: ['flags & countries'], icon: 'fas fa-flag' },
            { keywords: ['logos & brands'], icon: 'fas fa-copyright' },
            { keywords: ['symbols & signs'], icon: 'fas fa-icons' }
        ];

        let holoIcon = 'fas fa-cube'; // sleek default icon
        let lowerTitle = card.title.toLowerCase();
        let lowerSub = sub.toLowerCase();
        let searchStr = lowerTitle + " " + lowerSub;

        for (const mapping of iconMappings) {
            if (mapping.keywords.some(kw => searchStr.includes(kw))) {
                holoIcon = mapping.icon;
                break;
            }
        }

        const cardEl = document.createElement('div');
        cardEl.className = `quizCard ${statusClass}`;
        cardEl.dataset.sub = sub;
        cardEl.dataset.id = card.order;

        cardEl.innerHTML = `
            <div class="card-image-wrapper holo-wrapper">
                <div class="holo-scene">
                    <div class="holo-icon-container">
                        <i class="${holoIcon} holo-glow-icon"></i>
                        <div class="holo-base-ring"></div>
                    </div>
                </div>
                ${card.quizCompleted ? `<span class="status-badge ${badgeClass}">${badgeLabelText}</span>` : ''}
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
