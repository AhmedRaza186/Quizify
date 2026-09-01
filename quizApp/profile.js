import { API_BASE } from "../utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const uid = params.get('uid');
    const endpoint = uid ? `${API_BASE}/users/${uid}` : `${API_BASE}/users`;

    let profileData = {};
    try {
        const res = await fetch(endpoint, {
            headers: { 'Authorization': localStorage.getItem('Quizify-token') }
        });
        const json = await res.json();
        if (!res.ok || !json.status) {
            throw new Error("Failed to fetch profile data");
        }
        
        const data = json.data;
        profileData = {
            name: `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'User',
            subheadline: "Quiz Enthusiast",
            joinDate: `Joined ${new Date(data.createdAt).toLocaleDateString('en-US', {month: 'short', year: 'numeric'})}`,
            stats: {
                played: data.quizPlayed || 0,
                avgScore: data.progress || 0,
                bestScore: data.bestScore || 0,
                views: 0
            },
            categories: []
        };

        if (data.categoryStats) {
            for (const [key, val] of Object.entries(data.categoryStats)) {
                profileData.categories.push({ name: key, score: val.averagePercentage || 0 });
            }
        }

    } catch (error) {
        console.error("Profile fetch error:", error);
        return;
    }

    // 2. Render Header
    const initials = profileData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('profileInitials').innerText = initials;
    document.getElementById('profileName').innerText = profileData.name;

    // 3. Render Stats
    document.getElementById('statPlayed').innerText = profileData.stats.played;
    document.getElementById('statAvg').innerText = `${profileData.stats.avgScore}%`;
    document.getElementById('statBest').innerText = `${profileData.stats.bestScore}%`;
    document.getElementById('statViews').innerText = profileData.stats.views;

    // 4. Render Category Performance (SVG Waveforms)
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    profileData.categories.forEach(cat => {
        // Generating a dynamic, flowing SVG laser line based on the score
        const a1 = 15 - (cat.score / 8);
        const a2 = 15 + (cat.score / 10);
        const a3 = 15 - (cat.score / 12);
        
        const pathD = `M0,15 Q25,${a1} 50,15 T100,${a2} T150,15 T200,${a3}`;
        
        const svgWave = `
            <svg viewBox="0 0 200 30" class="waveform-svg" preserveAspectRatio="none">
                <path d="${pathD}" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" />
            </svg>
        `;

        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <div class="cat-name">${cat.name}</div>
            <div class="cat-wave">${svgWave}</div>
            <div class="cat-score">${cat.score}%</div>
        `;
        categoryList.appendChild(div);
    });
});
