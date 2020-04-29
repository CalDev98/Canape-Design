// navbar when scrolling

// var svg = document.querySelector('.svg');
var navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
    navbar.classList.toggle("sticky-navbar", window.scrollY > 530);
})

// for mobile width
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("nav-active");
	links.forEach((link, index) => {
		if (link.style.animation) {
      link.style.animation = '';
    }
    else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
  });
  
  // burger animation
  hamburger.classList.toggle('toggle');
});



// Section for the Sofa slides
var slideIndex = 1;
showDivs(slideIndex);
// changeColor(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
  // changeColor(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sofa");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot";
}

// function changeColor(e) {
//   var color = e.getAttribute("data-color");
//   e.classList.add('animateColor');
//   for(i=0; i<color.length; i++) {
//     if(color[i].hasAttribute('class')) {
//       color[i].classList.remove('animateColor');
//       e.classList.add('animateColor');
//     }
//   }

//   svg.style.fill = color;
// }

