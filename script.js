let slideIndex = 0;

function slides() {
    var widthB = window.innerWidth;
    var heightB = window.innerHeight;

    console.log(widthB, heightB);

    var images = document.getElementsByClassName('images');
    for (var i = 0; i < images.length; i++) {
        images[i].style.width = widthB + 'px';
        images[i].style.height = heightB + 'px';
    }
    
    document.getElementsByClassName('slideshow-container').height = heightB + 'px';
}

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}
slides();

window.addEventListener('resize', slides);