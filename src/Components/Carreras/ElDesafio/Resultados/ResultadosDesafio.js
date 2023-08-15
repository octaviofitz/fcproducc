import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

/* Img */
import ResultadosLogo from '../../../../Img/Resultados/Logo-Desafio.webp'

/*PDF */
import Categorias2110 from '../../../../PDF/desafioResultados/CATEGORIAS10-21K.pdf'
import General2110 from '../../../../PDF/desafioResultados/GENERALM2110K21K.pdf'
import CategoriasDesafio from '../../../../PDF/desafioResultados/CATEGORIASDESAFÍO2D.pdf'
import SUMATIEMPOS from '../../../../PDF/desafioResultados/SUMATIEMPOS.pdf'

import '../Resultados/resultadosDesafio.css'

function ResultadosDesafio() {

    function volverAtras() {
        window.history.back();
      }

    return (
        <section className='resultadosDesafio'>
            <h5 className='titulo'>Resultados El Desafío</h5>
            
            <div className='Container'>
              <div>
            <article className='cards'>
            <img src={ResultadosLogo} className='logo' alt='Resultados Desafío' />
            <p className='texto'>CLASIF CATEGORIAS 10k y 21k M21 SALDUNGARAY</p>
           <Button variant="success" size="lg" className="boton">
            <Link
              target="_blank"
              to={Categorias2110}
              download="CLASIF CATEGORIAS 10k y 21k M21 SALDUNGARAY"
            >
              DESCARGAR
            </Link>
          </Button>
            </article>
            </div>

            <div>
            <article className='cards'>
            <img src={ResultadosLogo} className='logo' alt='Resultados Desafío' />
            <p className='texto'>CLASIF GENERAL 10k y 21k CIRCUITO M21 SALDUNGARAY</p>
            <Button variant="success" size="lg" className="boton">
            <Link
              target="_blank"
              to={General2110}
              download="CLASIF GENERAL 10k y 21k CIRCUITO M21 SALDUNGARAY"
            >
              DESCARGAR
            </Link>
          </Button>
            </article>
            </div>

            <div>
            <article className='cards'>
            <img src={ResultadosLogo} className='logo' alt='Resultados Desafío' />
            <p className='texto'>CLASIF CATEGORIAS EL DESAFIO 2D TIEMPO FINAL</p>
            <Button variant="success" size="lg" className="boton">
            <Link
              target="_blank"
              to={CategoriasDesafio}
              download="CLASIF CATEGORIAS EL DESAFIO 2D TIEMPO FINAL"
            >
              DESCARGAR
            </Link>
          </Button>
            </article>
            </div>

          <div>
             <article className='cards'>
            <img src={ResultadosLogo} className='logo' alt='Resultados Desafío' />
            <p className='texto'>TIEMPOS FINALES POR DIA EL DESAFIO 2D</p>
            <Button variant="success" size="lg" className="boton">
            <Link
              target="_blank"
              to={SUMATIEMPOS}
              download="TIEMPOS FINALES X DIA EL DESAFIO 2D"
            >
              DESCARGAR
            </Link>
          </Button>
            </article>
            </div>
            </div>

           {/*  <div className='contenedorBotonDesafio'>
            <Button variant='success' onClick={volverAtras} className='goBack'>Volver ←</Button>
                     </div> */}
        </section>
    );
}

export default ResultadosDesafio;