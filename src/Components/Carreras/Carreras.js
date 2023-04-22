import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import m42 from '../../Img/index/m42.webp'
import eldesafio from '../../Img/index/eldesafio.webp'
import ALCEC from '../../Img/index/alcec2.webp';
import Circuito from '../../Img/index/circuito.webp';

import '../Carreras/carreras.css'

function Carreras() {
    return (
        <section className='carreras'>
              <h1 className='titulo'>Inscripciones abiertas</h1>
            <div className='containerGeneral'>

            <article className='container'>
            <img src={m42} className="carrerasimg" alt='Carrera M42'></img>
            <p className='texto'>El Maratón M42 Los Alerces es el clásico de Villa Ventana y San Andrés de la Sierra, Buenos Aires. 50K, 42K, 25K, 10K y KIDS. Sábado 27 y domingo 28 de mayo 2023. ¿Te lo vas a perder? ¡Nos vemos en mayo!</p>
             <Button variant="warning" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>
            
            <article className='container'>
           <img src={eldesafio} className="carrerasimg" alt='Carrera El Desafío'></img>
            <p className='texto'>El Desafío Columbia es un evento de dos modalidades. 2 días de competencia: 25K + 21K con campamento o 1 día: 21K, 10K o KIDS por Sierra de la Ventana y Saldungaray, Buenos Aires. ¡Te esperamos en octubre!</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='desafio-columbia'>Más información</Link></Button>
            </article>
            
            </div>

            <h1 className='titulo'>Próximamente</h1>

            <div className='containerGeneral'>

            <article className='container'>
           <img src={ALCEC} className="carrerasimg" alt='Carrera Alecec'></img>
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