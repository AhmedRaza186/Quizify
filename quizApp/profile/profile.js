

const API_BASE = window.location.hostname === "localhost"
  ? "http://localhost:8000/api"
  : "https://quizify-backend-nine.vercel.app/api";
// Utility for API calls
async function apiCall(endpoint, method = 'GET', body = null) {
    const token = localStorage.getItem('Quizify-token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = token;

    const config = { method, headers };
    if (body) config.body = JSON.stringify(body);

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok || !data.status) {
            throw new Error(data.message || 'API failed');
        }

        return data.data; // ✅ FIX (same as leaderboard)
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Global state
let quizHistory = [];
const urlParams = new URLSearchParams(window.location.search);
const targetUid = urlParams.get('uid');

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('Quizify-token');
    if (!token) {
        window.location.href = '../../auth/login.html';
        return;
    }

    setupSidebar();
    showProfileSkeletons();
    await loadUserProfile();
    await loadQuizHistory();
});

function showProfileSkeletons() {
    // Header skeletons
    document.getElementById('userFullName').innerHTML = `<div class="skeleton skeleton-title-lg"></div>`;
    // document.getElementById('userTagline').innerHTML = `<div class="skeleton skeleton-text-md"></div>`;

    // Stats skeletons
    ['totalQuizzes', 'avgScore', 'bestScore', 'profileViews'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = `<div class="skeleton" style="height: 25px; width: 60px; margin: 0 auto"></div>`;
    });

    // History Table skeletons
    const historyBody = document.getElementById('historyTableBody');
    if (historyBody) {
        historyBody.innerHTML = Array(3).fill(0).map(() => `
            <tr>
                <td><div class="skeleton" style="height: 20px; width: 120px"></div></td>
                <td><div class="skeleton" style="height: 20px; width: 60px"></div></td>
                <td><div class="skeleton" style="height: 20px; width: 100px"></div></td>
                <td><div class="skeleton" style="height: 20px; width: 80px; border-radius: 20px"></div></td>
            </tr>
        `).join('');
    }

    // Performance skeletons
    const perfBars = document.getElementById('performanceBars');
    if (perfBars) {
        perfBars.innerHTML = Array(3).fill(0).map(() => `
            <div class="skeleton-perf-bar skeleton"></div>
        `).join('');
    }
}

function setupSidebar() {
    const sidebar = document.querySelector('#sidebar');
    const toggleBtn = document.querySelector('#toggleSidebar');
    const overlay = document.querySelector('.overlay');

    const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
    if (isCollapsed) sidebar.classList.add('collapsed');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });

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

    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('Quizify-token');
            localStorage.removeItem('Quizify-user');
            window.location.href = '../../auth/login.html';
        });
    });
}

async function loadUserProfile() {
    console.log(targetUid);
    try {
        const endpoint = targetUid ? `/users/${targetUid}` : '/users';

        const user = await apiCall(endpoint);

        if (!user) return;

        updateUIWithUser(user);
        updateStats(user);

        // Mocking history and performance if not in schema yet
        renderHistory(user.quizHistory || []);
        renderPerformance(user.categoryStats || {});
            updateAchievements(user);

            if (targetUid) {
                setPublicViewMode();
            }
    } catch (err) {
        console.error('Failed to load profile:', err);
    }
}

function setPublicViewMode() {
    const publicBadge = document.getElementById('publicBadge');
    const backBtn = document.getElementById('backToLeaderboard');
    const avatarEdit = document.getElementById('avatarEditLabel');
    const settingsSection = document.querySelector('.settings-section');

    if (publicBadge) publicBadge.style.display = 'inline-flex';
    if (backBtn) {
        backBtn.style.display = 'flex';
        backBtn.onclick = () => window.location.href = '../leaderboard/leaderboard.html';
    }
    if (avatarEdit) avatarEdit.style.display = 'none';
    if (settingsSection) settingsSection.style.display = 'none';

    document.title = `${document.getElementById('userFullName').textContent} | Quizify`;
}

function updateUIWithUser(user) {
    document.getElementById('userFullName').textContent = `${user.firstName} ${user.lastName}`;
    const emailInput = document.getElementById('userEmail');
    const fNameInput = document.getElementById('firstName');
    const lNameInput = document.getElementById('lastName');

    if (emailInput) emailInput.value = user.email || '';
    if (fNameInput) fNameInput.value = user.firstName || '';
    if (lNameInput) lNameInput.value = user.lastName || '';

    if (user.profilePic) {
        document.getElementById('profileAvatar').src = user.profilePic;
    }

    if (user.createdAt) {
        const date = new Date(user.createdAt);
        document.getElementById('joinDate').textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
}

async function loadQuizHistory() {
    // Already handled in loadUserProfile for this simplified backend
}

function updateStats(user) {
    document.getElementById('totalQuizzes').textContent = user.quizPlayed || 0;
    document.getElementById('avgScore').textContent = `${Math.round(user.progress || 0)}%`;
    document.getElementById('bestScore').textContent = `${Math.round(user.bestScore || 0)}%`;
    document.getElementById('profileViews').textContent = user.profileViews || 0;
}

function renderHistory(items) {
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = '';

    if (items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="empty-msg">No quizzes played yet.</td></tr>';
        return;
    }

    items.forEach(quiz => {
        const row = document.createElement('tr');
        const statusClass = quiz.percentage >= 40 ? 'completed' : 'failed';
        const statusLabel = quiz.percentage >= 40 ? 'Completed' : 'Failed';

        row.innerHTML = `
            <td>${quiz.quizName}</td>
            <td>${Math.round(quiz.percentage)}%</td>
            <td>${new Date(quiz.date).toLocaleDateString()}</td>
            <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderPerformance(categories) {
    const container = document.getElementById('performanceBars');
    const catKeys = Object.keys(categories);

    if (catKeys.length === 0) return;

    container.innerHTML = '';
    catKeys.forEach(cat => {
        const data = categories[cat];
        const percentage = Math.round(data.averagePercentage);

        const item = document.createElement('div');
        item.className = 'perf-item';
        item.innerHTML = `
            <div class="perf-info">
                <span class="perf-label">${cat}</span>
                <span class="perf-val">${percentage}%</span>
            </div>
            <div class="perf-track">
                <div class="perf-fill" style="width: ${percentage}%"></div>
            </div>
        `;
        container.appendChild(item);
    });
}

function updateAchievements(progress) {
    const grid = document.getElementById('achievementsGrid');
    const items = grid.querySelectorAll('.achievement-item');
    const count = progress.totalQuizzes || 0;
    const best = progress.bestPercentage || 0;

    // First Quiz
    if (count >= 1) items[0].classList.replace('locked', 'unlocked');
    // Perfect Score
    if (best === 100) items[2].classList.replace('locked', 'unlocked');
    // 10 Quizzes
    if (count >= 10) items[3].classList.replace('locked', 'unlocked');

    // Note: Streak logic would require backend support, keeping it as-is for now
}

// Search and Filter
document.getElementById('historySearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = quizHistory.filter(q => q.quizName.toLowerCase().includes(term));
    renderHistory(filtered);
});

// Settings Form
document.getElementById('settingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    try {
        const response = await apiCall('/users', 'PUT', { firstName, lastName });
        if (response.status) {
            alert('Profile updated successfully!');
            loadUserProfile();
        } else {
            alert(response.message || 'Update failed');
        }
    } catch (err) {
        console.error('Update error:', err);
    }
});

// Avatar Upload
document.getElementById('avatarUpload').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show loading state
    const avatarImg = document.getElementById('profileAvatar');
    const originalSrc = avatarImg.src;
    avatarImg.style.opacity = '0.5';

    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'quizify'); // Fixed from 'ml_default'

        const imageUrl = await uploadImg(formData);

        if (imageUrl) { // Check if upload was successful
            const response = await apiCall('/users', 'PUT', { profilePic: imageUrl });
            if (response.status) {
                avatarImg.src = imageUrl;
                alert('Profile picture updated!');
            }
        } else {
            throw new Error('Cloudinary upload failed');
        }
    } catch (err) {
        console.error('Upload failed:', err);
        avatarImg.src = originalSrc;
        alert('Upload failed. Please check your internet connection or the image file.');
    } finally {
        avatarImg.style.opacity = '1';
    }
});

document.getElementById('cancelBtn').addEventListener('click', () => {
    loadUserProfile();
});
