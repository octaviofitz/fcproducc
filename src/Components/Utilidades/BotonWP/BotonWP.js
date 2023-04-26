import React from 'react';
import { Link } from 'react-router-dom';
/* import '@fortawesome/fontawesome-free/css/all.min.css';
 */

import './botonWP.css'

function BotonWP() {
    return (
        <div>
            <Link
      to="https://api.whatsapp.com/send?phone=+541156688314&text=Hola 😁"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label='Whatsapp'
    >
      <i class="fab fa-whatsapp"></i>
    </Link>
        </div>
    );
}

export default BotonWP;