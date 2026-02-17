// Main JavaScript file for Shagun Farms Website

document.addEventListener('DOMContentLoaded', function() {
    // Hide spinner after page loads
    hideSpinner();

    // Ensure spinner hides even if page takes time to load
    setTimeout(hideSpinner, 2000);

    // Handle video fallback for hero banner
    const videoElements = document.querySelectorAll('.hero-banner video');
    videoElements.forEach(video => {
        const img = video.parentElement.querySelector('img.hero-banner-bg');

        // Keep static image hidden when video can render.
        video.addEventListener('loadeddata', function() {
            if (img) img.style.display = 'none';
        });

        // Fallback only on real load failure.
        video.addEventListener('error', function() {
            console.log('Video failed to load, using image fallback');
            if (img) img.style.display = 'block';
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        let isTicking = false;
        window.addEventListener('scroll', function() {
            if (isTicking) return;
            isTicking = true;
            window.requestAnimationFrame(function() {
                backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
                isTicking = false;
            });
        }, { passive: true });

        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize tooltips and popovers if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        // Tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Popovers
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current navigation link
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        }
    });

    // Initialize WOW animations - set to not make elements invisible initially
    if (typeof WOW !== 'undefined') {
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 80,
            mobile: false,
            live: false,
            resetAnimation: false
        });
        wow.init();
    }

    // Initialize counterUp for any elements with `data-toggle="counter-up"`
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn !== 'undefined' && typeof jQuery.fn.counterUp === 'function') {
        jQuery('[data-toggle="counter-up"]').each(function() {
            var $el = jQuery(this);
            // store original text
            $el.data('counterup-initial', $el.text());
            $el.counterUp();
        });
    }
});

// Function to hide spinner
function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('show');
        spinner.style.opacity = '0';
        spinner.style.visibility = 'hidden';
        spinner.style.pointerEvents = 'none';
        
        // Force hide after animation
        setTimeout(() => {
            spinner.style.display = 'none';
        }, 500);
    }
}
