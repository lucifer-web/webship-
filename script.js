function myfunction() {
  document.getElementById('body').style.color = 'white';
  document.getElementById('body').style.backgroundColor = 'black';
  document.getElementById('footer').style.color = 'white';
  document.getElementById('footer').style.backgroundColor = 'black';
}
function myfunction1() {
  document.getElementById('body').style.color = 'black';
  document.getElementById('body').style.backgroundColor = 'white';
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500);
}