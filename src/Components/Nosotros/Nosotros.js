import React from 'react';
import { Link } from 'react-router-dom';

import NosotrosImg from '../../Img/nosotros/nosotros.jpg'
import FerCAM from '../../Img/nosotros/fercam.jpg';

import '../Nosotros/nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros'>
            <h3 className='titulo'>FC Producciones, de Fernando Cortés</h3>
            <h4 className='subtitulo'>Carreras de calle y aventuras</h4>
            <img src={NosotrosImg} className='img' alt='Maratón El Desafío' />
            <p className='texto'>Luego de varios años de participar en distintos tipos de carreras de calle, de aventura, tetras, trias y duas, entre otras disciplinas, Fernando Cortés decidió dar un paso más y no solo disfrutar él mismo de estos eventos, sino también, contarlos.</p>
            <p className='texto'>Con una camarita en mano, llamada FerCam, creó Revista Desafíos, un medio audiovisual que lo llevó a recorrer la República Argentina y diversos países de Latinoamérica haciendo todo tipo de coberturas. Un programa de televisión, una revista y mucho más lo posicionó como un referente del mundo de las carreras.</p>
            <img src={FerCAM} className='img' alt='Fernando Cortés' />
            <p className='texto'>Con toda esa experiencia adquirida buscó, a la par, incursionar también en la organización de eventos. Allí nace FC Producciones. Una organización de carreras de calle y aventura compuesta por amigos corredores, familiares y especialistas en la materia que tienen un punto en común: son todas personas con muy buena onda que buscan ofrecer el mejor servicio posible.</p>
            <p className='texto'>Somos corredores y sabemos lo que el corredor quiere, por eso, el objetivo es claro: buscamos brindar experiencias únicas y emocionantes para nuestros participantes. En nuestros eventos buscamos combinar el deporte, la aventura y la diversión en un ambiente seguro y amigable.</p>
            <p className='texto'>Nos apasiona lo que hacemos y trabajamos duro para asegurarnos de que cada evento sea un éxito y que mejore año tras año.</p>
            <h5>NUESTROS EVENTOS</h5>
            <ul>
                <li><Link to='/m42' id='btnAlerces'>MARATÓN DE MONTAÑA M42 LOS ALERCES</Link></li>
                <li><Link to='/desafio-columbia' id='btnDesafio'>DESAFÍO COLUMBIA</Link></li>
                <li><Link to='/circuito' id='btnCircuito'>CIRCUITO M21</Link></li>
                <li><Link to='/alcec' id='btnAlcec'>MARATÓN SOLIDARIO TODOS SOMOS ALCEC</Link></li>
            </ul>
            
        </section>
    );
}

export default Nosotros;