class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeButton(theme);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
    }

    updateThemeButton(theme) {
        const themeBtn = document.getElementById('themeToggle');
        const themeIcon = themeBtn.querySelector('.theme-icon');
        
        if (theme === 'light') {
            themeIcon.textContent = '☀️';
            themeBtn.title = 'Переключить на темную тему';
        } else {
            themeIcon.textContent = '🌙';
            themeBtn.title = 'Переключить на светлую тему';
        }
    }

    setupEventListeners() {
        const themeBtn = document.getElementById('themeToggle');
        themeBtn.addEventListener('click', () => this.toggleTheme());
    }
}

// Инициализация менеджера тем
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});