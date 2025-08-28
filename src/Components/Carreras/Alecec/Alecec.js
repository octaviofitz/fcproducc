import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Ratio from "react-bootstrap/Ratio";

/* Imágenes */
import AlececFlyer from "../../../Img/Alecec/alecec.webp";
import AlececResultados from "../../../Img/index/alcec2.webp";

/* PDF */
/* import AlcecCategorias from "../../../PDF/alcecCategorias.pdf";
import AlcecGenerales from "../../../PDF/alcecGenerales.pdf"; */

import "./alecec.css";

function Alecec() {
  return (
    <section className="Alecec">
      <h2 className="titulo" id="elDesafio">
        TODOS SOMOS ALCEC
      </h2>

      <div className="containerFlyerDescripcion">
        <div>
          <img src={AlececFlyer} alt="Maratón Alecec" className="flyer" />
        </div>

        <div>
          <p className="descripcion">
          FC Producciones, en conjunto con ALCEC la Asociación de Lucha Contra el Cáncer de Concepción del Uruguay, provincia de Entre Ríos, creó un mega evento con un sentido de pertenencia muy grande, tanto para los que la organizan, como para los que participan.
          </p>
          <p className="descripcion">
          Comenzó hace 11 años, en su primera edición 700 fueron las personas que se acercaron para colaborar y año a año fue aumentando el número, a tal punto que, hoy en día, son más de 3.000 las personas que se anotan para colaborar con la causa de ALCEC.
          </p>
          <p className="descripcion">
          Cada octubre (en algunos casos septiembre), mes rosa, mes de la sensibilización sobre el cáncer de mama, se realiza el Maratón Solidario Todos Somos ALCEC. Con distancias de 8 kilómetros competitivos, 4 kilómetros participativos, en los cuales muchos compiten a su máximo rendimiento, pero muchos otros participan con simple fin de colaborar, por lo tanto, se pueden ver caminantes, cochecitos de bebés, adultos mayores y mucho más y, una distancia de 1K para los más pequeños.
          </p>
          <p className="descripcion">
          Cada año se vive una fiesta solidaria en familia. Y este 2024 se cumplen 11 años, ¡te esperamos el 28 de septiembre! Las inscripciones ya están abiertas. 
          </p>

          <div className="contenedorBotones">
       
        <div>
        <Button variant="danger" size="lg" className="botonResultados" id="botonesDuo">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to='https://www.encarrera.com.ar/alcec/'
            >
              INSCRIPCIÓN
            </Link>
          </Button>
        </div>

        <div>
        <Button variant="danger" size="lg" className="botonResultados">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to='https://www.instagram.com/alcec.concepcion_del_uruguay'
              download="Alcec generales 2022"
            >
              MÁS INFORMACIÓN
            </Link>
          </Button>
        </div>

      </div>

        </div>
      </div>

      
      

          

{/*       <Button variant="danger" size='lg' className='botonInscripcion'><Link target='_blank' rel="noopener noreferrer" to='https://www.encarrera.com.ar/alcec'>INSCRIBITE ACÁ</Link></Button>
 */}
      <article className="video">
        <div className="container">
          <Ratio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cP7v7k5j7GA?si=9_LfemCXUh2VwYda"
              title="Carrera Alecec"
            ></iframe>
          </Ratio>
        </div>
      </article>

      <article className="categorias">

        <div className="container">
          <h4>CATEGORÍAS 2023</h4>
          <img
            src={AlececResultados}
            alt="Resultados Alcec por Categorías"
            className="imgResultados"
          />
          <Button variant="danger" size="lg" className="botonResultados">
            <Link
              target="_blank"
              to='https://www.cronomet.com.ar/?cronomet=alcec23-8c'
              download="Alcec categorías 2022"
            >
              VER RESULTADOS
            </Link>
          </Button>
        </div>

        <div className="container">
          <h4>GENERALES 2023</h4>
          <img
            src={AlececResultados}
            alt="Resultados Alcec Generales"
            className="imgResultados"
          />
          <Button variant="danger" size="lg" className="botonResultados">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to='https://www.cronomet.com.ar/?cronomet=alcec23-8g'
              download="Alcec generales 2022"
            >
              VER RESULTADOS
            </Link>
          </Button>
        </div>
      </article>
    </section>
  );
}

export default Alecec;
