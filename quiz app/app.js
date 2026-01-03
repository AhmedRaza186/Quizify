const dp = document.querySelector('.circle');
const sidebar = document.querySelector('.profileSidebar');
const overlay = document.querySelector('.overlay');

dp.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

let progress = document.querySelector('.progressFill')
progress.style.width ='72%'