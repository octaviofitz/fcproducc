import React from 'react';
import Button from 'react-bootstrap/Button';

import PinamarResultados from '../../../../Img/index/pinamarResultados.webp';
import DesafioPinamarResultados from '../../../../Img/index/pinamar.webp';

import './resultadosPinamar.css';

function ResultadosPinamar() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <article className='resultadosPinamar'>

            <h5 className='titulo'>Resultados Desafio Columbia Pinamar 2025</h5>
            
            <div className='containerNovedades'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={DesafioPinamarResultados} className="carrerasimg" alt='Carrera Desafio Columbia Pinamar'></img>
           <h4 className='tituloResultados'>RESULTADOS + FOTOS</h4>
            <p className='texto'>Acá podrán ver los resultados, las fotos y los videos de llegada de cada corredor. A medida que pasan las horas se irá cargando el material audiovisual.</p> 
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://eventols.com/p/desafio-columbia-pinamar-2025/results' without rel="noopener noreferrer">RESULTADOS</a></Button>
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://fotols.com/e/desafio-columbia-pinamar-2025/fc-producciones' without rel="noopener noreferrer">FOTOS</a></Button>
           </article>
           </div>

       </div>
    
            <div className='contenedorBoton'>
            <Button onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div>
            
        </article>
    );
}

export default ResultadosPinamar;