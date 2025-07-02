import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';

import './galeria.css';

function Galeria() {
    return (
        <section className='galeria'>
            <h3 className='titulo'>Galería</h3>
            <p className='descripcion'>¿Todavía no conocés los eventos de FC Producciones? ¿Los conocés y querés revivirlos? ¡Este es el lugar! Junto a <b>Revista Desafíos</b> y la <b>FerCam</b> te mostramos desde adentro lo más destacado de nuestros grandes eventos. Así se disfrutaron las ediciones de 2022 de los siguientes carreras: </p>
            <ul>
                <li><Link to='/m42' id='btnAlerces'>MARATÓN DE MONTAÑA M42</Link></li>
                <li><Link to='/desafio-columbia' id='btnDesafio'>DESAFÍO SIERRA DE LA VENTANA</Link></li>
                <li><Link to='/desafio-pinamar' id='btnPinamar'>DESAFÍO PINAMAR</Link></li>
                <li><Link to='/circuito' id='btnCircuito'>CIRCUITO M21</Link></li>
                <li><Link to='/alcec' id='btnAlcec'>MARATÓN SOLIDARIO TODOS SOMOS ALCEC</Link></li>
            </ul>
            <div className='container'>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/__ZwNgk0rxU?si=lSy_y3ckM5kIVOsm" title="Maraton de Montaña M42 2025"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/hBg8ynHCLHA?si=rdaS5qK6F7iLLKQE" title="Desafío Columbia 2024"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/wIaqhQdna-Y?si=Q-jKyz_O5PwyrBAG" title="Desafío Columbia PINAMAR 2024"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/UEv2Ix-i4fg?si=j7qzZz61M6znxrAt" title="Maratón M42 Villa Ventana"></iframe>
                </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/cP7v7k5j7GA?si=WMVKpSf-WjA_B1fu" title="TODOS SOMOS ALCEC 2024"></iframe>
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