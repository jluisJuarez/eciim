
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



/* menú para celular */

function desplegarMenu() {
	
	var x = document.getElementById('barra');
	
	if (x.className === "menu") {
		
		x.className += " responsive";
		
	} else {
		
		x.className = "menu";
	}
}



