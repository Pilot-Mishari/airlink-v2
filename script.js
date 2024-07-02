const counterDuration = 3000

let currentIndex = 0;

function slideImages() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    currentIndex = (currentIndex + 1) % images.length;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideImages, 5000);



document.addEventListener('DOMContentLoaded', (event) => {
    slides();
    showSlides();

    const obj = document.getElementById("value");
    const objAir = document.getElementById('value0');
    const objPil = document.getElementById('value1');

    // Intersection Observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(obj, 0, 150000, counterDuration);
                animateValue(objAir, 0, 66, counterDuration);
                animateValue(objPil, 0, 150, counterDuration);
                observer.unobserve(obj); // Stop observing after animation starts
                observer.unobserve(objAir);
                observer.unobserve(objPil);
            }
        });
    });

    observer.observe(obj);
});