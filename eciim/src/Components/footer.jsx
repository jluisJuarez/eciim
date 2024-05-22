import React from "react";

function Footer() {
    return (
        <>

<aside id="redes">
  <h3>¡Síguenos en nuestras redes sociales!</h3>
  <a id="facebook" href="https://www.facebook.com/" class="fa fa-facebook"></a>
</aside>

<section>
<button onclick="topFunction()" id="myBtn" title="Inicio de página"><i class="fa fa-angle-up fa-2x"></i></button>
</section>

<footer>

<section class="columna" id="mapa-sitio">
<h4>ECIIM | Educación y Capacitación Integral e Inclusiva de México</h4>
  
  <ul id="sitio">
    <li><a href="index.html">Inicio</a></li>
    <li>Servicios:</li>
      <li class="vineta"><a href="viajes.html">Educación Integral</a></li>
      <li class="vineta"><a href="decoracion.html">Taller para Padres</a></li>
      <li class="vineta"><a href="decoracion.html">Cursos y Talleres</a></li>
  </ul>
</section>

<section class="columna" id="documentacion">


<p><a id="doc" href="doc.html">Documentación</a></p>
</section>

<section class="fila" id="derechos">eciim&nbsp;&copy;&nbsp;2024 | Todos los derechos reservados.</section>

</footer>

<script src="js/scripts.js"></script>

        </>
    ) 
}

export default Footer;