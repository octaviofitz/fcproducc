import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import m42 from '../../Img/index/m42.webp'
import eldesafio from '../../Img/index/elDesafio.webp'
import Circuito from '../../Img/index/circuito.webp';
import AlcecPrueba from '../../Img/Alecec/alecec.webp';
import DesafioPinamar from '../../Img/index/pinamar.webp'
import DesafioColinas from '../../Img/ColinasVerdes/indexColinas.png'
import Contador from '../Contador/Contador';


import './carreras.css'

function Carreras() {

    return (
        <section className='carreras'>
            

         <Contador /> 

       {/*  <h1 className='titulo'>RESULTADOS Y FOTOS M42</h1>


        <div className='containerGeneral'>
        <article className='container'>
        <img src={m42} className="carrerasimg" alt='Carrera El Desafío'></img>
        <p className='texto'>¡Felicitaciones! Acá podés ver la clasificación final de los 50K, 42K, 34K, 25K y 10K. Las fotos se comienzan a cargar desde el lunes.</p>
        

        <div className='contenedorBotones'>
            
            <div className='contenedorBoton'>
            <Link to='https://eventols.com/p/m42-2025/results'>
        <Button variant="info" size='lg' className='botonm42'>RESULTADOS</Button>
        </Link>
            </div>
        

        <div className='contenedorBoton'>
        <Link to='https://fotols.com/e/m42-2025/fc-producciones'>
        <Button variant="info" size='lg' className='botonm42' id='fotoResultado'>FOTOS</Button>
        </Link>
        </div>
        
        </div>
        
       

        </article>
        </div>  */}


        <h1 className='titulo'>CARRERAS</h1>

        {/* <div className='containerGeneral'>


        </div> */}
             

{/*              <h2 className='titulo'>MÁS CARRERAS</h2>
 */}             

            <div className='containerGeneral'>

            <div>
               <article className='container' id='novedades'>
           <img src={DesafioPinamar} className="carrerasimg" alt='Desafio Columbia Pinamar' id='pinamarCard'></img>
           <h2 className='tituloResultados'>DESAFÍO COLUMBIA PINAMAR</h2>
            <p className='texto'>El Desafío Columbia Pinamar es tu nuevo desafío por médanos y senderos. 25K, 15K, 10K y KIDS. ¡Nueva distancia! Te esperamos el 3 de agosto 2025, Pinamar, Buenos Aires.</p>
            <Button variant="warning" size='lg' className='botonDesafioPinamar'> <Link to='desafio-pinamar'>Más información</Link></Button>
           </article>
           </div>

           <article className='container'>
        <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
        <h2 className='tituloResultados'>DESAFÍO COLUMBIA SIERRA</h2>
        <p className='texto'>El Desafío Columbia es un evento de dos modalidades. 2 días de competencia: 25K + 21K con campamento opcional o 1 día: 21K, 10K o KIDS por Sierra de la Ventana, Buenos Aires. 27 y 28 de septiembre 2025.</p>
        <Button variant="success" size='lg' className='botondesafio'> <Link to='desafio-columbia'>Más información</Link></Button>
        </article>


            <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <h2 className='tituloResultados'>MARATÓN M42</h2>
            <p className='texto'>El Maratón M42 es el clásico trail running de Villa Ventana y San Andrés de la Sierra, Buenos Aires. 50K, 42K, 34K, 25K, 10K y KIDS. ¡Nueva distancia! 31 de mayo, 1 de junio de 2025. ¡Inscripciones abiertas!</p>
             <Button variant="info" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>


           <article className='container'>
           <img src={AlcecPrueba} id='AlcecPrueba' className="carrerasimg" alt='Carrera Alecec'></img>
           <h2 className='tituloResultados'>TODOS SOMOS ALCEC</h2>
            <p className='texto'>Todos Somos Alcec es un evento solidario que organizamos junto a la Asociación de Lucha Contra el Cáncer de Concepción del Uruguay, en Entre Ríos, hace 10 años. Son 8K, 4K y 1K con más de 3.000 participantes.</p>
             <Button variant="danger" size='lg' className='botonAlecec'> <Link to='alcec'>Más información</Link></Button>
            </article>

          
        <article className='container'>
           <img src={DesafioColinas} id='AlcecPrueba' className="carrerasimg" alt='Carrera Colinas Verdes' style={{borderRadius: '0px', objectFit: 'contain'}}></img>
           <h2 className='tituloResultados'>COLINAS EN ACCIÓN</h2>
            <p className='texto'>Colinas en acción es un evento solidario que organizamos junto al colegio Colinas Verdes de Lomas de Zamora, en su tercera edición. Son 7K competitivos, 4K participativos y 1k para los más peques.</p>
              <Button variant="secondary" size='lg' className='botonColinas'> <Link to='colinasenaccion'>Más información</Link></Button> 
           {/*   <Link to='https://eventols.com/e/colinas-en-accion/results'>
        <Button variant="success" size='lg' className='botonColinas'>RESULTADOS</Button>
        </Link>
        
        <Button variant="success" size='lg' className='botonColinas' style={{marginTop: '1rem'}}><Link to='https://fotols.com/e/colinas-en-accion/fc-producciones'>FOTOS</Link></Button> */}
       
            </article>



            <article className='container'>
           <img src={Circuito} className="carrerasimg" alt='Carrera Circuito'></img>
           <h2 className='tituloResultados'>CIRCUITO M21</h2>
            <p className='texto'>El Circuito M21 es un conjunto de carreras que busca llevar la pasión por el running a distintas partes de la provincia de Buenos Aires. Mar de las Pampas, La Plata, General Belgrano y Saldungaray. Reviví las últimas.</p>
             <Button variant="info" size='lg' className='botonCircuito'> <Link to='circuito'>Más información</Link></Button>
            </article> 

            </div>

        </section>
        
    );
}

export default Carreras;
