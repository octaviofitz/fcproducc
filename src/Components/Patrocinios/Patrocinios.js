import React from 'react';

/* IMG */
import Columbia from '../../Img/Patrocinios/Columbia.png';
import Trisport from '../../Img/Patrocinios/trisport.png';
import Tornquist from '../../Img/Patrocinios/torquinst.png';

import '../Patrocinios/patrocinios.css'

function Patrocinios() {
    return (
        <section className='patrocinios'>
             <h2 className='titulo'>NOS ACOMPAÑAN</h2>
            <div className='container'>
                <div>
                    <img src={Columbia} alt='' className='img'/>
                    <img src={Trisport} alt='' className='img'/>
                    <img src={Tornquist} alt='' className='img'/>
                </div>
            </div>

        </section>
    );
}

export default Patrocinios;