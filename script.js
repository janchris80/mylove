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

// Create animated particles
function createParticles() {
    const particleContainer = document.querySelector('.particle-background');

    function addParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 4 + 6 + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        // Random particle types
        const particleTypes = ['•', '✦', '✧', '⭐', '◦'];
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];

        if (randomType !== '•') {
            particle.innerHTML = randomType;
            particle.style.background = 'none';
            particle.style.color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
            particle.style.fontSize = Math.random() * 8 + 8 + 'px';
        }

        particleContainer.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }

    // Create particles continuously
    setInterval(addParticle, 500);

    // Initial particles
    for (let i = 0; i < 10; i++) {
        setTimeout(addParticle, i * 200);
    }
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

// Photo gallery data for modal
const galleryData = [
    {
        src: 'images/image (1).jpg',
        title: 'Your Beautiful Smile',
        description: 'Your beautiful smile that brightens my day'
    },
    {
        src: 'images/image (2).jpg',
        title: 'Our Love Story',
        description: 'Every picture tells our love story'
    },
    {
        src: 'images/image (3).jpg',
        title: 'Magical Moments',
        description: 'You make every moment magical'
    },
    {
        src: 'images/image (4).jpg',
        title: 'My Heart Belongs To You',
        description: 'My heart belongs to you'
    },
    {
        src: 'images/image (5).jpg',
        title: 'Distance Means Nothing',
        description: 'Distance means nothing when you mean everything'
    },
    {
        src: 'images/image (1).jpeg',
        title: 'Forever Grateful',
        description: 'Forever grateful for you'
    }
];

let currentImageIndex = 0;

// Initialize photo gallery with modal functionality
function initPhotoGallery() {
    const photoItems = document.querySelectorAll('.photo-item');
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Set initial state for animation
    photoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';

        // Add click event to open modal
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openModal();
        });
    });

    // Modal functions
    function openModal() {
        const imageData = galleryData[currentImageIndex];
        modalImage.src = imageData.src;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        const imageData = galleryData[currentImageIndex];
        modalImage.src = imageData.src;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        const imageData = galleryData[currentImageIndex];
        modalImage.src = imageData.src;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
    }

    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close modal when clicking outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
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

// Initialize navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close menu after click
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Highlight active section
    function highlightActiveSection() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
}

// Initialize love meter
function initLoveMeter() {
    const loveMeterFill = document.querySelector('.love-meter-fill');
    const loveMeterPercentage = document.querySelector('.love-meter-percentage');
    const loveMeterHeart = document.querySelector('.love-meter-heart');

    function updateLoveMeter() {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / documentHeight) * 100, 100);

        // Update the fill bar
        loveMeterFill.style.height = scrollPercent + '%';

        // Update percentage text
        loveMeterPercentage.textContent = Math.round(scrollPercent) + '%';

        // Change heart based on love level
        if (scrollPercent >= 90) {
            loveMeterHeart.textContent = '💘'; // Arrow through heart
        } else if (scrollPercent >= 70) {
            loveMeterHeart.textContent = '💕'; // Two hearts
        } else if (scrollPercent >= 50) {
            loveMeterHeart.textContent = '💖'; // Sparkling heart
        } else if (scrollPercent >= 30) {
            loveMeterHeart.textContent = '💗'; // Growing heart
        } else {
            loveMeterHeart.textContent = '🤍'; // White heart (starting)
        }

        // Add special effects at milestones
        if (scrollPercent >= 100) {
            loveMeterFill.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.8)';
            loveMeterHeart.style.animation = 'heartBeat 0.5s infinite';
        } else {
            loveMeterFill.style.boxShadow = '0 0 10px rgba(255, 107, 107, 0.5)';
            loveMeterHeart.style.animation = 'heartBeat 2s infinite';
        }
    }

    window.addEventListener('scroll', updateLoveMeter);
    updateLoveMeter(); // Initial call
}

// Initialize timeline animations
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 200); // Stagger animation
            }
        });
    }

    // Initial check
    animateTimeline();

    // Check on scroll
    window.addEventListener('scroll', animateTimeline);

    // Add click interactions for timeline items
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const icon = item.querySelector('.timeline-icon');

        content.addEventListener('click', () => {
            // Add a special click effect
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            content.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 255, 255, 0.9))';

            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
                content.style.background = '';
            }, 500);
        });

        // Hover effects for timeline dots
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            if (!dot.classList.contains('active')) {
                dot.style.background = '#ff6b6b';
                dot.style.borderColor = '#fff';
            }
        });

        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline-dot');
            if (!dot.classList.contains('active') && !dot.classList.contains('future')) {
                dot.style.background = '#fff';
                dot.style.borderColor = '#ff6b6b';
            }
        });
    });
}

// Floating love notes system
function initFloatingLoveNotes() {
    const loveNotesContainer = document.getElementById('love-notes');

    const loveMessages = [
        {
            heart: '💕',
            text: 'Thinking of you always',
            signature: '- Jco'
        },
        {
            heart: '🥰',
            text: 'You make my heart skip a beat',
            signature: '- Your boyfriend'
        },
        {
            heart: '💖',
            text: 'Distance means nothing when you mean everything',
            signature: '- Jco'
        },
        {
            heart: '😘',
            text: 'Can\'t wait to hold you tight',
            signature: '- Your love'
        },
        {
            heart: '💗',
            text: 'You are my sunshine on cloudy days',
            signature: '- Jco'
        },
        {
            heart: '🌹',
            text: 'Every day with you is a blessing',
            signature: '- Your boyfriend'
        },
        {
            heart: '💘',
            text: 'My heart belongs to you forever',
            signature: '- Jco'
        },
        {
            heart: '💝',
            text: 'You are my greatest treasure',
            signature: '- Your love'
        },
        {
            heart: '🦋',
            text: 'You give me butterflies every time',
            signature: '- Jco'
        },
        {
            heart: '✨',
            text: 'You make everything magical',
            signature: '- Your boyfriend'
        },
        {
            heart: '💞',
            text: 'Together forever, no matter the distance',
            signature: '- Jco'
        },
        {
            heart: '🌟',
            text: 'You are my brightest star',
            signature: '- Your love'
        }
    ];

    function createLoveNote() {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

        const loveNote = document.createElement('div');
        loveNote.className = 'love-note';
        loveNote.style.left = Math.random() * (window.innerWidth - 250) + 'px';
        loveNote.style.animationDelay = Math.random() * 2 + 's';
        loveNote.style.animationDuration = (Math.random() * 3 + 6) + 's';

        loveNote.innerHTML = `
            <span class="love-note-heart">${randomMessage.heart}</span>
            <div class="love-note-text">${randomMessage.text}</div>
            <div class="love-note-signature">${randomMessage.signature}</div>
        `;

        // Add click event to make note disappear
        loveNote.addEventListener('click', () => {
            loveNote.classList.add('clicked');
            setTimeout(() => {
                if (loveNote.parentNode) {
                    loveNote.parentNode.removeChild(loveNote);
                }
            }, 500);
        });

        loveNotesContainer.appendChild(loveNote);

        // Remove note after animation completes
        setTimeout(() => {
            if (loveNote.parentNode && !loveNote.classList.contains('clicked')) {
                loveNote.parentNode.removeChild(loveNote);
            }
        }, 10000);
    }

    // Create love notes at random intervals
    function startLoveNotes() {
        // Create first note after a delay
        setTimeout(createLoveNote, 3000);

        // Then create notes at random intervals
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                createLoveNote();
            }
        }, 8000); // Check every 8 seconds
    }

    // Start the love notes system
    startLoveNotes();

    // Create a note when user scrolls (occasionally)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (Math.random() < 0.15) { // 15% chance on scroll
                createLoveNote();
            }
        }, 1000);
    });
}

// Check if it's October 1, 2025
function checkDate() {
    const now = new Date();

    // "Unlock date" (Oct 1, 2025 at 00:00 local time)
    const targetDate = new Date(2025, 9, 1); // month is 0-based: 9 = October

    // true if NOT YET Oct 1, 2025
    return now < targetDate;
}

// Show waiting message if not October 1
function showWaitingMessage() {
    document.body.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            font-family: 'Poppins', sans-serif;
        ">
            <h1 style="font-family: 'Dancing Script', cursive; font-size: 3rem; margin-bottom: 20px;">💖</h1>
            <h2 style="font-size: 2rem; margin-bottom: 10px;">Something Special is Coming...</h2>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px;">This surprise will be available on October 1, 2025</p>
            <div style="
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
            ">
                <p style="font-size: 1rem; margin: 0;">Just a little more patience, my love ❤️</p>
            </div>
        </div>
    `;
}

// Initialize all features when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if it's October 1, 2025
    if (!checkDate()) {
        showWaitingMessage();
        return; // Stop here if not the right date
    }
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Create floating hearts and particles
    createFloatingHearts();
    createParticles();

    // Setup scroll animations
    setupScrollAnimations();

    // Initialize photo gallery
    initPhotoGallery();

    // Add parallax effect
    addParallaxEffect();

    // Initialize the LDR map
    initLDRMap();

    // Initialize navigation
    initNavigation();

    // Initialize love meter
    initLoveMeter();

    // Initialize timeline
    initTimeline();

    // Initialize floating love notes
    initFloatingLoveNotes();

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
