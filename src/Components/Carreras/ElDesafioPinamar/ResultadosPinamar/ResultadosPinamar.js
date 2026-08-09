import React from 'react';
import Button from 'react-bootstrap/Button';

/* import PinamarResultados from '../../../../Img/index/pinamarResultados.webp'; */
import DesafioPinamarResultados from '../../../../Img/index/pinamar.webp';

import './resultadosPinamar.css';

function ResultadosPinamar() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <article className='resultadosPinamar'>

            <h5 className='titulo'>Resultados Desafio Pinamar 2026</h5>
            
            <div className='containerNovedades'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={DesafioPinamarResultados} className="carrerasimg" alt='Carrera Desafio Columbia Pinamar'></img>
           <h4 className='tituloResultados'>RESULTADOS + FOTOS</h4>
            <p className='texto'>¡Gracias por participar del Desafío Pinamar Eddie Bauer! Acá vas a poder buscar tu resultado y fotos.</p> 
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://eventols.com/p/el-desafio-pinamar-2026/results' without rel="noopener noreferrer">RESULTADOS</a></Button>
            <Button variant="warning" size='lg' className='botonDesafioPinamar'><a href='https://locosdelafoto.mirelia.net/eventos/1ff425ca-41d6-42d5-ab29-5139ec8675af' without rel="noopener noreferrer">FOTOS</a></Button>
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