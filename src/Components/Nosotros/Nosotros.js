import React from 'react';

import nosotrosImg from '../../Img/nosotros/nosotros.webp'
import '../Nosotros/nosotros.css';

function Nosotros() {
    return (
        <section className='nosotros'>
            <h3 className='titulo'>FC Producciones de Fernando Cortés</h3>
            <h4 className='subtitulo'>Carreras de calle y aventuras</h4>
            <img src={nosotrosImg} className='img' alt='Maratón El Desafío' />
            <p className='texto'>En FC Producciones nos dedicamos a organizar carreras de calle y aventuras, con el objetivo de brindar experiencias únicas y emocionantes a nuestros participantes. Desde nuestra fundación, nos hemos enfocado en ofrecer eventos que combinen el deporte, la aventura y la diversión en un ambiente seguro y amigable.</p>
            <p className='texto'>Nuestro equipo está compuesto por expertos en la organización de eventos deportivos y en la creación de experiencias memorables. Nos apasiona lo que hacemos y trabajamos duro para asegurarnos de que cada evento sea un éxito. Nos enorgullece contar con un equipo altamente calificado y comprometido con la excelencia en el servicio al cliente.</p>
            
        </section>
    );
}

export default Nosotros;