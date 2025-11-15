// Локализация для страницы версий
document.addEventListener('DOMContentLoaded', function() {
    // Расширяем менеджер локализации
    const locManager = new LocalizationManager();
    
    // Добавляем переводы для страницы версий
    locManager.translations.ru = {
        ...locManager.translations.ru,
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
    };

    locManager.translations.en = {
        ...locManager.translations.en,
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
    };

    // Применяем текущий язык
    locManager.applyLanguage(locManager.currentLang);

    // Анимация появления карточек
    const animateCards = () => {
        const cards = document.querySelectorAll('.version-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // Запускаем анимацию после загрузки
    setTimeout(animateCards, 500);

    // Добавляем эффект при наведении на кнопки скачивания
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});