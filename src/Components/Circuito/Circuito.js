import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';

/* Imágenes */
import CircuitoLogo from '../../Img/index/circuito.png';
import gralBelgrano from '../../Img/Circuito/gralBelgrano.jpg';
import GeneralBelgrano from '../../Img/Circuito/gralBelgrano2.jpg';
import Sierra from '../../Img/Circuito/sierra.JPG';
import MarDeLasPampas from '../../Img/Circuito/marDeLasPampas.jpg';
import PampaFly from '../../Img/Circuito/pampaFly.jpg';

import '../Circuito/circuito.css';

function Circuito() {

    function scrollMarDeLasPampas() {
        const section = document.getElementById('marDeLasPampas');
        section.scrollIntoView({ behavior: 'smooth' });
      }

      function scrollBelgrano() {
        const section = document.getElementById('GeneralBelgrano');
        section.scrollIntoView({ behavior: 'smooth' });
      }

      function scrollSierra() {
        const section = document.getElementById('SierraDeLaVentana');
        section.scrollIntoView({ behavior: 'smooth' });
      }
      
      function scrollPampa() {
        const section = document.getElementById('PampaFly');
        section.scrollIntoView({ behavior: 'smooth' });
      }

    return (
        <section className='Circuito'>
            <article className='carreras'>
            <h2 className='titulo' id='elDesafio'>CIRCUITO M21</h2>
            
            <div className='containerFlyerDescripcion'>
            
            <div>
              <img src={gralBelgrano} alt='Maratón Alecec' className='flyer' />
                 </div>

                 <div>
                    <p className='descripcion'>El Circuito M21 es un conjunto de carreras organizadas por FC Producciones que busca llevar la pasión por el running a distintas partes de la provincia de Buenos Aires. Con distancias competitivas y participativas, buscamos incluir a todos: aquellos experimentados que buscan exigirse al máximo buscando buenos tiempos, como aquellos que recién hacen sus primeros kilómetros dentro del mundo del running.</p>
                    <p className='descripcion'>Ante tanta oferta de carreras y tantos lugares repetidos, logramos llevar a muchos runners a conocer sitios hermosos y con recorridos divertidos los cuales no fueron, o fueron poco utilizados, en eventos anteriores.</p>
                    <p className='descripcion'>21K, 10K y 5K, además de una distancia para los más chicos, entre saltos de fardos, subida a médanos, puentes, pastizales, bosques y mucha aventura y diversión son lo que caracterizan a las carreras de Mar de las Pampas, General Belgrano, La Plata y Sierra de la Ventana, todas locaciones ubicadas en Buenos Aires.</p>
                    <p className='descripcion'>Este 2023 el Circuito M21 se va a tomar un descanso y desde el staff nos dedicaremos de lleno a la organización de nuestros máximos eventos: Maratón de Montaña M42 Los Alerces y El Desafío Columbia. ¡Nos vemos ahí! Aquí abajo les dejamos el material audiovisual de las ediciones de 2022 y los resultados.</p>
                     </div>
            </div>
            
            <div className='botones'>
                <Button variant="info" size='lg' className='boton' onClick={scrollMarDeLasPampas}><Link to='#marDeLasPampas'>MAR DE LAS PAMPAS 2022</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollBelgrano}><Link to='#GeneralBelgrano'>GENERAL BELGRANO 2022</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollSierra}><Link to='#SierraDeLaVentana'>SIERRA DE LA VENTANA Y SALDUNGARAY 2022</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollPampa}><Link to='#PampaFly'>PAMPA FLY, LA PLATA 2021</Link></Button>
            </div>
            </article>

            <article className='carreras'>
                 <h3 id='marDeLasPampas'>MAR DE LAS PAMPAS 2022</h3>
                 <img src={MarDeLasPampas}  className='img' alt='Mar de las Pampas 2022'/>
                 <p className='texto'>Se trata de una carrera en la costa atlántica para despejarse de lo cotidiano y disfrutar del aire del mar. Apta tanto para disfrutar de un domingo completo en la playa como para ir el fin de semana y compartirlo en familia.</p>
                 <p className='texto'>El corredor puede elegir entre 21K o 10K competitivos, pero también abrimos la posibilidad de 5K para aquellos que recién comienzan en el mundo del running de aventura (o en el running en general) y quieren probarse a sí mismos en una distancia corta y participativa.</p>
                 <h4><mark>EN 2023 NO SE LLEVARÁ A CABO.</mark></h4>
                 <p className='texto'>Reviví las imágenes de la edición de 2022 y buscá tu resultado:</p>
                 <div className='containerVideo'>
                <Ratio aspectRatio="16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zOgYwzQ_hzE" title="YouTube video player" className='video'></iframe>
                </Ratio>
                </div>

                <div className='imagenes'>
                     <h4 className='titulo'>IMÁGENES</h4>
                    <p className='texto'>Aquí podrás encontrar imágenes de la maratón anterior, tomadas por nuestros <b>fotógrafos profesionales</b>. Y lo mejor de todo, <b>¡son completamente gratis!</b></p>
                    <p className='texto'>Para acceder a las fotos, simplemente hacé click en el botón que aparece a continuación y sigue las instrucciones. Puedes descargar las imágenes que quieras y compartirlas en tus redes sociales para compartir tu logro con tus amigos y familiares.</p>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://drive.google.com/drive/folders/11aekVxKv9NyUxLB51TJJ2PXHDcmJ8xQr' target="_blank" rel="noopener noreferrer">FOTOS</Link></Button>
                </div>

                <div className='categorias'>
                <div className='container'>
                    <h4 className='titulo'>RESULTADOS GENERALES 2022</h4>
                    <img src={CircuitoLogo} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://eventols.com/e/circuito-m21-mar-de-las-pampas/results' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>
           </div>
           
            </article>

            <article className='carreras'>
                 <h3 id='GeneralBelgrano'>GENERAL BELGRANO 2022</h3>
                 <img src={GeneralBelgrano}  className='img' alt='General Belgrano 2022'/>
                 <p className='texto'>Una carrera a 160 kilómetros de Capital Federal. Apta tanto para disfrutar de un domingo completo en la naturaleza bonaerense como para ir el fin de semana y compartirlo en familia.</p>
                 <p className='texto'>Es un recorrido árido y pintoresco, cerca del Río Salado y las termas. Para aquellos que no conocen General Belgrano, es un lugar mágico, tranquilo y hermoso. </p>
                 <p className='texto'>El corredor puede elegir entre 21K o 10K competitivos, pero también abrimos la posibilidad de 5K para aquellos que recién comienzan en el mundo del running de aventura (o en el running en general) y quieren probarse a sí mismos en una distancia corta y participativa.</p>
                 <p className='texto'>Cross country en familia y amigos sin tener que viajar muy lejos, plan ideal.</p>
                 <h4><mark>EN 2023 NO SE LLEVARÁ A CABO.</mark></h4>

                 <div className='containerVideo'>
                <Ratio aspectRatio="16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zOgYwzQ_hzE" title="General Belgrano 2022" className='video'></iframe>
                </Ratio>
                </div>

                <div className='imagenes'>
                     <h4 className='titulo'>IMÁGENES</h4>
                    <p className='texto'>Aquí podrás encontrar imágenes de la maratón anterior, tomadas por nuestros <b>fotógrafos profesionales</b>. Y lo mejor de todo, <b>¡son completamente gratis!</b></p>
                    <p className='texto'>Para acceder a las fotos, simplemente hacé click en el botón que aparece a continuación y sigue las instrucciones. Puedes descargar las imágenes que quieras y compartirlas en tus redes sociales para compartir tu logro con tus amigos y familiares.</p>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://drive.google.com/drive/folders/1FDwfEG1gyD6ZOdgxlBV2cNtypSqzQcnz' target="_blank" rel="noopener noreferrer">FOTOS</Link></Button>
                </div>

                <div className='categorias'>
                <div className='container'>
                    <h4 className='titulo'>RESULTADOS GENERALES 2022</h4>
                    <img src={CircuitoLogo} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://eventols.com/e/circuito-m21-general-belgrano/results' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>
           </div>
           
            </article>

            <article className='carreras'>
                 <h3 id='SierraDeLaVentana'>SIERRA DE LA VENTANA Y SALDUNGARAY 2022</h3>
                 <img src={Sierra}  className='img' alt='Sierra de la Ventana 2022'/>
                 <p className='texto'>La última fecha del Circuito M21 es en Saldungaray, a escasos kilómetros de Sierra de la Ventana. El mismo fin de semana que el Desafío Cross Trail, se corren los 21K, 10K, 5K y la distancia KIDS por las sierras de Saldungaray, en la comarca de Tornquist, provincia de Buenos Aires.</p>
                 <p className='texto'>A diferencia de las fechas anteriores, la exigencia aumenta con respecto al recorrido: sierras con subidas y bajadas, terreno más técnico con piedras, pastizales, pozos y cruces de arroyos con el agua hasta el pecho.</p>
                 <p className='texto'>Sin dudas, un cierra mágico para la recorrida del Circuito M21. </p>
                 <h4><mark>EN 2023 NO SE LLEVARÁ A CABO.</mark></h4>

                 <div className='containerVideo'>
                <Ratio aspectRatio="16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zOgYwzQ_hzE" title="General Belgrano 2022" className='video'></iframe>
                </Ratio>
                </div>

                <div className='imagenes'>
                    <h4 className='titulo'>IMÁGENES</h4>
                    <p className='texto'>Aquí podrás encontrar imágenes de la maratón anterior, tomadas por nuestros <b>fotógrafos profesionales</b>. Y lo mejor de todo, <b>¡son completamente gratis!</b></p>
                    <p className='texto'>Para acceder a las fotos, simplemente hacé click en el botón que aparece a continuación y sigue las instrucciones. Puedes descargar las imágenes que quieras y compartirlas en tus redes sociales para compartir tu logro con tus amigos y familiares.</p>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://drive.google.com/drive/folders/1FDwfEG1gyD6ZOdgxlBV2cNtypSqzQcnz' target="_blank" rel="noopener noreferrer">FOTOS</Link></Button>
                </div>

                <div className='categorias' id='categoriasDoble'>
                <div className='container'>
                    <h4 className='titulo'>RESULTADOS GENERALES 2022</h4>
                    <img src={CircuitoLogo} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/CLASIF%20GENERAL%20M21%2010K%20y%2021K.pdf' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>

                <div className='container'>
                    <h4 className='titulo'>RESULTADOS CATEGORÍAS 2022</h4>
                    <img src={CircuitoLogo} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/CLASIF%20CATEGORIAS%20M21%2010K%20y%2021K(1).pdf' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>
           </div>
           
            </article>

            <article className='carreras'>
                 <h3 id='PampaFly'>PAMPA FLY, LA PLATA 2021</h3>
                 <img src={PampaFly} className='img' alt='Pampa Fly 2022'/>
                 <p className='texto'>En 2021 realizamos, con FC Producciones, nuevamente una carrera en La Plata. En este caso fue en Pampa Fly, Ala Delta Sur, Buenos Aires. 21K, 10K, 5K y KIDS fueron las distancias. Reviví acá abajo todo lo vivido. </p>

                <div className='imagenes'>
                     <h4 className='titulo'>IMÁGENES</h4>
                    <p className='texto'>Aquí podrás encontrar imágenes de la maratón anterior, tomadas por nuestros <b>fotógrafos profesionales</b>. Y lo mejor de todo, <b>¡son completamente gratis!</b></p>
                    <p className='texto'>Para acceder a las fotos, simplemente hacé click en el botón que aparece a continuación y sigue las instrucciones. Puedes descargar las imágenes que quieras y compartirlas en tus redes sociales para compartir tu logro con tus amigos y familiares.</p>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://drive.google.com/drive/folders/1kovqvucy-wVPiUE1hu1dGExIzqjrSDII?usp=share_link' target="_blank" rel="noopener noreferrer">FOTOS</Link></Button>
                </div>

                <div className='categorias'>
                <div className='container'>
                    <h4 className='titulo'>RESULTADOS GENERALES 2022</h4>
                    <img src={CircuitoLogo} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="info" size='lg' className='botonResultados'><Link to='https://eventols.com/e/m21-pampa-fly/results' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>
           </div>
           
            </article>
           
        </section>
    );
}

export default Circuito;