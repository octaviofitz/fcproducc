import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './footer.css'

function Footer() {
    return (
        <div>
            <footer className='footer'>
  <div className="footer-top">
    <div className="footer-logo">
      <h2>FC PRODUCCIONES</h2>
      <div className="contact">
        <i className="fas fa-envelope"></i>
        <Link target='_blank' rel="noopener noreferrer" to='mailto:info@fcproducciones.com.ar'><p>info@fcproducciones.com.ar</p></Link>
      </div>
      <div className="contact">
        <i className="fab fa-whatsapp"></i>
        <Link target='_blank' rel="noopener noreferrer" to='https://api.whatsapp.com/send?phone=+541156688314&text=Hola 😁'><p>11 5668 8314</p></Link>
      </div>
    </div>
    <div className="footer-social">
      <h2>SEGUINOS</h2>
      <div className="social-icons">
        <Link target='_blank' rel="noopener noreferrer" to='https://www.instagram.com/fcproducc/' aria-label='Instagram'><i className="fab fa-instagram"></i></Link>
        <Link target='_blank' rel="noopener noreferrer" to='https://www.youtube.com/user/RevistaDesafios' aria-label='Youtube'><i className="fab fa-youtube"></i></Link>
        <Link target='_blank' rel="noopener noreferrer" to='https://www.facebook.com/fcproducc/' aria-label='Facebook'> <i className="fab fa-facebook"></i></Link>
      </div>
    </div>
    <div className="footer-nav">
      <h2>NAVEGACIÓN</h2>
      <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/nosotros'>Nosotros</Link></li>
        <li><Link to='/galeria'>Galería</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
      </nav>
    </div>
  </div>
  <div className="footer-bottom">
    <p className='derechos'>© FC Producciones 2023. Todos los derechos reservados.</p>
  </div>
</footer>
        </div>
    );
}

export default Footer;