import React from 'react';
import { Link } from 'react-router-dom';
import m42 from '../../Img/index/m42.jpg'

import '../Carreras/carreras.css'

function Carreras() {
    return (
        <section className='carreras'>
            <h1 className='titulo'>Nuestras carreras</h1>
            <article>
            <Link to='m42'><img src={m42} className="carrerasimg1" ></img></Link>
            <p className='texto'>El M42 es una carrera que te adentra en la naturaleza. Una carrera que te hace disfrutar de una parte de Buenos Aires que no todos conocen y que tiene mucho para mostrar; y nada que envidiar a otras partes del país</p>
            </article>
            <article>
            <button ><Link to='eldesafio'> EL DESAFÍO</Link></button>
            </article>
           
        </section>
    );
}

export default Carreras;