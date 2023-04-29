import React from 'react';
import { Link } from 'react-router-dom';

import './botonWP.css'

function BotonWP() {
    return (
        <div>
            <Link
      to="https://api.whatsapp.com/send?phone=+1151356267&text=Hola 😁, vengo de www.fcproducciones.com.ar. Quisiera realizar una consulta"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label='Whatsapp'
    >
      <i className="fab fa-whatsapp"></i>
    </Link>
        </div>
    );
}

export default BotonWP;