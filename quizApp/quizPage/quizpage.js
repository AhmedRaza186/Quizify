const options = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');

options.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'selected' from all
        options.forEach(o => o.classList.remove('selected'));
        
        // Add to clicked
        btn.classList.add('selected');
        
        // Enable Next Button
        nextBtn.disabled = false;
        nextBtn.style.opacity = "1";
    });
});