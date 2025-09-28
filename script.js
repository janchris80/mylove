// Love letter text - you can customize this message
const loveLetterText = `My love,

Happy 2nd monthsary! I still remember back in January 2025 when we first knew each other. Then August 1, 2025 came — the happiest day of my life — when you accepted me as your boyfriend. Since that day, my world became brighter because of you.

I know we're in an LDR and we haven't met yet, but every day I feel closer to you. I even planned to see you last September, pero hindi natuloy dahil kulang ang budget at mali yung research ko sa pamasahe. Pero please know, love, hindi ako susuko. Magkikita rin tayo — promise ko 'yan.

Even though distance separates us, my heart belongs to you. You are my happiness, my inspiration, and my greatest blessing. Thank you for loving me and for being part of my life. From here, mas lalo pa nating sisikapin ang future natin.

Forever yours,
Jco`;

// Typing animation for love letter
let typingStarted = false; // Flag to prevent multiple typing animations

function startTypingAnimation() {
    if (typingStarted) return; // Prevent multiple executions

    typingStarted = true;
    const textElement = document.getElementById('typing-text');
    let index = 0;

    // Clear any existing content first
    textElement.textContent = '';

    function typeChar() {
        if (index < loveLetterText.length) {
            textElement.textContent += loveLetterText.charAt(index);
            index++;
            setTimeout(typeChar, 50); // Adjust speed here (lower = faster)
        } else {
            textElement.classList.remove('typing');
        }
    }

    textElement.classList.add('typing');
    typeChar();
}

// Reveal promises function
function revealPromises() {
    const promisesElement = document.getElementById('promises');
    const button = document.querySelector('.reveal-btn');

    promisesElement.classList.add('revealed');
    button.style.display = 'none';
}

// Countdown timer function
function updateCountdown() {
    // Set your relationship start date here (August 1, 2025 as example)
    const startDate = new Date('2025-08-01T00:00:00');
    const now = new Date();

    const timeDifference = now - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Confetti animation
function launchConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

    // Clear previous confetti
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + 's';

        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');

    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.color = `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`;
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 4 + 4 + 's';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.animationName = 'float';
        heart.style.animationIterationCount = 'infinite';
        heart.style.animationTimingFunction = 'ease-in-out';

        heartsContainer.appendChild(heart);
    }
}

// Smooth scrolling for navigation
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;

                // Trigger typing animation when letter section is visible
                if (section.id === 'letter') {
                    setTimeout(() => {
                        startTypingAnimation();
                    }, 500);
                }

                // Add fade-in animations to elements
                const animateElements = section.querySelectorAll('.photo-item, .countdown-item');
                animateElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize photo gallery hover effects
function initPhotoGallery() {
    const photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach(item => {
        // Set initial state for animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
    });
}

// Add parallax effect to sections
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-hearts');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize the LDR map
function initLDRMap() {
    // Coordinates for Pampanga and Davao
    const pampangaCoords = [15.0794, 120.6200]; // Pampanga coordinates
    const davaoCoords = [7.1907, 125.4553]; // Davao coordinates

    // Create map centered between the two cities
    const map = L.map('ldr-map').setView([11.1, 122.9], 6);

    // Add beautiful tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);

    // Custom heart icon for markers
    const heartIcon = L.divIcon({
        html: '<div style="background: linear-gradient(45deg, #ff6b6b, #ff8a8a); width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 15px rgba(255, 107, 107, 0.8); animation: pulse 2s infinite;"></div>',
        iconSize: [20, 20],
        className: 'custom-heart-icon'
    });

    const heartIcon2 = L.divIcon({
        html: '<div style="background: linear-gradient(45deg, #4ecdc4, #44a08d); width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 15px rgba(78, 205, 196, 0.8); animation: pulse 2s infinite;"></div>',
        iconSize: [20, 20],
        className: 'custom-heart-icon'
    });

    // Add markers
    const pampangaMarker = L.marker(pampangaCoords, {icon: heartIcon})
        .addTo(map)
        .bindPopup('<div style="text-align: center; font-family: Poppins;"><strong>Pampanga</strong><br><em>Where my heart lives ❤️</em></div>');

    const davaoMarker = L.marker(davaoCoords, {icon: heartIcon2})
        .addTo(map)
        .bindPopup('<div style="text-align: center; font-family: Poppins;"><strong>Davao</strong><br><em>Where I am waiting 💙</em></div>');

    // Draw connecting line
    const latlngs = [pampangaCoords, davaoCoords];
    const polyline = L.polyline(latlngs, {
        color: '#ff6b6b',
        weight: 4,
        opacity: 0.8,
        dashArray: '10, 10',
        dashOffset: '0'
    }).addTo(map);

    // Animate the dashed line
    let offset = 0;
    setInterval(() => {
        offset += 2;
        polyline.setStyle({dashOffset: offset});
    }, 100);

    // Fit map to show both locations
    const group = new L.featureGroup([pampangaMarker, davaoMarker, polyline]);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Initialize all features when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Create floating hearts
    createFloatingHearts();

    // Setup scroll animations
    setupScrollAnimations();

    // Initialize photo gallery
    initPhotoGallery();

    // Add parallax effect
    addParallaxEffect();

    // Initialize the LDR map
    initLDRMap();

    // Add click event to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            smoothScrollToSection('connection');
        });
    }

    console.log('💖 Love website initialized successfully! 💖');
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click ripple effect
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);