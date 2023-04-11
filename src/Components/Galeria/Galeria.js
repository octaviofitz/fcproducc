import React from 'react';
import Ratio from 'react-bootstrap/Ratio';

import '../Galeria/galeria.css';

function Galeria() {
    return (
        <section className='galeria'>
            <h2 className='titulo'>Galería</h2>
            <p className='descripcion'>Aquí podrás ver la cobertura de las mejores carreras de aventura y calle del año, revivir los mejores momentos y conocer a los corredores a través de la <b>FERCam</b>.</p>
            <p className='descripcion'>También podés seguirnos en nuestro canal de Youtube donde encontrarás mucho más contenido de las carreras.</p>
            <div className='container'>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/ZILJJsrvJ3Y" title="YouTube video player"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9">
            <iframe className='video' src="https://www.youtube.com/embed/kRDXCkB7RE0" title="YouTube video player"></iframe>
            </Ratio>
            <Ratio aspectRatio="16x9"><iframe className='video' src="https://www.youtube.com/embed/aASntVkK12o" title="YouTube video player"></iframe></Ratio>
            <Ratio aspectRatio="16x9"><iframe className='video' src="https://www.youtube.com/embed/vumjIwCUHh0" title="YouTube video player"></iframe></Ratio>
            </div>
        </section>
    )
}

export default Galeria;