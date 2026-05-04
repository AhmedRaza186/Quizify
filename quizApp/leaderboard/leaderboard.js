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

// DOM Elements
const userTableBody = document.getElementById('userTableBody');
const userSearch = document.getElementById('userSearch');
const sortFilter = document.getElementById('sortFilter');
const logoutBtn = document.querySelector('.logout-btn');

// State
let allUsers = [];

// Initialize
async function init() {
    const token = localStorage.getItem('Quizify-token');
    if (!token) {
        window.location.href = '../../auth/login.html';
        return;
    }

    // Sidebar Logic
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('#toggleSidebar');

    const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
    if (sidebar && isCollapsed) {
        sidebar.classList.add('collapsed');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
        });
    }

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

    await loadLeaderboard();

    // Event Listeners
    userSearch.addEventListener('input', debounce(() => {
        loadLeaderboard();
    }, 500));

    sortFilter.addEventListener('change', () => {
        loadLeaderboard();
    });

    // Logout functionality for both sidebar and bottom nav
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('Quizify-token');
            localStorage.removeItem('Quizify-user');
            window.location.href = '../auth/login.html';
        });
    });
}

async function loadLeaderboard() {
    showLeaderboardSkeletons();
    
    const search = userSearch.value;
    const sort = sortFilter.value;

    const users = await apiCall(`/users/all?search=${search}&sort=${sort}`);
    if (!users) return;

    allUsers = users;
    renderPodium(users);
    renderTable(users);
}

function showLeaderboardSkeletons() {
    // Show podium skeletons
    [1, 2, 3].forEach(rank => {
        const nameEl = document.getElementById(`top${rank}-name`);
        const scoreEl = document.getElementById(`top${rank}-score`);
        const imgEl = document.getElementById(`top${rank}-img`);
        if (nameEl) nameEl.innerHTML = `<div class="skeleton skeleton-podium-name"></div>`;
        if (scoreEl) scoreEl.innerHTML = `<div class="skeleton skeleton-podium-score"></div>`;
        if (imgEl) {
            imgEl.innerHTML = `<div class="skeleton skeleton-podium-img" style="width: 100%; height: 100%; border-radius: 50%"></div>`;
            imgEl.style.backgroundImage = 'none';
        }
    });

    // Show table skeletons
    userTableBody.innerHTML = Array(5).fill(0).map(() => `
        <tr class="skeleton-row">
            <td><div class="skeleton sk-item sk-rank"></div></td>
            <td>
                <div class="user-info">
                    <div class="skeleton sk-item sk-avatar"></div>
                    <div class="user-details">
                        <div class="skeleton sk-item sk-name"></div>
                        <div class="skeleton sk-item sk-email"></div>
                    </div>
                </div>
            </td>
            <td><div class="skeleton sk-item sk-progress"></div></td>
            <td><div class="skeleton sk-item sk-rank" style="width: 80px"></div></td>
            <td><div class="skeleton sk-item sk-rank" style="width: 100px"></div></td>
        </tr>
    `).join('');
}

function renderPodium(users) {
    const top3 = users.slice(0, 3);

    top3.forEach((user, index) => {
        const rank = index + 1;
        const item = document.querySelector(`.podium-item:nth-child(${rank === 1 ? 2 : (rank === 2 ? 1 : 3)})`);
        if (item) {
            item.style.cursor = 'pointer';
            item.onclick = () => window.location.href = `../profile/profile.html?uid=${user._id}`;
        }

        const nameEl = document.getElementById(`top${rank}-name`);
        const scoreEl = document.getElementById(`top${rank}-score`);
        const imgEl = document.getElementById(`top${rank}-img`);

        if (nameEl) nameEl.innerText = `${user.firstName} ${user.lastName}`;
        if (scoreEl) scoreEl.innerText = `${user.progress || 0}%`;
        if (imgEl) {
            if (user.profilePic) {
                imgEl.style.backgroundImage = `url(${user.profilePic})`;
                imgEl.innerText = '';
            } else {
                imgEl.style.backgroundImage = 'none';
                imgEl.innerText = (user.firstName[0] + user.lastName[0]).toUpperCase();
            }
        }
    });
}

function renderTable(users) {
    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `../profile/profile.html?uid=${user._id}`;
        
        const rank = index + 1;
        const initials = (user.firstName[0] + user.lastName[0]).toUpperCase();
        const joinDate = new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

        tr.innerHTML = `
            <td><span class="rank-val ${rank <= 3 ? 'top-rank' : ''}">#${rank}</span></td>
            <td>
                <div class="user-info">
                    <div class="user-avatar" style="${user.profilePic ? `background-image: url(${user.profilePic})` : ''}">
                        ${user.profilePic ? '' : initials}
                    </div>
                    <div class="user-details">
                        <span class="user-name">${user.firstName} ${user.lastName}</span>
                        <span class="user-email">${user.email}</span>
                    </div>
                </div>
            </td>
            <td>
                <div class="progress-cell">
                    <span class="progress-val">${user.progress || 0}%</span>
                    <div class="mini-bar">
                        <div class="mini-fill" style="width: ${user.progress || 0}%"></div>
                    </div>
                </div>
            </td>
            <td><strong>${user.quizPlayed || 0}</strong> quizzes</td>
            <td>${joinDate}</td>
        `;
        userTableBody.appendChild(tr);
    });
}

// Helpers
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

init();
