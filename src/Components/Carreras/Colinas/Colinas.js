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
          ¡El domingo 3 de noviembre preparate para vivir un fin de semana solidario!
          </p>
          <p className="descripcion">
          Colinas en acción, la tercera edición de una hermosa carrera para toda la familia. 
          </p>
          <p className="descripcion">
          Podés correr 7 kilómetros competitivos, 4 kilómetros participativos y también acompañar a los más peques en su distancia de 1K.
          </p>
          <p className="descripcion">
          Lo recaudado será a beneficio del Hogar Pereyra. 
          </p>
          <p className="descripcion">
          ¡Los esperamos a todos! A quienes quieran venir a correr a su máximo rendimiento, a los que vengan a trotar y a quienes quieran participar con el simple fin de colaborar.
          </p>


          <div className="contenedorBotones">
       
        <div>
        <Button variant="secondary" size="lg" className="botonResultados" id="botonesDuo">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to='https://eventols.com/e/colinas-en-accion'
            >
              INSCRIPCIONES ABIERTAS
            </Link>
          </Button>
        </div>


      </div>

        </div>
      </div>

    </section>
  );
}

export default Colinas;
