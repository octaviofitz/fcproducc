import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

/* Imágenes*/
import HotelProv from '../../../Img/Alojamientos/hotelProv.webp'
import ElMirador from '../../../Img/Alojamientos/elMirador.webp'
import LuzDelCielo from '../../../Img/Alojamientos/luzDelCielo.webp'
import Jorge from '../../../Img/Alojamientos/jorge.webp'
import YMCA from '../../../Img/Alojamientos/ymca.webp'
import PuestaDelSol from '../../../Img/Alojamientos/puestaDelSol.webp'
import Cabania from '../../../Img/Alojamientos/cabania.webp';
import Tornquist from '../../../Img/Alojamientos/tornquist.webp'

import '../Alojamientos/alojamientosDesafio.css'

function AlojamientosDesafio() {

    function volverAtras() {
        window.history.back();
      }

    return (
        <section>
        <div className='Alojamientos'>
             
            <h2>ALOJAMIENTOS</h2>
            <h3>ALOJAMIENTOS EN SIERRA DE LA VENTANA</h3>
            
            <article>
            <h4><mark className='marcador'>HOTEL PROVINCIAL</mark></h4>
            <img src={HotelProv} className='img' alt='Hotel Provincial' />
            <ul>
                <li>Calle: Drago 130, Sierra de La Ventana, Bs. As.</li>
                <li>Tel: (0291) 5024 / 25</li>
                <li>Email: reservas@hotelprovincialsierra.com</li>
                <li>Facebook: Hotel Provincial Sierra de la Ventana</li>
                <li>Web: <Link to='https://www.hotelprovincialsierra.com' target='_blank' rel="noopener noreferrer">www.hotelprovincialsierra.com</Link></li>
            </ul>
            </article>
            
            <article>
               <h4><mark className='marcador'>COMPLEJO EL MIRADOR</mark></h4>
               <img src={ElMirador} className='img' alt='El Mirador'  />
               <ul>
                <li>Calle: Ruta Provincial 76 Km 226, Sierra de La Ventana.</li>
                <li>Tel: (0291) 4941 338</li>
                <li>Email:info@complejoelmirador.com.ar</li>
                <li>Web: <Link to='http://www.complejoelmirador.com.ar/' target='_blank' rel="noopener noreferrer">http://www.complejoelmirador.com.ar/</Link></li>
               </ul>
            </article>

            <article>
                <h4><mark className='marcador'>COMPLEJO LUZ DEL CIELO</mark></h4>
                <img src={LuzDelCielo} className='img' alt='Complejo Luz del Cielo' />
                <ul>
                    <li>Calle: Mz Los Cedros B Parque Golf, Sierra de la Ventana, Bs As.</li>
                    <li>Tel o Whatsapp: 0291-154133899</li>
                    <li>Email: complejoluzdelcielo@gmail.com</li>
                    <li>Web: <Link to='http://www.complejoluzdelcielo.com' target='_blank' rel="noopener noreferrer">www.complejoluzdelcielo.com</Link></li>
                </ul>
            </article>

            <article>
                <h4><mark className='marcador'>JORGE SAVISKY PROPIEDADES</mark></h4>
                <img src={Jorge} className='img' alt='Jorge Savisky'/>
                <ul>
                    <li>Calle:Galeria Sierra Center- Av San Martin y Los Tilos, Sierra de La Ventana.</li>
                    <li>Tel: (0291) 4915 499 / (0291) 15-5021258</li>
                    <li>Email: jorgesavisky@sierradelaventana.com</li>
                    <li>Web: <Link to='https://jorgesavisky.com.ar/' target='_blank' rel="noopener noreferrer">www.jorgesavisky.com.ar</Link></li>
                </ul>
            </article>

            <article>
                <h4><mark className='marcador'>YMCAPOLIS</mark></h4>
                <img src={YMCA} className='img' alt='YMCA'/>
                <ul>
                    <li>Calle: Av. Ymcapolis 298 (entre Av. Rayces y Cnel. Suárez), Villa La Arcadia - Coronel Suárez</li>
                    <li>Tel: 4311-4785 (int 250)</li>
                    <li>Email: facundo.zuccoli@ymca.org.ar</li>
                </ul>
            </article>

            <h3>ALOJAMIENTOS EN VILLA VENTANA</h3>

            <article>
                <h4><mark className='marcador'>LA GRAN CABAÑA</mark></h4>
                <img src={Cabania} className='img' alt='La Gran Cabaña' />
                <ul>
                    <li>Calle: Belisario entre picaflor y colibri , Villa Ventana, Bs As. </li>
                    <li>Tel: (0291) 4 910 175 / 265</li>
                    <li>Email: info@lagrancabania.com.ar </li>
                    <li>Web: <Link to='http://www.lagrancabania.com.ar/' target='_blank' rel="noopener noreferrer">www.lagrancabania.com.ar</Link></li>
                </ul>
            </article>

            <h3>ALOJAMIENTOS EN SAN ANDRES DE LA SIERRA</h3>

            <article>
                <h4><mark className='marcador'>COMPLEJO PUESTA DEL SOL</mark></h4>
                <img src={PuestaDelSol} className='img' alt='Complejo Puesta del Sol' />
                <ul>
                    <li>Calle:Gnena Kena y Chilca, San Andrés de la Sierra</li>
                    <li>Tel: +54 9 11 5561 8000</li>
                    <li>info@complejopuestadelsol.com.ar</li>
                    <li>Web: <Link to='https://www.complejopuestadelsol.com.ar' target='_blank' rel="noopener noreferrer">www.complejopuestadelsol.com.ar</Link></li>
                </ul>
            </article>
            
            <article>
            <h4><mark className='marcador'>MÁS</mark></h4>
            <ul>
                <li><strong>Cabañas La Chilca:</strong> Ruta 76 , km 226 , Barrio San Andres de las Sierras. Tel: 011-155597-5949. Email: cabanialachilca@yahoo.com.ar</li>
                <li><strong>Cabañas de Las Pinturas:</strong> Quinta 11. Lote 22. Cacique Cura Llan (entre Chilca y Verbena). Barrio residencial San Andrés de las Sierras . Tel: (011) 15-5040-2893. Email: cabaniasdelaspinturas@gmail.com</li>
                <li><strong>Cabañas Alto San Andres:</strong> Ruta 76 , km 230 , Barrio San Andres de las Sierras. Tel: 0291 154758725. Email: info@altosanandres.com.ar</li>
                <li><strong>Cabañas Los Llantenes:</strong> Ruta 76 , km 229 , Barrio San Andres de las Sierras. Tel: 011-15-4416-2082. Email: losllantenes@gmail.com</li>
                <li><strong>Cabañas La Ñata:</strong> Verbena, San Andres de la Sierra. Tel: 11 5044-1981. Email:betodatto@gmail.com</li>
            </ul>
            </article>

            <h4><mark className='marcador'>MÁS ALOJAMIENTOS DE TORNQUIST</mark></h4>
            <img src={Tornquist} className='img' alt='Tornquist' />
            <p>ALOJAMIENTOS EN VILLA VENTANA, SIERRA DE LA VENTANA, SAN ANDRES, Y MÁS, HABILITADOS POR LA DIRECCIÓN DE TURISMO DE TORNQUIST</p>
            <Button variant="success" size='lg' className='boton'><Link to='https://www.sierrasdelaventana.com.ar/alojamientos/' target='_blank' rel="noopener noreferrer">VER AQUÍ</Link></Button>
            
        </div>

        <div className='contenedorBotonDesafio'>
            <Button variant='success' onClick={volverAtras} className='goBack'>Volver ←</Button>
            </div>

        </section>
    );
}

export default AlojamientosDesafio;