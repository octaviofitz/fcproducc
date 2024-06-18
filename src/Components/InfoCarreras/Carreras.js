import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import m42 from '../../Img/index/m42.webp'
import eldesafio from '../../Img/index/elDesafio.webp'
import Circuito from '../../Img/index/circuito.webp';
import AlcecPrueba from '../../Img/Alecec/alecec.webp';
import DesafioPinamar from '../../Img/index/pinamar.png'
import General from '../../Img/index/General.webp';
/* import Personal from '../../Img/index/Personal.webp';   */
import PersonalColumbia from '../../Img/index/PersonalColumbia.webp';  
import GeneralColumbia from '../../Img/index/GeneralColumbia.webp';  


import './carreras.css'

function Carreras() {

    return (
        <section className='carreras'>

          <h1 className='titulo'>M42 LOS ALERCES 2024</h1> 
      
         <div className='containerNovedades'>
           
            <div>
                <article className='container' id='novedades'>
            <img src={m42} className="carrerasimg" alt='Carrera M42' id='resultadosImg'></img>
            <h4 className='tituloResultados'>RESULTADOS Y FOTOS</h4>
             <p className='texto'>Ya están disponibles los resultados y fotos de 50K, 42K, 25K y 10K.</p>
             <div className='containerBotones'>
             <Button variant="info" size='lg' className='botonm42' id='novedadesM42'><a href='https://eventols.com/e/m42-los-alerces-2024/results'>Resultados</a></Button>
             <Button variant="info" size='lg' className='botonm42' id='novedadesM42'><a href='https://fotols.com/e/m42-maraton-de-montana/fc-producciones'>Fotos</a></Button>
             </div>

            </article>
            </div>

            {/* <div>
                <article className='container' id='novedades'>
            <img src={GeneralColumbia} className="carrerasimg" alt='Carrera M42' id='resultadosImg'></img>
            <h4 className='tituloResultados'>TODAS LAS FOTOS DE LA CARRERA</h4>
             <p className='texto'>Fotos generales de todo el fin de semana: acreditación, salidas, recorrido, campamento y mucho más. <strong>Estamos subiendo más de 10 mil fotos gratuitas en alta calidad.</strong></p> 
             <div className='containerBotones'>
             <Button variant="warning" size='lg' id='botondesafio'><a href='https://drive.google.com/drive/folders/1XpLPtMVB45JvvnHZ466wo0MFFdO8VyJs'>FOTOS GENERALES</a></Button>
             </div>

            </article>
            </div> */}

        </div>   
       
{/* 
              <h1 className='titulo'>Proximas carreras</h1>
            <div className='containerGeneral'>

            <article className='container'>
           <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento de dos modalidades. 2 días de competencia: 25K + 21K con campamento o 1 día: 21K, 10K o KIDS por Sierra de la Ventana, Buenos Aires. ¡Te esperamos en octubre!</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='desafio-columbia'>Más información</Link></Button>
            </article>
            
            </div>
 */}

            <h2 className='titulo'>PRÓXIMAS CARRERAS</h2>

            <div className='containerGeneral'>

            {/* <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <p className='texto'>El Maratón M42 Los Alerces es el clásico de Villa Ventana y San Andrés de la Sierra, Buenos Aires. 50K, 42K, 25K, 10K y KIDS. Sábado 1 y domingo 2 de junio 2024. ¿Te lo vas a perder?</p>
             <Button variant="info" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article> */}

            <article className='container'>
           <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento de dos modalidades. 2 días de competencia: 25K + 21K con campamento o 1 día: 21K, 10K o KIDS por Sierra de la Ventana, Buenos Aires.</p>
             <Button disabled variant="success" size='lg' className='botondesafio'> <Link to='desafio-columbia'>Más información</Link></Button>
            </article>

            <article className='container'>
           <img src={DesafioPinamar} className="carrerasimg" alt='Carrera Desafío Pinamar'></img>
            <p className='texto'>El Desafío Columbia Pinamar es una nueva propuesta de FC Producciones que se corre el domingo 4 de agosto. Con distancias de 25K, 10K y KIDS por médanos y senderos.</p>
             <Button variant="warning" size='lg' className='botonDesafioPinamar'> <Link to='desafio-pinamar'>Más información</Link></Button>
            </article>

        
            </div>


             <h2 className='titulo'>MÁS CARRERAS</h2>
             

            <div className='containerGeneral'>

            <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <p className='texto'>El Maratón M42 Los Alerces es el clásico de Villa Ventana y San Andrés de la Sierra, Buenos Aires. 50K, 42K, 25K, 10K y KIDS. Sábado 1 y domingo 2 de junio 2024. ¿Te lo vas a perder?</p>
             <Button variant="info" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>


            <article className='container'>
           <img src={AlcecPrueba} id='AlcecPrueba' className="carrerasimg" alt='Carrera Alecec'></img>
            <p className='texto'>Todos Somos Alcec es un evento solidario que organizamos junto a la Asociación de Lucha Contra el Cáncer de Concepción del Uruguay, en Entre Ríos, hace 10 años. Son 8K, 4K y 1K con más de 3.000 participantes.</p>
             <Button variant="danger" size='lg' className='botonAlecec'> <Link to='alcec'>Más información</Link></Button>
            </article>

            <article className='container'>
           <img src={Circuito} className="carrerasimg" alt='Carrera Circuito'></img>
            <p className='texto'>El Circuito M21 es un conjunto de carreras que busca llevar la pasión por el running a distintas partes de la provincia de Buenos Aires. Mar de las Pampas, La Plata, General Belgrano y Saldungaray. Reviví las últimas.</p>
             <Button variant="info" size='lg' className='botonCircuito'> <Link to='circuito'>Más información</Link></Button>
            </article> 
           

            </div>

        </section>
        
    );
}

export default Carreras;
