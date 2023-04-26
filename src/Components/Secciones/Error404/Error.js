import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/* img */
import Error404 from '../../../Img/index/404.webp';

import '../Error404/error.css'

function Error() {
    return (
        <div className='error'>
            <img src={Error404} className='img' alt='Error 404'/>
            <p className='texto'>Página no encontrada</p>
            <Button variant="warning" size='lg' className='boton'><Link to='/'>Seguir navegando</Link></Button>
        </div>
    );
}

export default Error;