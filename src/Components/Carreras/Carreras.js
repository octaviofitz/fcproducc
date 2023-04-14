import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import m42 from '../../Img/index/m42.webp'
import eldesafio from '../../Img/index/eldesafio.webp'
import ALCEC from '../../Img/index/alerces.png'

import '../Carreras/carreras.css'

function Carreras() {
    return (
        <section className='carreras'>
              <h1 className='titulo'>Inscripciones abiertas</h1>
            <div className='containerGeneral'>

          

            <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <p className='texto'>El Desafío Columbia es un evento único de dos modalidades. 2 días de competencia de 25K y 21K con campamento obligatorio o 1 día de 21K, 10K o KIDS por Sierra de la Ventana y Saldungaray en Buenos Aires. ¡Te esperamos el 28 y 29 de octubre!</p>
             <Button variant="warning" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>
            
            <article className='container'>
           <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento único de dos modalidades. 2 días de competencia de 25K y 21K con campamento obligatorio o 1 día de 21K, 10K o KIDS por Sierra de la Ventana y Saldungaray en Buenos Aires. ¡Te esperamos el 28 y 29 de octubre!</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='el-desafio'>Más información</Link></Button>
            </article>
            
            </div>

            <h1 className='titulo'>Próximamente</h1>

            <div className='containerGeneral'>

            <article className='container'>
           <img src={ALCEC} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento único de dos modalidades. 2 días de competencia de 25K y 21K con campamento obligatorio o 1 día de 21K, 10K o KIDS por Sierra de la Ventana y Saldungaray en Buenos Aires. ¡Te esperamos el 28 y 29 de octubre!</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='el-desafio'>PRÓXIMAMENTE</Link></Button>
            </article> 

            <article className='container'>
           <img src={ALCEC} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento único de dos modalidades. 2 días de competencia de 25K y 21K con campamento obligatorio o 1 día de 21K, 10K o KIDS por Sierra de la Ventana y Saldungaray en Buenos Aires. ¡Te esperamos el 28 y 29 de octubre!</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='el-desafio'>2024</Link></Button>
            </article> 
            </div>


        </section>
    );
}

export default Carreras;