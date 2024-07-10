import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

/* Imágenes*/
import GardenSuites from '../../../../Img/DesafioPinamar/Alojamientos/gardenSuites.webp';
import HotelPlayas from '../../../../Img/DesafioPinamar/Alojamientos/hotelPlayas.webp';
import Mojomar from '../../../../Img/DesafioPinamar/Alojamientos/mojomar.webp';
import Wanglen from '../../../../Img/DesafioPinamar/Alojamientos/wanglen.webp';


import './alojamientosPinamar.css';

function AlojamientosPinamar() {

    function volverAtras() {
        window.history.back();
      }

    return (
        <section>
        <div className='AlojamientosPinamar'>
             
            <h2>ALOJAMIENTOS PINAMAR</h2>
            
            <article>
            <h4><mark className='marcador'>GARDEN SUITES</mark></h4>
            <div className='containerTop'>
                <div>      
                    <img src={GardenSuites} className='img' alt='Hotel Garden Suites' />
                    </div>
            <div>
            <ul>
                <li>Calle: Av. Arq. Bunge 1544, Pinamar</li>
                <li>Whatsapp: +54 9 2254 53-3718</li>
                <li>Tel: 2254 53 3718</li>
                <li><Link to='https://gardensuites.com.ar/' target='_blank' rel="noopener noreferrer">https://gardensuites.com.ar</Link></li>
            </ul>
            </div>
            </div>
            </article>
            
            <article>
            <h4><mark className='marcador'>HOTEL PLAYAS</mark></h4>
            <div className='containerTop'>
                <div>      
                    <img src={HotelPlayas} className='img' alt='Hotel Playas' />
                    </div>
            <div>
            <ul>
                <li>Calle: Av. Bunge 250, Pinamar</li>
                <li>Tel: +54 02254 48-2236 │ 0810-345-2021</li>
                <li><Link to='https://playashotel.com.ar/' target='_blank' rel="noopener noreferrer">https://playashotel.com.ar</Link></li>
            </ul>
            </div>
            </div>
            </article>

            <article>
            <h4><mark className='marcador'>MOJO MAR</mark></h4>
            <div className='containerTop'>
                <div>      
                    <img src={Mojomar} className='img' alt='Hotel Garden Suites' />
                    </div>
            <div>
            <ul>
                <li>Calle: De las Burriquetas 247 y Acacias, Pinamar</li>
                <li>Whatsapp: 02254 598858</li>
                <li>Tel: 02254 40-7300</li>
                <li><Link to='http://www.hotelmojomar.com.ar/' target='_blank' rel="noopener noreferrer">http://www.hotelmojomar.com.ar</Link></li>
            </ul>
            </div>
            </div>
            </article>

            <article>
            <h4><mark className='marcador'>HOTEL WANGLEN</mark></h4>
            <div className='containerTop'>
                <div>      
                    <img src={Wanglen} className='img' alt='Hotel Garden Suites' />
                    </div>
            <div>
            <ul>
                <li>Calle: Biarritz 388, Ostende</li>
                <li>Tel: 02254 40-4134</li>
                <li className='hipervinculo'><Link to='https://hotelwanglenpinamar.com.ar/index.html' target='_blank' rel="noopener noreferrer">https://hotelwanglenpinamar.com.ar/index.html</Link></li>
            </ul>
            </div>
            </div>
            </article>

            <h3 className='recomendados'><Link to='https://pinamar.tur.ar/beneficios-desafio-columbia-pinamar/' target='_blank' rel='noopener noreferrer'>ALOJAMIENTOS RECOMENDADOS POR LA SECRETARÍA DE TURISMO</Link></h3>


        </div>

        <div className='contenedorBotonDesafio'>
            <Button variant='success' onClick={volverAtras} className='goBack'>Volver ←</Button>
            </div>

        </section>
    );
}

export default AlojamientosPinamar;