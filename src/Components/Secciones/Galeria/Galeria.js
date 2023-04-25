import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';

import './galeria.css';

function Galeria() {
    return (
        <section className='galeria'>
            <h2 className='titulo'>Galería</h2>
            <p className='descripcion'>¿Todavía no conocés los eventos de FC Producciones? ¿Los conocés y querés revivirlos? ¡Este es el lugar! Junto a <b>Revista Desafíos</b> y la <b>FerCam</b> te mostramos desde adentro lo más destacado de nuestros grandes eventos. Así se disfrutaron las ediciones de 2022 de los siguientes carreras: </p>
            <ul>
                <li><Link to='/m42' id='btnAlerces'>MARATÓN DE MONTAÑA M42 LOS ALERCES</Link></li>
                <li><Link to='/desafio-columbia' id='btnDesafio'>DESAFÍO COLUMBIA</Link></li>
                <li><Link to='/circuito' id='btnCircuito'>CIRCUITO M21</Link></li>
                <li><Link to='/alcec' id='btnAlcec'>MARATÓN SOLIDARIO TODOS SOMOS ALCEC</Link></li>
            </ul>
            <div className='container'>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/ZWIqiKj0gaM" title="Maraton de Montaña M42 2022"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/W2dMeu-JAvQ" title="DESAFÍO CROSS TRAIL CIRCUITO M21 2022"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/mNkGLufq4vw" title="Circuito M21 Mar de las Pampas 2022"></iframe>
                </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/zOgYwzQ_hzE" title="CIRCUITO M21 GENERAL BELGRANO 2022"></iframe>
                </Ratio>
                <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/lTBvSelSzyo" title="Todos somos Alcec 2022"></iframe>
                </Ratio>
            </div>
            <p className='texto'>Pero atención: hay mucho más. Suscribite al canal de YouTube de Revista Desafíos y mirá las ediciones de años anteriores.</p>
            <Button variant="danger" size='lg' className='boton'><Link to='https://www.youtube.com/user/RevistaDesafios' target="_blank" rel="noopener noreferrer">Canal de Youtube</Link></Button>
        </section>
    )
}

export default Galeria;