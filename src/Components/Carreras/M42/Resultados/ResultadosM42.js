import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Button from 'react-bootstrap/Button';

/* import General from '../../../../Img/index/General.webp'; */
import imgM42 from '../../../../Img/index/m42.webp'

import '../Resultados/resultadosM42.css';   

function ResultadosM42() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <article className='resultadosM42'>

            <h5 className='titulo'>Resultados y fotos M42 2025</h5>
            
            <div className='containerNovedades'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={imgM42} className="carrerasimg" alt='Carrera M42'></img>
           <h4 className='tituloResultados'>RESULTADOS Y FOTOS</h4>
            <p className='texto'>Ya están disponibles los resultados y las fotos de  50K, 42K, 34K, 25K y 10K.</p> 
            <Button variant="info" size='lg' className='botonm42'><a href='https://eventols.com/p/m42-2025/results' without rel="noopener noreferrer">RESULTADOS</a></Button>
            <Button variant="info" size='lg' className='botonm42'><a href='https://fotols.com/e/m42-2025/fc-producciones' without rel="noopener noreferrer">FOTOS</a></Button>
           </article>
           </div>

      {/*  <div>
       <article className='container' id='novedades'>
           <img src={General} className="carrerasimg" alt='Carrera M42'></img>
           <h4 className='tituloResultados'>FOTOS GENERALES</h4>
           <p className='texto'>Acá encontrá SIN CLASIFICAR POR DORSAL: de perfil, espaldas, ACREDITACIÓN, LARGADAS, RECORRIDO, PAISAJES, PREMIACIÓN, KIDS, DESFILE DE TEAMS y más. En alta calidad y gratuitas para descargar.</p>
            <Button variant="warning" size='lg' className='botonm42'><a href='https://bit.ly/fotosgeneralesm42losalerces' target='_blank' without rel="noopener noreferrer">FOTOS GENERALES</a></Button>
           </article>
       </div> */}

       </div>

    
            <div className='contenedorBoton'>
            <Button onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div>
            
        </article>
    );
}

export default ResultadosM42;