// Theme management
const themes = {
    'light': {
        '--primary-color': '#4361ee',
        '--secondary-color': '#3a0ca3',
        '--accent-color': '#4cc9f0',
        '--text-color': '#333333',
        '--text-light': '#666666',
        '--bg-color': '#ffffff',
        '--bg-secondary': '#f8f9fa',
        '--bg-tertiary': '#e9ecef',
        '--border-color': '#dee2e6',
        '--shadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
        '--gradient': 'linear-gradient(135deg, #4361ee, #3a0ca3)'
    },
    'dark': {
        '--primary-color': '#6366f1',
        '--secondary-color': '#4f46e5',
        '--accent-color': '#06b6d4',
        '--text-color': '#f8fafc',
        '--text-light': '#cbd5e1',
        '--bg-color': '#0f172a',
        '--bg-secondary': '#1e293b',
        '--bg-tertiary': '#334155',
        '--border-color': '#475569',
        '--shadow': '0 4px 6px rgba(0, 0, 0, 0.3)',
        '--gradient': 'linear-gradient(135deg, #6366f1, #4f46e5)'
    },
    'console': {
        '--primary-color': '#00ff00',
        '--secondary-color': '#008800',
        '--accent-color': '#00cc00',
        '--text-color': '#00ff00',
        '--text-light': '#008800',
        '--bg-color': '#000000',
        '--bg-secondary': '#001100',
        '--bg-tertiary': '#002200',
        '--border-color': '#004400',
        '--shadow': '0 4px 6px rgba(0, 255, 0, 0.2)',
        '--gradient': 'linear-gradient(135deg, #00ff00, #008800)'
    }
};

let currentTheme = 'light';

function applyTheme(themeName) {
    const theme = themes[themeName];
    const root = document.documentElement;
    
    // Apply all CSS variables
    Object.keys(theme).forEach(variable => {
        root.style.setProperty(variable, theme[variable]);
    });
    
    // Update theme attribute
    root.setAttribute('data-theme', themeName);
    currentTheme = themeName;
    
    // Update active state of theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === themeName) {
            btn.classList.add('active');
        }
    });
    
    // Update theme toggle icon
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    switch(themeName) {
        case 'dark':
            icon.className = 'fas fa-moon';
            break;
        case 'light':
            icon.className = 'fas fa-sun';
            break;
        case 'console':
            icon.className = 'fas fa-terminal';
            break;
    }
    
    // Save preference to localStorage
    localStorage.setItem('preferredTheme', themeName);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    applyTheme(savedTheme);
    
    // Add click events to theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
    
    // Add click event to theme toggle
    document.getElementById('themeToggle').addEventListener('click', function() {
        const themes = ['light', 'dark', 'console'];
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        applyTheme(themes[nextIndex]);
    });
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all animate elements
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
    
    // Particles background
    initParticles();
});

// Simple particles background
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}