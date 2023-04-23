import React from 'react';

import '../FooterPrueba/footerPrueba.css'
function FooterPrueba() {
    return (
        <div>
            <footer>
  <div class="footer-top">
    <div class="footer-logo">
      <h2>FC PRODUCCIONES</h2>
      <div class="contact">
        <i class="fas fa-envelope"></i>
        <p>info@fcproducciones.com.ar</p>
      </div>
      <div class="contact">
        <i class="fab fa-whatsapp"></i>
        <p>11 5668 8314</p>
      </div>
    </div>
    <div class="footer-social">
      <h2>SEGUINOS</h2>
      <div class="social-icons">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
      </div>
    </div>
    <div class="footer-nav">
      <h2>NAVEGACIÓN</h2>
      <nav>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">NOSOTROS</a></li>
          <li><a href="#">GALERÍA</a></li>
          <li><a href="#">CONTACTO</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© FC Producciones 2023. Todos los derechos reservados.</p>
  </div>
</footer>
        </div>
    );
}

export default FooterPrueba;