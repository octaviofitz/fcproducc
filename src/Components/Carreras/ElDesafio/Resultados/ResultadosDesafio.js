import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Button from 'react-bootstrap/Button';

/* Img */
/* import ResultadosLogo from '../../../../Img/Resultados/Logo-Desafio.webp'
 */
/*PDF */
/* import Categorias2110 from '../../../../PDF/desafioResultados/CATEGORIAS10-21K.pdf'
import General2110 from '../../../../PDF/desafioResultados/GENERALM2110K21K.pdf'
import CategoriasDesafio from '../../../../PDF/desafioResultados/CATEGORIASDESAFÍO2D.pdf'
import SUMATIEMPOS from '../../../../PDF/desafioResultados/SUMATIEMPOS.pdf' */
import PersonalColumbia from '../../../../Img/index/PersonalColumbia.webp'
import GeneralColumbia from '../../../../Img/index/GeneralColumbia.webp'
import DesafioSierras from '../../../../Img/index/elDesafio.webp'


import '../Resultados/resultadosDesafio.css'

function ResultadosDesafio() {

 /*    function volverAtras() {
        window.history.back();
      }
 */
    return (
        <section className='resultadosDesafio'>
            <h5 className='titulo'>Resultados Y FOTOS DESAFÍO SIERRAS GRANDES</h5>
            
            <div className='Container'>
              <div>
            <article className='cards'>
            <img src={DesafioSierras} className='logo' alt='Resultados Desafío' />
            <p className='texto'><strong>CLASIFICACIÓN</strong></p>
            <p className='texto'>Acá podrán ver su resultado </p>

           <Button variant="success" size="lg" className="boton"> <a href='https://eventols.com/p/desafio-sierra-de-la-ventana-2026/results'>RESULTADOS</a></Button>
            
            </article>
            </div>

            <div>

            <article className='cards'>
            <img src={DesafioSierras} className='logo' alt='Resultados Desafío' />
            <p className='texto'><strong>TODAS LAS FOTOS DE LA CARRERA</strong></p>
            <p className='texto'>Fotos de todo el fin de semana: acreditación, salidas, recorrido, campamento y mucho más</p>
           <Button variant="success" size="lg" className="boton"> <a href='https://locosdelafoto.mirelia.net/eventos/7aee9454-c638-4089-b789-254541b3d4fe'>FOTOS</a></Button>

            </article>
            </div>
            </div>

        </section>
    );
}

export default ResultadosDesafio;