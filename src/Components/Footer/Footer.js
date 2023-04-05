import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

import '../Footer/footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className='container'>
            <div className='contacto'>
                <p className='titulo'>FC PRODUCCIONES</p>
                <Link to='#home'><p  className='correo'>Correo: info@fcproducciones.com.ar</p></Link> 
                <Link to='home'><p className='whatsapp'>Whatsapp: 11 5668-8314</p></Link>
                <ul className='listaRedesDesktop'>
                        <li className='iconosMobile' id='ig' > <Icon bordered name='instagram' /> </li>
                        <li className='iconosMobile' id='yt'> <Icon bordered name='youtube' /> </li>
                        <li className='iconosMobile' id='fb'> <Icon bordered name='facebook' /> </li>
                    </ul>
            </div>

            <div className='subcontainer'>
           
            <div className='seguinos'>
                <p className='titulo'>Seguinos</p>
                <nav>
                    <ul className='listaRedes'>
                        <li className='iconosMobile' id='ig' > <Icon bordered name='instagram' /> </li>
                        <li className='iconosMobile' id='yt'> <Icon bordered name='youtube' /> </li>
                        <li className='iconosMobile' id='fb'> <Icon bordered name='facebook' /> </li>
                    </ul>
                </nav>
                </div>

                <div>
                    <nav>
                        <ul className='listado'>
                        <li><Link to='/' className='enlaces'>Home</Link></li>
                        <li><Link to='#home' className='enlaces'>Nosotros</Link></li>
                        <li><Link to='#home' className='enlaces'>Carreras</Link></li>
                        <li><Link to='#home' className='enlaces'>Galería</Link></li>
                        </ul>
                    </nav>
                </div>

                </div>
                </div>
        </div>
    );
}

export default Footer;