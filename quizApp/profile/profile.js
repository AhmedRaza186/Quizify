import { uploadImg } from "../../cloudinary.js";

const API_BASE = 'http://localhost:8000/api';

// Utility for API calls
async function apiCall(endpoint, method = 'GET', body = null) {
    const token = localStorage.getItem('Quizify-token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = token;

    const config = { method, headers };
    if (body) config.body = JSON.stringify(body);

    const response = await fetch(`${API_BASE}${endpoint}`, config);
    return await response.json();
}

// Global state
let quizHistory = [];

document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('Quizify-token');
    if (!token) {
        window.location.href = '../../auth/login.html';
        return;
    }

    setupSidebar();
    await loadUserProfile();
    await loadQuizHistory();
});

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
    try {
        const response = await apiCall('/users');
        if (response.status) {
            const user = response.data || response.user; // Handle different response formats
            updateUIWithUser(user);
            updateStats(user);
            
            // Mocking history and performance if not in schema yet
            renderHistory(user.quizHistory || []);
            renderPerformance(user.categoryStats || {});
            updateAchievements(user);
        }
    } catch (err) {
        console.error('Failed to load profile:', err);
    }
}

function updateUIWithUser(user) {
    document.getElementById('userFullName').textContent = `${user.firstName} ${user.lastName}`;
    document.getElementById('userEmail').value = user.email;
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    
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
    // Rank would normally be calculated or returned
    document.getElementById('globalRank').textContent = user.rank ? `#${user.rank}` : '#--';
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
