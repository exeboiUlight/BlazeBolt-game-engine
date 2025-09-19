// Локализации
const locales = {
    ru: {
        'nav.about': 'О движке',
        'nav.specs': 'Системные требования',
        'nav.features': 'Возможности',
        'nav.download': 'Скачать',
        
        'theme.dark': 'Тёмная тема',
        'theme.light': 'Светлая тема',
        
        'hero.title': 'BlazeBolt Engine',
        'hero.subtitle': 'Мощный игровой движок на языке Lua для создания потрясающих игровых миров с невероятной производительностью',
        'hero.button': 'Начать разработку',
        
        'about.title': 'О нас',
        'about.company': 'BloodBath Software',
        'about.description1': 'Мы - студия разработки программного обеспечения и видеоигр. Наша студия появилась в 2025 году с целью создания инновационных решений для игровой индустрии.',
        'about.description2': 'Наша команда состоит из талантливых разработчиков, дизайнеров и тестеров, которые горят своим делом и стремятся создавать продукты высочайшего качества.',
        'about.description3': 'BlazeBolt Engine - это наш флагманский продукт, разработанный с использованием языка Lua для обеспечения гибкости и простоты использования.',
        
        'specs.title': 'Системные требования',
        'specs.hdd': 'Жёсткий диск',
        'specs.hddDesc': 'Минимум 10 МБ свободного места',
        'specs.cpu': 'Процессор',
        'specs.cpuDesc': 'Intel Core i7-2600 или эквивалент',
        'specs.gpu': 'Видеокарта',
        'specs.gpuDesc': 'NVIDIA GeForce GTX 1070 или лучше',
        'specs.os': 'Операционная система',
        'specs.osDesc': 'Windows 10, Linux или macOS',
        
        'features.title': 'Возможности движка',
        'features.performance': 'Высокая производительность',
        'features.performanceDesc': 'Оптимизированное ядро обеспечивает плавный геймплей даже на средних системах',
        'features.flexibility': 'Гибкость Lua',
        'features.flexibilityDesc': 'Использование Lua позволяет легко customizing и расширять функциональность',
        'features.crossplatform': 'Кроссплатформенность',
        'features.crossplatformDesc': 'Создавайте игры для Windows, Linux, macOS и даже мобильных платформ',
        'features.editor': 'Мощный редактор',
        'features.editorDesc': 'Встроенный редактор с интуитивным интерфейсом для быстрой разработки',
        
        'download.title': 'Скачать BlazeBolt Engine',
        'download.windows': 'Версия для Windows',
        'download.linux': 'Версия для Linux',
        'download.build': 'Build 0.0.1',
        'download.size': 'Размер: ~15 MB',
        'download.button': '📥 Скачать',
        'download.note': 'Движок полностью бесплатен для некоммерческого использования.',
        
        'footer.rights': 'Все права защищены.',
        
        'social.twitter': '📱 Twitter',
        'social.instagram': '📷 Instagram',
        'social.github': '👨‍💻 GitHub',
        'social.youtube': '📺 YouTube'
    },
    en: {
        'nav.about': 'About Engine',
        'nav.specs': 'System Requirements',
        'nav.features': 'Features',
        'nav.download': 'Download',
        
        'theme.dark': 'Dark Theme',
        'theme.light': 'Light Theme',
        
        'hero.title': 'BlazeBolt Engine',
        'hero.subtitle': 'Powerful game engine using Lua language for creating amazing game worlds with incredible performance',
        'hero.button': 'Start Developing',
        
        'about.title': 'About Us',
        'about.company': 'BloodBath Software',
        'about.description1': 'We are a software and video game development studio. Our studio was founded in 2025 with the goal of creating innovative solutions for the gaming industry.',
        'about.description2': 'Our team consists of talented developers, designers, and testers who are passionate about their work and strive to create products of the highest quality.',
        'about.description3': 'BlazeBolt Engine is our flagship product, developed using the Lua language for flexibility and ease of use.',
        
        'specs.title': 'System Requirements',
        'specs.hdd': 'Hard Disk',
        'specs.hddDesc': 'Minimum 10 MB free space',
        'specs.cpu': 'Processor',
        'specs.cpuDesc': 'Intel Core i7-2600 or equivalent',
        'specs.gpu': 'Graphics Card',
        'specs.gpuDesc': 'NVIDIA GeForce GTX 1070 or better',
        'specs.os': 'Operating System',
        'specs.osDesc': 'Windows 10, Linux or macOS',
        
        'features.title': 'Engine Features',
        'features.performance': 'High Performance',
        'features.performanceDesc': 'Optimized core ensures smooth gameplay even on mid-range systems',
        'features.flexibility': 'Lua Flexibility',
        'features.flexibilityDesc': 'Using Lua allows easy customization and functionality extension',
        'features.crossplatform': 'Cross-Platform',
        'features.crossplatformDesc': 'Create games for Windows, Linux, macOS and even mobile platforms',
        'features.editor': 'Powerful Editor',
        'features.editorDesc': 'Built-in editor with intuitive interface for rapid development',
        
        'download.title': 'Download BlazeBolt Engine',
        'download.windows': 'Windows Version',
        'download.linux': 'Linux Version',
        'download.build': 'Build 0.0.1',
        'download.size': 'Size: ~15 MB',
        'download.button': '📥 Download',
        'download.note': 'The engine is completely free for non-commercial use.',
        
        'footer.rights': 'All rights reserved.',
        
        'social.twitter': '📱 Twitter',
        'social.instagram': '📷 Instagram',
        'social.github': '👨‍💻 GitHub',
        'social.youtube': '📺 YouTube'
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
    langToggle.textContent = lang === 'ru' ? '🇷🇺 RU' : '🇺🇸 EN';
    
    // Сохраняем выбор языка
    localStorage.setItem('preferredLanguage', lang);
}

// Инициализация локализации
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'ru';
    applyLocale(savedLanguage);
    
    // Обработчик переключения языка
    document.getElementById('langToggle').addEventListener('click', function() {
        const currentLang = localStorage.getItem('preferredLanguage') || 'ru';
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        applyLocale(newLang);
    });
});