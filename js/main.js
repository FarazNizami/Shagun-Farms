// Main JavaScript file for Shagun Farms Luxury Destination Website

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading spinner
    hideSpinner();
    setTimeout(hideSpinner, 1800);

    // Initialize GSAP & ScrollTrigger Animations
    initLuxuryAnimations();

    // Initialize Gallery Category Filters
    initGalleryFilters();

    // Initialize Video Hero Background Handlers
    initHeroVideo();

    // Enforce Radiant Gold Stars for Reviews
    enforceGoldStars();

    // Navigation Active Link Highlight
    highlightActiveNavLink();

    // Scroll Navbar Effect
    initNavbarScroll();

    // Back to top button
    initBackToTop();
});

// Function to hide spinner cleanly
function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('show');
        spinner.style.opacity = '0';
        spinner.style.visibility = 'hidden';
        spinner.style.pointerEvents = 'none';
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 400);
    }
}

// GSAP & ScrollTrigger Luxury Animations
function initLuxuryAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Content Fade In Scale
        gsap.from('.hero-banner-content', {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: 'power3.out'
        });

        // Parallax Video/Background Scale on Scroll
        gsap.to('.hero-banner-bg, .hero-banner video', {
            scrollTrigger: {
                trigger: '.hero-banner',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            scale: 1.15,
            y: 50
        });

        // Section Titles Reveal
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power2.out'
            });
        });

        // Cards Stagger Reveal (Room Cards, Feature Cards, About Stats)
        const cardContainers = ['.home-rooms .row', '.home-testimonials .row', '.about-story-grid'];
        cardContainers.forEach(container => {
            const containerEl = document.querySelector(container);
            if (containerEl) {
                gsap.from(containerEl.children, {
                    scrollTrigger: {
                        trigger: containerEl,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.9,
                    stagger: 0.2,
                    ease: 'power2.out'
                });
            }
        });

        // Counter Numbers Tweening
        const counterElements = document.querySelectorAll('[data-toggle="counter-up"], .counter');
        counterElements.forEach(counter => {
            const targetVal = parseFloat(counter.getAttribute('data-num') || counter.innerText.replace(/[^0-9.]/g, ''));
            if (!isNaN(targetVal)) {
                ScrollTrigger.create({
                    trigger: counter,
                    start: 'top 90%',
                    onEnter: () => {
                        gsap.fromTo(counter, 
                            { innerText: 0 },
                            {
                                innerText: targetVal,
                                duration: 2,
                                snap: { innerText: 1 },
                                ease: 'power1.out'
                            }
                        );
                    }
                });
            }
        });
    } else {
        // Fallback for IntersectionObserver if GSAP is loading asynchronously
        initIntersectionObserverFallback();
    }
}

// Fallback Intersection Observer Animation
function initIntersectionObserverFallback() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section-title, .room-card, .feature-card, .venue-card').forEach(el => {
        observer.observe(el);
    });
}

// Hero Video Fallback logic
function initHeroVideo() {
    const videoElements = document.querySelectorAll('.hero-banner video');
    videoElements.forEach(video => {
        const img = video.parentElement.querySelector('img.hero-banner-bg');
        video.addEventListener('loadeddata', () => {
            if (img) img.style.display = 'none';
        });
        video.addEventListener('error', () => {
            if (img) img.style.display = 'block';
        });
    });
}

// Force Radiant Gold Color for Star Icons
function enforceGoldStars() {
    const stars = document.querySelectorAll('.fa-star, .bi-star-fill');
    stars.forEach(star => {
        star.style.color = '#FFD700';
    });
}

// Active Nav Link Highlight
function highlightActiveNavLink() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Navbar Scroll Glassmorphism Polish
function initNavbarScroll() {
    const navbarHeader = document.querySelector('.container-fluid.px-0');
    if (navbarHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbarHeader.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.12)';
                navbarHeader.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbarHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                navbarHeader.style.background = 'rgba(255, 255, 255, 0.88)';
            }
        }, { passive: true });
    }
}

// Gallery Category Filter Tabs
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item-wrap');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(item, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 });
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Back to Top Smooth Scroll
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        }, { passive: true });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
