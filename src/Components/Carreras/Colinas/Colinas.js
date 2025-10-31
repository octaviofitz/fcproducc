import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

/* Imágenes */
import ColinasFlyer from '../../../Img/ColinasVerdes/flyerColinas.webp';


import "./colinas.css";

function Colinas() {
  return (
    <section className="Colinas">
      <h2 className="titulo" id="elDesafio">
        COLINAS EN ACCIÓN
      </h2>

      <div className="containerFlyerDescripcion">
        
        <div class="containerFlyer">
          <img src={ColinasFlyer} alt="Colinas en Acción" className="flyer" />
            </div>
        
        <div className="containerDescripcion">
          <p className="descripcion">
          <strong>¡Gracias por participar de la cuarta edición de nuestra carrera solidaria COLINAS EN ACCIÓN!</strong>
          </p>
          <p className="descripcion">
          Todo lo recaudado será a beneficio del Hogar Pereyra.
          </p>
          <p className="descripcion">
          ¡Acá podrán ver su resultados y sus fotos cuando estés listas!
          </p>
         {/*  <p className="descripcion">
          ¡Los esperamos a todos! A quienes quieran venir a correr a su máximo rendimiento, a los que vengan a trotar y a quienes quieran participar con el simple fin de colaborar.
          </p> */}


          <div className="contenedorBotones">
      

        <Link to='https://eventols.com/p/colinas-en-accion-2025/results'>
        <Button variant="secondary" size='lg' className='botonColinas'>RESULTADOS 2025</Button>
        </Link>

        <Link to='https://fotols.com/e/colinas-en-accion-2025/colinas-en-accion-2025'>
        <Button variant="secondary" size='lg' className='botonColinas' style={{marginTop: '1rem'}}>FOTOS 2025</Button>
        </Link>
        
       {/*  <Button variant="secondary" size='lg' className='botonColinas' ><Link to=''></Link></Button>  */}


      </div>

        </div>
      </div>

    </section>
  );
}

export default Colinas;
