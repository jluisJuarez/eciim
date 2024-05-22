/* PÁGINA DE CATEGORÍA */

/* menú para celular */

function desplegarMenu() {
	
	var x = document.getElementById('barra');
	
	if (x.className === "menu") {
		
		x.className += " responsive";
		
	} else {
		
		x.className = "menu";
	}
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


/* slider de precio */

var slider = document.getElementById('slider-rango');

var output = document.getElementById('costo');

output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}

