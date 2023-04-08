import React from 'react';
import Ratio from 'react-bootstrap/Ratio';


import '../Galeria/galeria.css';

function Galeria() {
    return (
        <section className='galeria'>
            <h2 className='titulo'>Galería</h2>
            <p className='descripcion'>Aquí podrás ver la cobertura de las mejores carreras de aventura y calle del año, revivir los mejores momentos y conocer a los corredores a través de la FERCam.</p>
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
           {/*  <Ratio><iframe className='video' src="https://www.youtube.com/embed/vumjIwCUHh0" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/ZNN8jX-Alfk" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/KVbuPRY-5Sc" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/IUKv5tC0VeE" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/Wc7P4m1iDOw" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/0a2KRwwHD_Y" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/BZUGTvKJJ4A" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/TMjUBjUtqrc" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/LCt5_MI1sqA" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/IUk1yT1kg6U" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/xBXSA65fX4A" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/5lH04H023p0" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/Y_rq0KgXP_w" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/vW5kx9oefm0" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/sypax3YHdBI" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/Hvp34XBiwy8" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/yvNCKcSKASw" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/sGJmIJ8l4lM" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/3yQ2XvjdaRQ" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/4_hOwFkFmBw" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/_yyZS5YrtqI" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/o1gmLtSNDhc" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/gjAWyBlFSbM" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/J9xxnpsC7V0" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/-AzAUA3FqHM" title="YouTube video player"></iframe></Ratio>
            <Ratio><iframe className='video' src="https://www.youtube.com/embed/Pdr5kpE9ZpU" title="YouTube video player"></iframe></Ratio> */}
            </div>
        </section>
    )
}

export default Galeria;