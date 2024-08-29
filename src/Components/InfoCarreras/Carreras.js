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
import PinamarResultados from '../../Img/index/pinamarResultados.webp';

import './carreras.css'

function Carreras() {

    return (
        <section className='carreras'>

        <h1 className='titulo'>PRÓXIMAS CARRERAS</h1>

        <div className='containerGeneral'>


        <article className='container'>
        <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
        <h4 className='tituloResultados'>DESAFÍO COLUMBIA SIERRA</h4>
        <p className='texto'>El Desafío Columbia es un evento de dos modalidades. 2 días de competencia: 25K + 21K con campamento opcional o 1 día: 21K, 10K o KIDS por Sierra de la Ventana, Buenos Aires.</p>
        <Button variant="success" size='lg' className='botondesafio'> <Link to='desafio-columbia'>Más información</Link></Button>
        </article>

        <article className='container'>
           <img src={AlcecPrueba} id='AlcecPrueba' className="carrerasimg" alt='Carrera Alecec'></img>
           <h4 className='tituloResultados'>TODOS SOMOS ALCEC</h4>
            <p className='texto'>Todos Somos Alcec es un evento solidario que organizamos junto a la Asociación de Lucha Contra el Cáncer de Concepción del Uruguay, en Entre Ríos, hace 10 años. Son 8K, 4K y 1K con más de 3.000 participantes.</p>
             <Button variant="danger" size='lg' className='botonAlecec'> <Link to='alcec'>Más información</Link></Button>
            </article>


        </div>
             

             <h2 className='titulo'>MÁS CARRERAS</h2>
             

            <div className='containerGeneral'>
           
           <div>
               <article className='container' id='novedades'>
           <img src={DesafioPinamar} className="carrerasimg" alt='Desafio Columbia Pinamar' id='pinamarCard'></img>
           <h4 className='tituloResultados'>DESAFÍO COLUMBIA PINAMAR</h4>
            <p className='texto'>Acá pueden ver el resultado, el video de llegada y todas las fotos del Desafío Columbia Pinamar 2024. Agendate la fecha de la edición de 2025, será el 3 de agosto.</p>
            <Button variant="warning" size='lg' className='botonDesafioPinamar'> <Link to='desafio-pinamar'>Más información</Link></Button>
           </article>
           </div>
    

            <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <h4 className='tituloResultados'>MARATÓN M42</h4>
            <p className='texto'>El Maratón M42 es el clásico trail running de Villa Ventana y San Andrés de la Sierra, Buenos Aires. 50K, 42K, 25K, 10K y KIDS. Agendate: 31 de mayo, 1 de junio de 2025.</p>
             <Button variant="info" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>


            <article className='container'>
           <img src={Circuito} className="carrerasimg" alt='Carrera Circuito'></img>
           <h4 className='tituloResultados'>CIRCUITO M21</h4>
            <p className='texto'>El Circuito M21 es un conjunto de carreras que busca llevar la pasión por el running a distintas partes de la provincia de Buenos Aires. Mar de las Pampas, La Plata, General Belgrano y Saldungaray. Reviví las últimas.</p>
             <Button variant="info" size='lg' className='botonCircuito'> <Link to='circuito'>Más información</Link></Button>
            </article> 

              
           

            </div>

        </section>
        
    );
}

export default Carreras;
