import React from 'react';
import { Link } from 'react-router-dom';

import '../Footer/footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className='container'>
            <div>
                <p>Contacto</p>
                <p>Whatsapp: 11 5668-8314</p>
                <p>Correo: info@fcproducciones.com.ar</p>
            </div>

            <div className='subcontainer'>
           
            <div className='seguinos'>
                <p>Seguinos</p>
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
                </div>

                <div>
                    <nav>
                        <ul className='listado'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='#home'>Nosotros</Link></li>
                        <li><Link to='#home'>Carreras</Link></li>
                        <li><Link to='#home'>Galería</Link></li>
                        </ul>
                    
                    </nav>
                </div>

                </div>
                </div>
        </div>
    );
}

export default Footer;