let slideIndex = 0;
const counterDuration = 3000

function slides() {
    const widthB = window.innerWidth;
    const heightB = window.innerHeight;

    console.log('Size is ' + widthB, heightB);

    const images = document.getElementsByClassName('mySlides');
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = widthB + 'px';
        images[i].style.height = heightB + 'px';
    }
    
    document.querySelector('.slideshow-container').style.height = heightB + 'px';
}

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500);
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

window.addEventListener('resize', slides);

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
