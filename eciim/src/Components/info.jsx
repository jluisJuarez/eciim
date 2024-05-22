import React from "react";

function Info() {
    
    return (
    <>
    <main>
	<header class="division">
		<h1>SERVICIOS</h1>
	</header>

	<section id="cat-categorias">
		
		<div class="t-categoria">
			<img src="img/educ_integral.jpg" alt="Entrar al catálogo de viajes y diversión" />
			<a href="viajes.html"><h2 class="link">Educación Integral</h2></a>
		
		</div>
		
		<div class="t-categoria">
			<img src="img/esc_padre.jpg" alt="Entrar al catálogo de decoración de interiores" />
			<a href="decoracion.html"><h2 class="link">Escuela para Padres</h2></a>
		
		</div>
		
		<div class="t-categoria">
			<img src="img/cursos_talleres.jpg" alt="Entrar al catálogo de ropa y accesorios" />
			<a href="ropa.html"><h2 class="link">Cursos y Talleres</h2></a>
		
		</div>
	</section>
	
	<section class='division'>
		<h2>Atención a la Discapacidad</h2>
	</section>

	<section id='destacados'>
		
		<div class="t-producto">
			<img src="images/disc_visual.jpg" alt="ver producto: reloj-pulsera" />
			<h3>Discapacidad Visual</h3>
			<p class="precio">Cupo limitado</p>
			<div class="ver"><a href="ropa-reloj-pulsera.html">Saber más...</a></div>
		</div>
		
		
	
	</section>
</main>

    
    
    </>
    )
}
export default Info;