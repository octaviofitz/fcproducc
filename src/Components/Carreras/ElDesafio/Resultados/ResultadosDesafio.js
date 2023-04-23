import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

/* Img */
import ResultadosLogo from '../../../../Img/Resultados/Logo-Desafio.png'

import '../Resultados/resultadosDesafio.css'

function ResultadosDesafio() {

    function volverAtras() {
        window.history.back();
      }

    return (
        <section className='resultadosDesafio'>
            <h3 className='titulo'>Resultados El Desafío</h3>
            
            <article className='cards'>
            <img src={ResultadosLogo} className='logo' />
            <p className='texto'>CLASIFICACION GENERAL 10º EDICION M42 DE MONTAÑA - VILLA VENTANA 2022</p>
            <Button variant="success" size='lg' className='boton'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/GENERALM42A.pdf' target="_blank" rel="noopener noreferrer">RESULTADOS</Link></Button>
            </article>

            <article className='cards'>
            <img src={ResultadosLogo} className='logo' />
            <p className='texto'>CLASIFICACION CATEGORIAS 10º EDICION M42 DE MONTAÑA - VILLA VENTANA 2022</p>
            <Button variant="success" size='lg' className='boton'><Link to='https://www.bahiacorre.com.ar/subir/mispdf/CATEGORIASM42A.pdf' target="_blank" rel="noopener noreferrer">RESULTADOS</Link></Button>
            </article>

            <div className='contenedorBotonDesafio'>
            <Button variant='success' onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div>
        </section>
    );
}

export default ResultadosDesafio;