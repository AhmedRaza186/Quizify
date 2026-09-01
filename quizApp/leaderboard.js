import { API_BASE } from "../utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Fetch data
    let leaderboardData = [];
    try {
        const res = await fetch(`${API_BASE}/users/all`, {
            headers: { 'Authorization': localStorage.getItem('Quizify-token') }
        });
        const json = await res.json();
        if (!res.ok || !json.status) {
            throw new Error("Failed to fetch leaderboard data");
        }
        
        leaderboardData = json.data.map(user => ({
            id: user._id,
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
            email: user.email,
            count: user.quizPlayed || 0,
            percentage: user.progress || 0,
            date: new Date(user.createdAt).toLocaleDateString('en-US', {month: 'short', year: 'numeric'})
        }));
    } catch (error) {
        console.error("Leaderboard error:", error);
        document.getElementById('rank1Card').innerHTML = `<p style="color:var(--text-muted)">Failed to load data.</p>`;
        return;
    }

    // Sort by percentage just in case
    leaderboardData.sort((a, b) => b.percentage - a.percentage);

    renderPodium(leaderboardData.slice(0, 3));
    renderTable(leaderboardData);
});

function getInitials(name) {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

function renderPodium(top3) {
    const rank1 = top3[0];
    const rank2 = top3[1];
    const rank3 = top3[2];

    if (rank2) {
        const card2 = document.getElementById('rank2Card');
        card2.style.cursor = 'pointer';
        card2.onclick = () => window.location.href = `./profile.html?uid=${rank2.id}`;
        card2.innerHTML = `
            <div class="podium-badge">Rank 2</div>
            <div class="avatar-circle">${getInitials(rank2.name)}</div>
            <h3>${rank2.name}</h3>
            <div class="podium-score">${rank2.percentage.toFixed(1)}%</div>
        `;
    }
    
    if (rank1) {
        const card1 = document.getElementById('rank1Card');
        card1.style.cursor = 'pointer';
        card1.onclick = () => window.location.href = `./profile.html?uid=${rank1.id}`;
        card1.innerHTML = `
            <div class="podium-badge">Rank 1</div>
            <div class="magnetic-ring-container">
                <div class="magnetic-ring ring-outer"></div>
                <div class="magnetic-ring ring-middle"></div>
                <div class="magnetic-ring ring-inner"></div>
                <div class="magnetic-ring ring-dashed"></div>
                <div class="avatar-circle">${getInitials(rank1.name)}</div>
            </div>
            <h3>${rank1.name}</h3>
            <div class="podium-score">${rank1.percentage.toFixed(1)}%</div>
        `;
    }

    if (rank3) {
        const card3 = document.getElementById('rank3Card');
        card3.style.cursor = 'pointer';
        card3.onclick = () => window.location.href = `./profile.html?uid=${rank3.id}`;
        card3.innerHTML = `
            <div class="podium-badge">Rank 3</div>
            <div class="avatar-circle">${getInitials(rank3.name)}</div>
            <h3>${rank3.name}</h3>
            <div class="podium-score">${rank3.percentage.toFixed(1)}%</div>
        `;
    }
}

function renderTable(data) {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

    data.forEach((user, index) => {
        const rank = index + 1;
        
        // Generate SVG Waveform based on percentage
        // A simple bezier curve wave that looks high-tech and fluid
        // Amplitude varies slightly by rank/percentage to look organic
        const a1 = 15 - (user.percentage / 10);
        const a2 = 15 + (user.percentage / 12);
        const a3 = 15 - (user.percentage / 15);
        
        const pathD = `M0,15 Q15,${a1} 30,15 T60,${a2} T90,15 T120,${a3}`;
        
        const svgWave = `
            <svg viewBox="0 0 120 30" class="waveform-svg" preserveAspectRatio="none">
                <path d="${pathD}" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" />
            </svg>
        `;

        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => window.location.href = `./profile.html?uid=${user.id}`;
        tr.innerHTML = `
            <td>#${rank}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.count}</td>
            <td class="wave-cell">
                ${svgWave}
                <span class="wave-percentage">${user.percentage.toFixed(1)}%</span>
            </td>
            <td>${user.date}</td>
        `;
        tbody.appendChild(tr);
    });
}
