import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

/* Imágenes*/
import HotelProv from '../../../../Img/Alojamientos/hotelProv.webp';
import ElMirador from '../../../../Img/Alojamientos/elMirador.webp';
import LuzDelCielo from '../../../../Img/Alojamientos/luzDelCielo.webp';
import Jorge from '../../../../Img/Alojamientos/jorge.webp';
import YMCA from '../../../../Img/Alojamientos/ymca.webp';
import PuestaDelSol from '../../../../Img/Alojamientos/puestaDelSol.webp';
import Cabania from '../../../../Img/Alojamientos/cabania.webp';
import Tornquist from '../../../../Img/Alojamientos/tornquist.webp';
import Cocolanel from '../../../../Img/Alojamientos/cocolonanel.webp';
import RocioDeLuna from '../../../../Img/Alojamientos/rociodeluna.webp';
import Alerces from '../../../../Img/Alojamientos/alerces.webp';


import '../AlojamientosM42/alojamientosM42.css'

function AlojamientosM42() {
    
    function volverAtras() {
        window.history.back();
      }

    return (
        <section>
        <div className='AlojamientosM42'>
             
        <h2>ALOJAMIENTOS</h2>
        <h3>ALOJAMIENTOS EN VILLA VENTANA</h3>

        <article>
            <h4><mark className='marcador'>LA GRAN CABAÑA</mark></h4>
            <div className='containerTop'>
                <div>
                     <img src={Cabania} className='img' alt='La Gran Cabaña' />
                         </div>
                                <div>
                                    <ul>
                                        <li>Calle: Belisario entre picaflor y colibri , Villa Ventana, Bs As. </li>
                                        <li>Tel: (0291) 4 910 175 / 265</li>
                                        <li>Email: info@lagrancabania.com.ar </li>
                                        <li>Web: <Link to='http://www.lagrancabania.com.ar/' target='_blank' rel="noopener noreferrer">www.lagrancabania.com.ar</Link></li>
                                             </ul>
                                                     </div>
          
                </div>

        </article>

        <article>
            <h4><mark className='marcador'>CABAÑAS COCOLONANEL</mark></h4>
            <div className='containerTop'>
                <div>
                    <img src={Cocolanel} className='img' alt='Cocolanel' />
                        </div>
                <div>
                     <ul>
                        <li>Calle: Chingolo s/n, entre Curamalal y Las Piedras, Villa Ventana, Bs As.</li>
                        <li>Tel: (011) 4243 4523</li>
                        <li>Email: info@cocolonanel.com.ar </li>
                        <li>Web: <Link to='www.cocolonanel.com.ar' target='_blank' rel="noopener noreferrer">www.cocolonanel.com.ar</Link></li>
                        <li>Facebook: Cabañas Cocolo Nanel│Instagram: @cocolonanel</li>
                         </ul>
                </div>
           
            </div>
        </article>


        <article>
            <h4><mark className='marcador'>COMPLEJO ROCIO DE LUNA</mark></h4>
            <div className='containerTop'> 
            <div>
                 <img src={RocioDeLuna} className='img' alt='Cocolanel' />
            </div>
            <div>
            <ul>
                <li>Calle: Chingolo s/n entre Cruz del Sur y Curamalal, Villa Ventana, Bs As.</li>
                <li>Tel: 1140300187 (Whatsapp y llamadas)</li>
                <li>Web: <Link to='www.rociodeluna.com.ar' target='_blank' rel="noopener noreferrer">www.rociodeluna.com.ar</Link></li>
                <li>Facebook: Rocio de luna villa ventana │Instagram: @villaventanarociodeluna</li>
                </ul>
            </div>
            
           
            </div>
        </article>
        
        <h3>ALOJAMIENTOS EN SAN ANDRES DE LA SIERRA</h3>
        <p>San Andrés de la Sierra se encuentra ubicado a 13,1km de la Estancia Las Vertientes.</p>

        <article>
            <h4><mark className='marcador'>LOS ALERCES RESORT & SPA</mark></h4>
            <div className='containerTop'> 
            <div>
            <img src={Alerces} className='img' alt='Complejo Puesta del Sol' />
            </div>
            <div>            <ul>
                <li>Calle: Gnena-Kena y Grindella, ex Melica, San Andrés de la Sierra</li>
                <li>Whatsapp: 2914460503</li>
                <li>Teléfono: (11)77000310</li>
                <li>reservas@losalercesresort.com.ar</li>
                <li>Web: <Link to='https://www.losalercesresort.com' target='_blank' rel="noopener noreferrer">www.losalercesresort.com</Link></li>
            </ul>
            </div>

            </div>
        </article>

        <article>
            <h4><mark className='marcador'>COMPLEJO PUESTA DEL SOL</mark></h4>
            <div className='containerTop'> 
            <div>
            <img src={PuestaDelSol} className='img' alt='Complejo Puesta del Sol' />
            </div>
            <div>            <ul>
                <li>Calle:Gnena Kena y Chilca, San Andrés de la Sierra</li>
                <li>Tel: +54 9 11 5561 8000</li>
                <li>info@complejopuestadelsol.com.ar</li>
                <li>Web: <Link to='https://www.complejopuestadelsol.com.ar' target='_blank' rel="noopener noreferrer">www.complejopuestadelsol.com.ar</Link></li>
            </ul>
            </div>

            </div>
        </article>

        <h3>ALOJAMIENTOS EN SIERRA DE LA VENTANA</h3>
        <p>Sierra de La Ventana se encuentra ubicado a 19,7 km de la Estancia Las Vertientes.</p>
        
        <article>
        <h4><mark className='marcador'>HOTEL PROVINCIAL</mark></h4>
        <div className='containerTop'> 
        <div>
        <img src={HotelProv} className='img' alt='Hotel Provincial' />
        </div>
        <div>
        <ul>
            <li>Calle: Drago 130, Sierra de La Ventana, Bs. As.</li>
            <li>Tel: (0291) 5024 / 25</li>
            <li>Email: reservas@hotelprovincialsierra.com</li>
            <li>Facebook: Hotel Provincial Sierra de la Ventana</li>
            <li>Web: <Link to='https://www.hotelprovincialsierra.com' target='_blank' rel="noopener noreferrer">www.hotelprovincialsierra.com</Link></li>
        </ul>
        </div>
        </div>
        </article>

        <article>
            <h4><mark className='marcador'>YMCAPOLIS</mark></h4>
            <div className='containerTop'>
                <div>
                <img src={YMCA} className='img' alt='YMCA'/>
                </div>
           <div>
            <ul>
                <li>Calle: Av. Ymcapolis 298 (entre Av. Rayces y Cnel. Suárez), Villa La Arcadia - Coronel Suárez</li>
                <li>Tel: 4311-4785 (int 250)</li>
                <li>Email: facundo.zuccoli@ymca.org.ar</li>
            </ul>
            </div>
            </div>
        </article>
        
        <article>
           <h4><mark className='marcador'>COMPLEJO EL MIRADOR</mark></h4>
           <div className='containerTop'>
            <div>
           <img src={ElMirador} className='img' alt='El Mirador'  />
           </div>
           <div>
           <ul>
            <li>Calle: Ruta Provincial 76 Km 226, Sierra de La Ventana.</li>
            <li>Tel: (0291) 4941 338</li>
            <li>Email:info@complejoelmirador.com.ar</li>
            <li>Web: <Link to='http://www.complejoelmirador.com.ar/' target='_blank' rel="noopener noreferrer">http://www.complejoelmirador.com.ar/</Link></li>
           </ul>
           </div>
           </div>
        </article>


        <article>
            <h4><mark className='marcador'>COMPLEJO LUZ DEL CIELO</mark></h4>
            <div className='containerTop'>
            <div>
            <img src={LuzDelCielo} className='img' alt='Complejo Luz del Cielo' />
            </div>
            
           <div>
            <ul>
                <li>Calle: Mz Los Cedros B Parque Golf, Sierra de la Ventana, Bs As.</li>
                <li>Tel o Whatsapp: 0291-154133899</li>
                <li>Email: complejoluzdelcielo@gmail.com</li>
                <li>Web: <Link to='http://www.complejoluzdelcielo.com' target='_blank' rel="noopener noreferrer">www.complejoluzdelcielo.com</Link></li>
            </ul>
            </div>
            </div>
        </article>

        <article>
            <h4><mark className='marcador'>JORGE SAVISKY PROPIEDADES</mark></h4>
            <div className='containerTop'>
                <div>
                                <img src={Jorge} className='img' alt='Jorge Savisky'/>
                                </div>
            <div>
            <ul>
                <li>Calle:Galeria Sierra Center- Av San Martin y Los Tilos, Sierra de La Ventana.</li>
                <li>Tel: (0291) 4915 499 / (0291) 15-5021258</li>
                <li>Email: jorgesavisky@sierradelaventana.com</li>
                <li>Web: <Link to='https://jorgesavisky.com.ar/' target='_blank' rel="noopener noreferrer">www.jorgesavisky.com.ar</Link></li>
            </ul>
            </div>
            </div>
        </article>
        
        <h4><mark className='marcador'>MÁS ALOJAMIENTOS DE TORNQUIST</mark></h4>
        <div className='tornquist'> 
        <div>
        <img src={Tornquist} className='img' alt='Tornquist' />
        </div>
        <div>
        <p>ALOJAMIENTOS EN VILLA VENTANA, SIERRA DE LA VENTANA, SAN ANDRES, Y MÁS, HABILITADOS POR LA DIRECCIÓN DE TURISMO DE TORNQUIST</p>
        <Button variant="danger" size='lg' className='boton'><Link to='https://www.sierrasdelaventana.com.ar/alojamientos/' target='_blank' rel="noopener noreferrer">VER AQUÍ</Link></Button>
        </div>
        </div>
    </div>

        <div className='contenedorBotonM42'>
        <Button variant="danger" onClick={volverAtras} className='goBack'>Volver ←</Button>
        </div>

        </section>
    );
}

export default AlojamientosM42;