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
                <a href='mailto:info@fcproducciones.com.ar'><p  className='correo'><Icon className='mail' name='mail outline' />info@fcproducciones.com.ar</p></a> 
                <a href='https://api.whatsapp.com/send?phone=+541156688314&text=Hola😁' target='_blank'><p className='whatsapp'><Icon className='wp' name='whatsapp' />11 5668 8314</p></a>
                <ul className='listaRedesDesktop'>
                       <a href='https://www.instagram.com/fcproducc/' target='_blank'></a> <li className='iconosMobile' id='ig' > <Icon name='instagram' /> </li>
                        <li className='iconosMobile' id='yt'> <Icon name='youtube' /> </li>
                        <li className='iconosMobile' id='fb'> <Icon name='facebook' /> </li>
                    </ul>
            </div>

            <div className='subcontainer'>
           
            <div className='seguinos'>
                <p className='titulo'>Seguinos</p>
                <nav>
                    <ul className='listaRedes'>
                        <li className='iconosMobile' id='ig' > <Icon name='instagram' /> </li>
                        <li className='iconosMobile' id='yt'> <Icon name='youtube' /> </li>
                        <li className='iconosMobile' id='fb'> <Icon name='facebook' /> </li>
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