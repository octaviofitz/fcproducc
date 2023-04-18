import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';

import AlececFlyer from '../../Img/Alecec/alecec.jpg'
import AlececResultados from '../../Img/index/alcec2.png';

import '../Alecec/alecec.css';


function Alecec() {

    return (
        <section className='Alecec'>
            <h2 className='titulo' id='elDesafio'>ALCEC</h2>
            <img src={AlececFlyer} alt='Maratón Alecec' className='flyer' />
            <p className='descripcion'>FC Producciones, en conjunto con ALCEC la Asociación de Lucha Contra el Cáncer de Concepción del Uruguay, provincia de Entre Ríos, creó un mega evento con un sentido de pertenencia muy grande, tanto para los que la organizan, como para los que participan.</p>
            <p className='descripcion'>Comenzó hace 10 años, en su primera edición 700 fueron las personas que se acercaron para colaborar y año a año fue aumentando el número, a tal punto que, hoy en día, son más de 3.000 las personas que se anotan para colaborar con la causa de ALCEC.</p>
            <p className='descripcion'>Cada octubre, mes rosa, mes de la sensibilización sobre el cáncer de mama, o en una fecha cercana, se realiza el Maratón Solidario Todos Somos ALCEC. Con distancias de 8 kilómetros competitivos, 4 kilómetros participativos, en los cuales muchos compiten a su máximo rendimiento, pero muchos otros participan con simple fin de colaborar, por lo tanto se pueden ver caminantes, cochecitos de bebés, adultos mayores y mucho más y, una distancia de 1K para los más pequeños.</p>
            <p className='descripcion'>Cada año se vive una fiesta solidaria en familia. Y este 2023 se cumplen 10 años, ¡te esperamos el 23 de septiembre!</p>

            <h3><mark>INSCRIPCIONES PRÓXIMAMENTE</mark></h3>
            
            <div className='container'>
            <Ratio aspectRatio="16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lTBvSelSzyo" title="Carrera Alecec"></iframe>
            </Ratio>
            </div>

            <article className='categorias'>
                <div className='container'>
                    <h4>RESULTADOS CATEGORÍAS</h4>
                    <img src={AlececResultados} alt='Resultados Alcec por Categorías' className='imgResultados'/>
                    <Button variant="danger" size='lg' className='botonResultados'><Link to='http://www.cronofrancolini.com.ar/files/alcec-urug-08k-general.pdf' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>

                <div className='container'>
                    <h4>RESULTADOS GENERALES</h4>
                    <img src={AlececResultados} alt='Resultados Alcec Generales' className='imgResultados'/>
                    <Button variant="danger" size='lg' className='botonResultados'><Link to=' http://www.cronofrancolini.com.ar/files/alcec-urug-08k-categoria.pdf' target="_blank" rel="noopener noreferrer">DESCARGAR</Link></Button>
                </div>
           </article>
        </section>
    );
}

export default Alecec;