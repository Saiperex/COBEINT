// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // Reset icon
        const icon = document.querySelector('.mobile-menu-btn i');
        if (icon && icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;
let slideInterval;

// Initialize slider
function initSlider() {
    if (slides.length > 0) {
        slides[currentSlide].classList.add('active');
        if (dots.length > 0) {
            dots[currentSlide].classList.add('active');
        }
        startSlideInterval();
    }
}

// Go to slide
function goToSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    if (dots.length > 0 && dots[currentSlide]) {
        dots[currentSlide].classList.remove('active');
    }

    // Update current slide index
    currentSlide = index;

    // Handle edge cases
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Add active class to new current slide and dot
    slides[currentSlide].classList.add('active');
    if (dots.length > 0 && dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

// Next slide
function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    goToSlide(currentSlide - 1);
}

// Start auto slide interval
function startSlideInterval() {
    // Clear any existing interval
    clearInterval(slideInterval);
    // Set new interval
    slideInterval = setInterval(nextSlide, 5000);
}

// Event listeners for slider controls
if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        prevSlide();
        startSlideInterval(); // Reset interval after manual navigation
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        nextSlide();
        startSlideInterval(); // Reset interval after manual navigation
    });
}

// Event listeners for dots
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startSlideInterval(); // Reset interval after manual navigation
        });
    });
}

// Pause auto slide on hover
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        startSlideInterval();
    });
}

// Testimonial Slider
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
let currentTestimonial = 0;
let testimonialInterval;

// Initialize testimonial slider
function initTestimonialSlider() {
    if (testimonialSlides.length > 0) {
        testimonialSlides[currentTestimonial].classList.add('active');
        if (testimonialDots.length > 0) {
            testimonialDots[currentTestimonial].classList.add('active');
        }
        startTestimonialInterval();
    }
}

// Go to testimonial
function goToTestimonial(index) {
    // Remove active class from current testimonial and dot
    if (testimonialSlides[currentTestimonial]) {
        testimonialSlides[currentTestimonial].classList.remove('active');
    }
    if (testimonialDots.length > 0 && testimonialDots[currentTestimonial]) {
        testimonialDots[currentTestimonial].classList.remove('active');
    }

    // Update current testimonial index
    currentTestimonial = index;

    // Handle edge cases
    if (currentTestimonial < 0) {
        currentTestimonial = testimonialSlides.length - 1;
    } else if (currentTestimonial >= testimonialSlides.length) {
        currentTestimonial = 0;
    }

    // Add active class to new current testimonial and dot
    if (testimonialSlides[currentTestimonial]) {
        testimonialSlides[currentTestimonial].classList.add('active');
    }
    if (testimonialDots.length > 0 && testimonialDots[currentTestimonial]) {
        testimonialDots[currentTestimonial].classList.add('active');
    }
}

// Start auto testimonial interval
function startTestimonialInterval() {
    // Clear any existing interval
    clearInterval(testimonialInterval);
    // Set new interval
    testimonialInterval = setInterval(() => {
        goToTestimonial(currentTestimonial + 1);
    }, 6000);
}

// Event listeners for testimonial controls
if (testimonialPrev) {
    testimonialPrev.addEventListener('click', function() {
        goToTestimonial(currentTestimonial - 1);
        startTestimonialInterval(); // Reset interval after manual navigation
    });
}

if (testimonialNext) {
    testimonialNext.addEventListener('click', function() {
        goToTestimonial(currentTestimonial + 1);
        startTestimonialInterval(); // Reset interval after manual navigation
    });
}

// Event listeners for testimonial dots
if (testimonialDots.length > 0) {
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToTestimonial(index);
            startTestimonialInterval(); // Reset interval after manual navigation
        });
    });
}

// Pause auto testimonial on hover
const testimonialContainer = document.querySelector('.testimonial-container');
if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });

    testimonialContainer.addEventListener('mouseleave', () => {
        startTestimonialInterval();
    });
}

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Here you would normally send the form data to a server
        // For this example, we'll just show a success message

        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());

        // Simple validation
        if (!formValues.name || !formValues.email || !formValues.message) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }

        // Success message
        alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
}

// Ajuste de altura para el slider en dispositivos móviles
function adjustSliderHeight() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    if (sliderContainer && slides.length > 0) {
        let maxHeight = 0;
        slides.forEach(slide => {
            const slideContent = slide.querySelector('.slide-content');
            if (slideContent) {
                const height = slideContent.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            }
        });
        sliderContainer.style.height = `${maxHeight + 80}px`; // 80px extra para los controles
    }
}

// Ajuste de altura para el slider de testimonios en dispositivos móviles
function adjustTestimonialSliderHeight() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    if (testimonialSlider && testimonialSlides.length > 0) {
        let maxHeight = 0;
        testimonialSlides.forEach(slide => {
            const slideContent = slide.querySelector('.testimonial-content');
            if (slideContent) {
                const height = slideContent.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            }
        });
        testimonialSlider.style.height = `${maxHeight + 40}px`; // 40px extra para los controles
    }
}

// Llamar a las funciones de ajuste cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('load', () => {
    adjustSliderHeight();
    adjustTestimonialSliderHeight();
});

window.addEventListener('resize', () => {
    adjustSliderHeight();
    adjustTestimonialSliderHeight();
});

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    initSlider();
    initTestimonialSlider();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});