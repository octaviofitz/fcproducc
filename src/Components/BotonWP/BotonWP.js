import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import '../BotonWP/botonWP.css'

function BotonWP() {
    return (
        <div>
            <a
      href="https://api.whatsapp.com/send?phone=+541156688314&text=Hola 😁"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
        </div>
    );
}

export default BotonWP;