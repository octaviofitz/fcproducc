import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import m42 from '../../Img/index/m42.png'
import eldesafio from '../../Img/index/eldesafio.png'

import '../Carreras/carreras.css'

function Carreras() {
    return (
        <section className='carreras'>
            <h1 className='titulo'>Nuestras carreras</h1>
           
           <div className='articulos'>
            <article className='container'>
            <img src={m42} className="carrerasimg" ></img>
            <p className='texto'>El M42 es una carrera que te adentra en la naturaleza. Una carrera que te hace disfrutar de una parte de Buenos Aires que no todos conocen y que tiene mucho para mostrar; y nada que envidiar a otras partes del país</p>
             <Button variant="warning" size='lg' className='botonm42'><Link to='m42'>Más información </Link></Button>
            </article>
            

            <article className='container'>
           <img src={eldesafio} className="carrerasimg" ></img>
            <p className='texto'>El M42 es una carrera que te adentra en la naturaleza. Una carrera que te hace disfrutar de una parte de Buenos Aires que no todos conocen y que tiene mucho para mostrar; y nada que envidiar a otras partes del país</p>
             <Button variant="success" size='lg' className='botondesafio'> <Link to='m42'>Más información</Link></Button>
            </article>
            </div>
        </section>
    );
}

export default Carreras;