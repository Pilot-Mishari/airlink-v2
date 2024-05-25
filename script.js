let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`; // Scroll to the correct slide
  }
  slideIndex++;
  if (slideIndex >= slides.length) { slideIndex = 0; } // Reset slide index if reached the end
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
