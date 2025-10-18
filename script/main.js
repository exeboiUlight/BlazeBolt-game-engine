document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const centerBlock = document.querySelector('.center-block');
    
    // Параллакс эффект при скролле
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        // Движение фона
        parallaxBg.style.transform = `translateY(${rate}px)`;
        
        // Эффект исчезновения текста
        if (scrolled > 50) {
            centerBlock.classList.add('scrolled');
        } else {
            centerBlock.classList.remove('scrolled');
        }
        
        // Эффект затемнения при скролле
        const opacity = 1 - Math.min(scrolled / 500, 0.3);
        parallaxBg.style.opacity = opacity;
    });
    
    // Добавляем плавающие частицы для красоты
    createFloatingParticles();
    
    // Управление плавной сменой фона
    initSmoothBackgroundTransition();
});

function initSmoothBackgroundTransition() {
    const backgrounds = document.querySelectorAll('.parallax-bg');
    let currentIndex = 0;
    
    function switchBackground() {
        // Скрываем текущий активный фон
        backgrounds[currentIndex].classList.remove('active');
        
        // Переходим к следующему фону
        currentIndex = (currentIndex + 1) % backgrounds.length;
        
        // Показываем следующий фон
        backgrounds[currentIndex].classList.add('active');
    }
    
    // Начинаем смену фонов
    setTimeout(() => {
        switchBackground();
        setInterval(switchBackground, 8000);
    }, 8000);
}

function createFloatingParticles() {
    const particlesContainer = document.querySelector('.center-block');
    const colors = ['#bb86fc', '#03dac6', '#ffffff'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const size = Math.random() * 4 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.4 + 0.1};
            pointer-events: none;
            z-index: -1;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Анимация частиц
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let xSpeed = (Math.random() - 0.5) * 0.2;
    let ySpeed = (Math.random() - 0.5) * 0.2;
    
    function move() {
        x += xSpeed;
        y += ySpeed;
        
        // Отскок от границ
        if (x <= 0 || x >= 100) xSpeed *= -1;
        if (y <= 0 || y >= 100) ySpeed *= -1;
        
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        requestAnimationFrame(move);
    }
    
    move();
}