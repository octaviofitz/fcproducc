import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import General from '../../../../Img/index/General.webp';
import Personal from '../../../../Img/index/Personal.webp'; 

import '../Resultados/resultadosM42.css';

function ResultadosM42() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <article className='resultadosM42'>

            <h5 className='titulo'>Resultados y fotos M42 LOS ALERCES 2023</h5>
            
            <div className='containerNovedades'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={Personal} className="carrerasimg" alt='Carrera M42'></img>
           <h4 className='tituloResultados'>CLASIFICACIÓN + FOTOS PERSONALES</h4>
            <p className='texto'>Buscá tu nombre y encontrá, en el mismo lugar: RESULTADO, DIPLOMA, VIDEO DE LLEGADA y FOTOS FINISHER y de CIRCUITO, todo identificado por DORSAL. Podrán descargarlas en alta calidad y de forma gratuita.</p>
            <Button variant="warning" size='lg' className='botonm42'><a href='https://bit.ly/fotospersonalesm42losalerces' target='_blank' without rel="noopener noreferrer">RESULTADOS + FOTOS</a></Button>
           </article>
           </div>

       <div>
       <article className='container' id='novedades'>
           <img src={General} className="carrerasimg" alt='Carrera M42'></img>
           <h4 className='tituloResultados'>FOTOS GENERALES</h4>
           <p className='texto'>Acá encontrá SIN CLASIFICAR POR DORSAL: de perfil, espaldas, ACREDITACIÓN, LARGADAS, RECORRIDO, PAISAJES, PREMIACIÓN, KIDS, DESFILE DE TEAMS y más. En alta calidad y gratuitas para descargar.</p>
            <Button variant="warning" size='lg' className='botonm42'><a href='https://bit.ly/fotosgeneralesm42losalerces' target='_blank' without rel="noopener noreferrer">FOTOS GENERALES</a></Button>
           </article>
       </div>

       </div>

    
            <div className='contenedorBoton'>
            <Button onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div>
            
        </article>
    );
}

export default ResultadosM42;