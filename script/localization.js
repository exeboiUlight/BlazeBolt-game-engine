// Локализация
class LocalizationManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ru';
        this.translations = {
            'ru': {
                'title': 'BlazeBolt game engine',
                'subtitle': 'это простой движок для простого прототипирования и разработки видео игр',
                'download': 'Скачать',
                'creators': 'Создатели',
                'role1': 'Автор идеи и главный программист',
                'role2': 'иногда помогает с кодом',
                'startDate': 'Разработка была начата 14.09.2025',
                'devInfo': 'Разрабатывается в основном одним человеком',
                'advantages': 'Плюсы',
                'advantage1': 'Частые обновления',
                'advantage2': 'Множество шаблонов',
                'advantage3': 'Работа над качеством',
                'advantage4': 'Нормальный менаджмент для разработки'
            },
            'en': {
                'title': 'BlazeBolt Game Engine',
                'subtitle': 'is an easy engine for easy prototyping and video game development',
                'download': 'Download',
                'creators': 'Creators',
                'role1': 'Author of the idea and lead programmer',
                'role2': 'sometimes helps with code',
                'startDate': 'Development started on 09/14/2025',
                'devInfo': 'Developed mainly by one person',
                'advantages': 'Advantages',
                'advantage1': 'Frequent updates',
                'advantage2': 'Multiple templates',
                'advantage3': 'Quality work',
                'advantage4': 'Proper development management'
            }
        };
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Обновляем все элементы с data-i18n атрибутом
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });

        this.updateLanguageButton(lang);
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'ru' ? 'en' : 'ru';
        this.applyLanguage(newLang);
    }

    updateLanguageButton(lang) {
        const langBtn = document.getElementById('langToggle');
        const langText = langBtn.querySelector('.lang-text');
        
        if (lang === 'ru') {
            langText.textContent = 'EN';
            langBtn.title = 'Switch to English';
        } else {
            langText.textContent = 'RU';
            langBtn.title = 'Переключить на русский';
        }
    }

    setupEventListeners() {
        const langBtn = document.getElementById('langToggle');
        langBtn.addEventListener('click', () => this.toggleLanguage());
    }
}

// Инициализация менеджера локализации
document.addEventListener('DOMContentLoaded', () => {
    new LocalizationManager();
});