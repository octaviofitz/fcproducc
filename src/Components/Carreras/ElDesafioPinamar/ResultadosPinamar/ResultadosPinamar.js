import React from 'react';
import Button from 'react-bootstrap/Button';

import PinamarResultados from '../../../../Img/index/pinamarResultados.webp';

import './resultadosPinamar.css';

function ResultadosPinamar() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <article className='resultadosPinamar'>

            <h5 className='titulo'>Resultados Desafio Columbia Pinamar 2024</h5>
            
            <div className='containerNovedades'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={PinamarResultados} className="carrerasimg" alt='Carrera Desafio Columbia Pinamar'></img>
           <h4 className='tituloResultados'>RESULTADOS + FOTOS + VIDEO</h4>
            <p className='texto'>Acá ya pueden ver los resultados, el video de llegada de cada corredor y a medida que pasan las horas verán las fotos de cada participante del Desafío Columbia Pinamar</p> 
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://eventols.com/e/desafio-columbia-pinamar-2024/results' without rel="noopener noreferrer">RESULTADOS</a></Button>
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://fotols.com/e/desafio-columbia-pinamar/fc-producciones' without rel="noopener noreferrer">FOTOS</a></Button>
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