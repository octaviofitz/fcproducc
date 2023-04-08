import React from 'react';

import '../Galeria/galeria.css';

function Galeria() {
    return (
        <section className='galeria'>
            <h2 className='titulo'>Galería</h2>
            <p className='descripcion'>Reviví carreras de años pasados con los mejores videos. También podés visitarnos en nuestro canal de Youtube</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZILJJsrvJ3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    )
}

export default Galeria;