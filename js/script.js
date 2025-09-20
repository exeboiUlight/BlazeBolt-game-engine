
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('preferredTheme');
if (savedTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    updateThemeButtonText();
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('preferredTheme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('preferredTheme', 'dark');
    }
    updateThemeButtonText();
});

function updateThemeButtonText() {
    const themeText = body.classList.contains('dark-theme') ? 
        document.querySelector('[data-i18n="theme.dark"]').textContent : 
        document.querySelector('[data-i18n="theme.light"]').textContent;
    
    themeToggle.innerHTML = body.classList.contains('dark-theme') ? 
        `🌙 <span data-i18n="theme.dark">${themeText}</span>` : 
        `☀️ <span data-i18n="theme.light">${themeText}</span>`;
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Обновляем текст кнопки темы при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateThemeButtonText();
});