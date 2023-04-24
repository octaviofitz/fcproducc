import React from 'react';

/* IMG */
import Columbia from '../../Img/Patrocinios/Columbia.png';
import Alerces from '../../Img/Patrocinios/Alerces.png';
import CerroColorado from '../../Img/Patrocinios/cerroColorado.png';
import Ciclismo from '../../Img/Patrocinios/Ciclismo.png';
import CorrerLomas from '../../Img/Patrocinios/CorrerLomas.png';
import Desafios from '../../Img/Patrocinios/Desafios.png';
import EscuelaAgraria from '../../Img/Patrocinios/EscuelaAgraria.png';
import FCProducciones from '../../Img/Patrocinios/FCProducciones.png';
import Heracles from '../../Img/Patrocinios/Heracles.png';
import HotelProvincial from '../../Img/Patrocinios/HotelProvincial.png';
import Cabania from '../../Img/Patrocinios/LaGranCabania.png';
import Magnesiano from '../../Img/Patrocinios/Magnesiano.png';
import Prorun from '../../Img/Patrocinios/Prorun.png';
import Sox from '../../Img/Patrocinios/Sox.png';
import Trisport from '../../Img/Patrocinios/Trisport.png';

import '../Patrocinios/patrocinios.css'

function Patrocinios() {
    return (
        <section className='patrocinios'>
             <h2 className='titulo'>NOS ACOMPAÑAN</h2>
             <div>
            <div className='containerIMG'>
                
                    
                    <div>
                    <img src={Alerces} alt='' className='img'/>
                    </div>
                    <div>
                    <img src={Columbia} alt='' className='img'/>
                    </div>
                    <div>
                                            <img src={Magnesiano} alt='' className='img'/>
                                            </div>

                    <div><img src={Sox} alt='' className='img'/></div>
                    <div><img src={HotelProvincial} alt='' className='img'/></div>
                    <div>  <img src={Cabania} alt='' className='img'/></div>
                    
                    
                  <div><img src={Heracles} alt='' className='img'/></div>
                  <div><img src={Prorun} alt='' className='img'/></div>
                  <div><img src={EscuelaAgraria} alt='' className='img'/></div>
                  <div><img src={CerroColorado} alt='' className='img'/></div>
                  <div><img src={Ciclismo} alt='' className='img'/></div>
                  <div><img src={Trisport} alt='' className='img'/></div>
                  <div><img src={Desafios} alt='' className='img'/></div>
                  <div><img src={CorrerLomas} alt='' className='img'/></div>
                  <div><img src={FCProducciones} alt='' className='img'/></div>


                    
                </div>
            </div>
        </section>
    );
}

export default Patrocinios;