import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import '../Contacto/contacto.css'

function Contacto() {
    return (
        <section className='contacto'>
            <h3 className='titulo'>Contacto</h3>
            <p className='texto'>Si tenés alguna consulta o querés saber más acerca de nuestros servicios, no dudes en ponerte en contacto con nosotros. Estamos disponibles a través de varios medios:</p>
            <ul>
                <li className='texto'>Correo electrónico: envíanos un mensaje a <Link to='mailto:info@fcproducciones.com.ar:' target="_blank" rel="noopener noreferrer"><b>info@fcproducciones.com.ar</b></Link> y te responderemos lo antes posible.</li>
                <li className='texto'>Presionando el botón de Whatsapp que se encuentra en el inferior izquierdo de nuestra página web, podrás comunicarte con nosotros y obtendrás una respuesta a la brevedad.</li>
                <li className='texto'>También podés encontrarnos en cualquiera de nuestras redes sociales y seguirnos para estar al tanto de nuestras últimas noticias y novedades.</li>
            </ul>

                <div className="social-media-icons">
                   <Link to='https://www.instagram.com/fcproducc/' target="_blank" rel="noopener noreferrer"><Icon name="instagram" size="large" className='ig' /></Link>
                   <Link to='https://www.youtube.com/user/RevistaDesafios'  target="_blank" rel="noopener noreferrer"><Icon name="youtube" size="large" className='yt' /></Link>
                    <Link to='https://www.facebook.com/fcproducc/' target="_blank" rel="noopener noreferrer"> <Icon name="facebook" size="large" className='fb'/></Link>
                    </div>
        </section>
    );
}

export default Contacto;