import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import './botonWP.css'

function BotonWP() {
    return (
        <div>
            <Link
      to="https://api.whatsapp.com/send?phone=+541156688314&text=Hola 😁"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </Link>
        </div>
    );
}

export default BotonWP;