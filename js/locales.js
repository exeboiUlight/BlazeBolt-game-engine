// Локализации
const locales = {
    ru: {
        // Навигация
        'nav.home': 'Главная',
        'nav.about': 'О движке',
        'nav.features': 'Возможности',
        'nav.specs': 'Требования',
        'nav.download': 'Скачать',
        'nav.gallery': 'Галерея',
        
        // Герой секция
        'hero.engine': 'Движок',
        'hero.subtitle': 'Мощный игровой движок на языке Lua для создания потрясающих игровых миров с невероятной производительностью',
        'hero.button': 'Начать разработку',
        
        // О нас
        'about.title': 'О BlazeBolt Engine',
        'about.subtitle': 'Современный движок для современных разработчиков',
        'about.company': 'BloodBath Software',
        'about.description1': 'Мы - студия разработки программного обеспечения и видеоигр. Наша студия появилась в 2025 году с целью создания инновационных решений для игровой индустрии.',
        'about.description2': 'Наша команда состоит из талантливых разработчиков, дизайнеров и тестеров, которые горят своим делом и стремятся создавать продукты высочайшего качества.',
        'about.developers': 'Разработчиков',
        'about.games': 'Создано игр',
        'about.satisfied': 'Довольных пользователей',
        
        // Возможности
        'features.title': 'Возможности движка',
        'features.subtitle': 'Все что нужно для создания удивительных игр',
        'features.performance': 'Высокая производительность',
        'features.performanceDesc': 'Оптимизированное ядро обеспечивает плавный геймплей даже на средних системах',
        'features.flexibility': 'Гибкость Lua',
        'features.flexibilityDesc': 'Использование Lua позволяет легко настраивать и расширять функциональность',
        'features.crossplatform': 'Кроссплатформенность',
        'features.crossplatformDesc': 'Создавайте игры для Windows, Linux, macOS и даже мобильных платформ',
        'features.editor': 'Мощный редактор',
        'features.editorDesc': 'Встроенный редактор с интуитивным интерфейсом для быстрой разработки',
        
        // Требования
        'specs.title': 'Системные требования',
        'specs.subtitle': 'Минимальные требования для работы с движком',
        'specs.hdd': 'Жёсткий диск',
        'specs.hddDesc': 'Минимум 10 МБ свободного места',
        'specs.cpu': 'Процессор',
        'specs.cpuDesc': 'Intel Core i7-2600 или эквивалент',
        'specs.gpu': 'Видеокарта',
        'specs.gpuDesc': 'NVIDIA GeForce GTX 1070 или лучше',
        'specs.os': 'Операционная система',
        'specs.osDesc': 'Windows 10, Linux или macOS',
        
        // Скачать
        'download.title': 'Скачать BlazeBolt Engine',
        'download.subtitle': 'Выберите версию для вашей операционной системы',
        'download.windows': 'Версия для Windows',
        'download.linux': 'Версия для Linux',
        'download.build': 'Сборка 0.0.2',
        'download.size': 'Размер: ~15 МБ',
        'download.button': '📥 Скачать',
        'download.note': 'Движок полностью бесплатен для некоммерческого использования.',
        
        // Футер
        'footer.rights': 'Все права защищены.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.specs': 'Requirements',
        'nav.download': 'Download',
        'nav.gallery': 'Gallery',
        
        // Hero section
        'hero.engine': 'Engine',
        'hero.subtitle': 'Powerful Lua game engine for creating amazing game worlds with incredible performance',
        'hero.button': 'Start Developing',
        
        // About
        'about.title': 'About BlazeBolt Engine',
        'about.subtitle': 'Modern engine for modern developers',
        'about.company': 'BloodBath Software',
        'about.description1': 'We are a software and video game development studio. Our studio was founded in 2025 with the goal of creating innovative solutions for the gaming industry.',
        'about.description2': 'Our team consists of talented developers, designers, and testers who are passionate about their work and strive to create products of the highest quality.',
        'about.developers': 'Developers',
        'about.games': 'Games Created',
        'about.satisfied': 'Satisfied Users',
        
        // Features
        'features.title': 'Engine Features',
        'features.subtitle': 'Everything you need to create amazing games',
        'features.performance': 'High Performance',
        'features.performanceDesc': 'Optimized core ensures smooth gameplay even on mid-range systems',
        'features.flexibility': 'Lua Flexibility',
        'features.flexibilityDesc': 'Using Lua allows easy customization and functionality extension',
        'features.crossplatform': 'Cross-Platform',
        'features.crossplatformDesc': 'Create games for Windows, Linux, macOS and even mobile platforms',
        'features.editor': 'Powerful Editor',
        'features.editorDesc': 'Built-in editor with intuitive interface for rapid development',
        
        // Specs
        'specs.title': 'System Requirements',
        'specs.subtitle': 'Minimum requirements to work with the engine',
        'specs.hdd': 'Hard Drive',
        'specs.hddDesc': 'Minimum 10 MB free space',
        'specs.cpu': 'Processor',
        'specs.cpuDesc': 'Intel Core i7-2600 or equivalent',
        'specs.gpu': 'Graphics Card',
        'specs.gpuDesc': 'NVIDIA GeForce GTX 1070 or better',
        'specs.os': 'Operating System',
        'specs.osDesc': 'Windows 10, Linux or macOS',
        
        // Download
        'download.title': 'Download BlazeBolt Engine',
        'download.subtitle': 'Choose version for your operating system',
        'download.windows': 'Windows Version',
        'download.linux': 'Linux Version',
        'download.build': 'Build 0.0.2',
        'download.size': 'Size: ~15 MB',
        'download.button': '📥 Download',
        'download.note': 'The engine is completely free for non-commercial use.',
        
        // Footer
        'footer.rights': 'All rights reserved.'
    }
};

// Функция для применения локализации
function applyLocale(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (locales[lang] && locales[lang][key]) {
            element.textContent = locales[lang][key];
        }
    });
    
    // Обновляем текст кнопки языка
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'ru' ? '🇷🇺 RU' : '🇺🇸 EN';
    }
    
    // Обновляем атрибут lang у html элемента
    document.documentElement.lang = lang;
    
    // Сохраняем выбор языка
    localStorage.setItem('preferredLanguage', lang);
}

// Инициализация локализации
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    applyLocale(savedLanguage);
    
    // Обработчик переключения языка
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            applyLocale(newLang);
        });
    }
});