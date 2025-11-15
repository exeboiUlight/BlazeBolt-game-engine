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
                'role3': 'второй основной программист',
                'role4': 'Главный дизанер',
                'startDate': 'Разработка была начата 14.09.2025',
                'devInfo': 'Разрабатывается в основном одним человеком',
                'advantages': 'Плюсы',
                'advantage1': 'Частые обновления',
                'advantage2': 'Множество шаблонов',
                'advantage3': 'Работа над качеством',
                'advantage4': 'Нормальный менаджмент для разработки',
                // Новые переводы для страницы версий
                'versionsTitle': 'Версии BlazeBolt',
                'heroTitle': 'Скачайте BlazeBolt Game Engine',
                'heroSubtitle': 'Выберите версию и начните создавать удивительные игры',
                'feature1': 'Базовая система 2D рендеринга',
                'feature2': 'Обработка ввода',
                'feature3': 'Аудио система',
                'feature4': 'Шаблоны проектов',
                'feature5': 'Начальный рендеринг',
                'feature6': 'Базовая структура',
                'feature7': 'Первый публичный релиз',
                'feature8': 'Основная архитектура',
                'downloadWindows': 'Скачать для Windows',
                'installTitle': 'Инструкция по установке',
                'step1Title': 'Скачайте архив',
                'step1Desc': 'Нажмите на кнопку скачивания для выбранной версии',
                'step2Title': 'Распакуйте файлы',
                'step2Desc': 'Разархивируйте скачанный архив в нужную папку',
                'step3Title': 'Запустите движок',
                'step3Desc': 'Запустите BlazeBolt.exe и начните создавать игру',
                'requirementsTitle': 'Системные требования',
                'requirementsMin': 'Минимальные',
                'requirementsRec': 'Рекомендуемые',
                'req1': 'Windows 10 или новее',
                'req2': '2-ядерный процессор 2.0 GHz',
                'req3': '4 GB оперативной памяти',
                'req4': '1 GB свободного места',
                'req5': 'Видеокарта с DirectX 11',
                'req6': 'Windows 11',
                'req7': '4-ядерный процессор 3.0 GHz',
                'req8': '8 GB оперативной памяти',
                'req9': '2 GB свободного места',
                'req10': 'Видеокарта с DirectX 12'
            },
            'en': {
                'title': 'BlazeBolt Game Engine',
                'subtitle': 'is an easy engine for easy prototyping and video game development',
                'download': 'Download',
                'creators': 'Creators',
                'role1': 'Author of the idea and lead programmer',
                'role2': 'sometimes helps with code',
                'role3': 'second lead programmer',
                'role4': 'Lead designer',
                'startDate': 'Development started on 09/14/2025',
                'devInfo': 'Developed mainly by one person',
                'advantages': 'Advantages',
                'advantage1': 'Frequent updates',
                'advantage2': 'Multiple templates',
                'advantage3': 'Quality work',
                'advantage4': 'Proper development management',
                // New translations for versions page
                'versionsTitle': 'BlazeBolt Versions',
                'heroTitle': 'Download BlazeBolt Game Engine',
                'heroSubtitle': 'Choose your version and start creating amazing games',
                'feature1': 'Basic 2D rendering system',
                'feature2': 'Input handling',
                'feature3': 'Audio system',
                'feature4': 'Project templates',
                'feature5': 'Initial rendering engine',
                'feature6': 'Basic framework',
                'feature7': 'First public release',
                'feature8': 'Core architecture',
                'downloadWindows': 'Download for Windows',
                'installTitle': 'Installation Instructions',
                'step1Title': 'Download the Archive',
                'step1Desc': 'Click on the download button for your desired version',
                'step2Title': 'Extract Files',
                'step2Desc': 'Unzip the downloaded archive to your preferred location',
                'step3Title': 'Run the Engine',
                'step3Desc': 'Launch BlazeBolt.exe and start creating your game',
                'requirementsTitle': 'System Requirements',
                'requirementsMin': 'Minimum',
                'requirementsRec': 'Recommended',
                'req1': 'Windows 10 or later',
                'req2': 'Dual-core processor 2.0 GHz',
                'req3': '4 GB RAM',
                'req4': '1 GB free disk space',
                'req5': 'DirectX 11 compatible GPU',
                'req6': 'Windows 11',
                'req7': 'Quad-core processor 3.0 GHz',
                'req8': '8 GB RAM',
                'req9': '2 GB free disk space',
                'req10': 'DirectX 12 compatible GPU'
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
        if (langBtn) {
            langBtn.addEventListener('click', () => this.toggleLanguage());
        }
    }
}

// Инициализация менеджера локализации
document.addEventListener('DOMContentLoaded', () => {
    new LocalizationManager();
});