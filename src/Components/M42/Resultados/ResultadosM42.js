import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import ResultadosLogoM42 from '../../../Img/Resultados/Logo-M42.webp';

import '../Resultados/resultadosM42.css';

function ResultadosM42() {

    function volverAtras() {
        window.history.back();
      }
    

    return (
        <section className='resultadosM42'>

            <h3 className='titulo'>Resultados M42</h3>
            
            <article className='cards'>
            <img src={ResultadosLogoM42} className='logo' />
            <p className='texto'>CLASIFICACION GENERAL 10º EDICION M42 DE MONTAÑA - VILLA VENTANA 2022</p>
            <Button variant="success" size='lg' className='boton'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/GENERALM42A.pdf' target="_blank" rel="noopener noreferrer">RESULTADOS</Link></Button>
            </article>

            <article className='cards'>
            <img src={ResultadosLogoM42} className='logo' />
            <p className='texto'>CLASIFICACION CATEGORIAS 10º EDICION M42 DE MONTAÑA - VILLA VENTANA 2022</p>
            <Button variant="success" size='lg' className='boton'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/CATEGORIASM42A.pdf' target="_blank" rel="noopener noreferrer">RESULTADOS</Link></Button>
            </article>

            <div className='contenedorBoton'>
            <Button onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div>
            
        </section>
    );
}

export default ResultadosM42;