import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import '../Contacto/contacto.css'

function Contacto() {
    return (
        <section className='contacto'>
            <h3 className='titulo'>Contacto</h3>
            <p className='texto'>Nos alegra que estés interesado en contactar con nosotros. Presionando el botón de Whatsapp que se encuentra en el inferior izquierdo de nuestra página web, podrás comunicarte con nosotros y obtendrás una respuesta a la brevedad</p>
                <p className='texto'>También podés encontrarnos en cualquiera de nuestras redes sociales y seguirnos para estar al tanto de nuestras últimas noticias y novedades.</p>

                <div className="social-media-icons">
                   <a href='https://www.instagram.com/fcproducc/' target='_blank'><Icon name="instagram" size="large" className='ig' /></a>
                   <a href='https://www.youtube.com/user/RevistaDesafios' target='_blank'><Icon name="youtube" size="large" className='yt' /></a> 
                    <a href='https://www.facebook.com/fcproducc/' target='_blank'><Icon name="facebook" size="large" className='fb'  /></a>
                    </div>
        </section>
    );
}

export default Contacto;