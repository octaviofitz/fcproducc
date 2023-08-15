import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import '../Imagenes/imagenesM42.css'

function ImagenesM42() {

    function volverAtras() {
        window.history.back();
      }
    
    return (
        <article className='ImagenContainer'>
        <div className='imgM42'>
            <h5 className='titulo'>Imágenes M42</h5>
            <p className='texto'>Aquí podrás encontrar imágenes de la maratón anterior, tomadas por nuestros <b>5 fotógrafos profesionales</b>. Y lo mejor de todo, <b>¡son completamente gratis!</b></p>
            <p className='texto'>Nuestros fotógrafos estuvieron en cada punto del recorrido, capturando los momentos más emocionantes de la carrera. Desde la salida hasta la llegada, cada imagen refleja la pasión y el esfuerzo de todos los participantes.</p>
            <p className='texto'>Para acceder a las fotos, simplemente hacé click en el botón que aparece a continuación y sigue las instrucciones. Puedes descargar las imágenes que quieras y compartirlas en tus redes sociales para compartir tu logro con tus amigos y familiares.</p>
            <p className='texto'>En FC Producciones nos apasiona el deporte y queremos que cada uno de nuestros eventos sea una experiencia inolvidable para todos los participantes. Por eso, no solo nos preocupamos por la organización de la carrera, sino que también queremos capturar los momentos más memorables de cada edición.</p>
            <p className='texto'>¡No pierdas la oportunidad de revivir tu carrera en imágenes! Hacé click en el botón y disfruta de las fotos de la última maratón.</p>
            <Button variant="danger" size='lg' className='botonm42'><Link to='https://drive.google.com/drive/folders/1b958l1MQaTtYXiAq6NyEulTbIWRCwNJT' target="_blank" rel="noopener noreferrer">Fotos</Link></Button>
        </div>
        <div className='contenedorBoton'>
            <Button onClick={volverAtras} variant='danger' className='goBack'>Volver ←</Button>
            </div>
        </article>
    );
}

export default ImagenesM42;