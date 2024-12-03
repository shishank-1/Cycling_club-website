// JavaScript for Slider Functionality

let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slideCount) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slideCount - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Initialize the first slide
showSlide(currentSlide);

// Auto-slide functionality
setInterval(nextSlide, 5000);
