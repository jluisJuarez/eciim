import React from "react";

function Header() {
    return (
      <>
<header >
	<nav className="menu-superior">
	<span>ECIIM | Educación y Capacitación Integral e Inclusiva de México</span>
	<div class="menu" id="barra">
		
		<a class="active" href="index.html">Home</a>
		<div class="submenu">
			<button class="abrir-boton">Discapacidad&nbsp;&nbsp;<i class="fa fa-angle-down"></i></button>
			<div class="submenu-contenido">
				<a href="viajes.html">Visual</a>
				<a href="decoracion.html">Motríz</a>
				<a href="ropa.html">Intelectual</a>
			</div>
		</div>
		<a href="nuevo.html">Servicios</a>
		<a href="nosotras.html">Instalaciones</a>
		<a href="contacto.html">Contacto</a>
		
		<a class="bars" href="javascript:void(0);"  onclick="desplegarMenu()"><i class="fa fa-bars"></i></a>
	</div>
	
</nav>
</header>
        
      </>
    ) 
}

export default Header;