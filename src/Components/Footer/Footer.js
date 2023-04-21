import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

import '../Footer/footer.css'

function Footer() {
    return (
        <div className='footer'>

            <div className='container'>
            <div className='datos'>
                <p className='titulo'>FC PRODUCCIONES</p>
                <Link to='mailto:info@fcproducciones.com.ar' rel="noopener noreferrer"><p className='correo'><Icon className='mail' name='mail outline'/>info@fcproducciones.com.ar</p></Link> 
                <Link to='https://api.whatsapp.com/send?phone=+541156688314&text=Hola 😁' target='_blank' rel="noopener noreferrer"><p className='whatsapp'><Icon className='wp' name='whatsapp' />11 5668 8314</p></Link>
                <ul className='listaRedesDesktop'>
                        <li className='iconosMobile' id='ig'> <Link to='https://www.instagram.com/fcproducc/' target='_blank' rel="noopener noreferrer"> <Icon name='instagram' /> </Link></li>
                        <li className='iconosMobile' id='yt'><Link to='https://www.youtube.com/user/RevistaDesafios' target='_blank' rel="noopener noreferrer"> <Icon name='youtube' /></Link></li>
                        <li className='iconosMobile' id='fb'><Link to='https://www.facebook.com/fcproducc/' target='_blank' rel="noopener noreferrer"> <Icon name='facebook' /></Link></li>
                    </ul>
            </div>

            <div className='subcontainer'>
           
            <div className='seguinos'>
                <p className='titulo'>Seguinos</p>
                <nav>
                    <ul className='listaRedes'>
                        <li className='iconosMobile' id='ig'><Link to='https://www.instagram.com/fcproducc/' target='_blank' rel="noopener noreferrer"><Icon name='instagram' /></Link></li>
                        <li className='iconosMobile' id='yt'><Link to='https://www.youtube.com/user/RevistaDesafios' target='_blank' rel="noopener noreferrer"><Icon name='youtube' /></Link></li>
                        <li className='iconosMobile' id='fb'><Link to='https://www.facebook.com/fcproducc/' target='_blank' rel="noopener noreferrer"><Icon name='facebook' /></Link> </li>
                    </ul>
                </nav>
                </div>

                <div>
                    <nav>
                        <ul className='listado'>
                        <li><Link to='/' className='enlaces'>Home</Link></li>
                        <li><Link to='/nosotros' className='enlaces'>Nosotros</Link></li>
                        <li><Link to='/galeria' className='enlaces'>Galería</Link></li>
                        <li><Link to='/contacto' className='enlaces'>Contacto</Link></li>
                        </ul>
                    </nav>
                </div>

                </div>
                </div>
        </div>
    );
}

export default Footer;