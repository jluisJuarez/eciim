/* PÁGINA DE PRODUCTO */

/* menú para celular */

function desplegarMenu() {
	
	var x = document.getElementById('barra');
	
	if (x.className === "menu") {
		
		x.className += " responsive";
		
	} else {
		
		x.className = "menu";
	}
}



/* carrusel imágenes de producto */

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 



/* botón para scroll */

mybutton = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


/* tabla de contenido producto */

function openDoc(evt, docName) {
  
	var i;
	var tabcontent;
	var	tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(docName).style.display = "block";
  evt.currentTarget.className += " active";
} 

document.getElementById("pagina-abierta").click();

