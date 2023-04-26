import React from 'react';
import { Link } from 'react-router-dom';
/* import '@fortawesome/fontawesome-free/css/all.min.css';
 */
import './contacto.css'

function Contacto() {
    return (
        <section className='contacto'>
            <h2 className='titulo'>Contacto</h2>
            <p className='texto'>Si tenés alguna consulta o querés saber más acerca de nuestros servicios, no dudes en ponerte en contacto con nosotros. Estamos disponibles a través de varios medios:</p>
            <ul>
                <li className='texto'><strong>Correo electrónico:</strong> envíanos un mail a <Link to='mailto:info@fcproducciones.com.ar:' target="_blank" rel="noopener noreferrer"><b>info@fcproducciones.com.ar</b></Link> y te responderemos lo antes posible.</li>
                <li className='texto'><strong>Whatsapp:</strong> presionando el botón que se encuentra en el inferior derecho de nuestra página web, podrás comunicarte con nosotros directamente y obtendrás una respuesta a la brevedad.</li>
                <li className='texto'><strong>Redes sociales:</strong> también podés encontrarnos en cualquiera de nuestras redes sociales y seguirnos para estar al tanto de nuestras últimas noticias y novedades. Aquí abajo te dejamos los accesos directos.</li>
            </ul>

                <div className="Iconos">
                <Link target='_blank' rel="noopener noreferrer" to='https://www.instagram.com/fcproducc/' aria-label='Instagram'><i className="fab fa-instagram"></i></Link>
               <Link target='_blank' rel="noopener noreferrer" to='https://www.youtube.com/user/RevistaDesafios' aria-label='Youtube'><i className="fab fa-youtube"></i></Link>
                <Link target='_blank' rel="noopener noreferrer" to='https://www.facebook.com/fcproducc/' aria-label='Facebook'> <i className="fab fa-facebook"></i></Link>
                    </div>
        </section>
    );
}

export default Contacto;

