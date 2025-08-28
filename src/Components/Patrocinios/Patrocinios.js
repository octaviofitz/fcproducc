import React from "react";

/* IMG */
import Columbia from "../../Img/Patrocinios/Columbia.png";
import CerroColorado from "../../Img/Patrocinios/cerroColorado.png";
import Ciclismo from "../../Img/Patrocinios/Ciclismo.png";
import CorrerLomas from "../../Img/Patrocinios/CorrerLomas.png";
import Desafios from "../../Img/Patrocinios/Desafios.png";
import EscuelaAgraria from "../../Img/Patrocinios/EscuelaAgraria.png";
import FCProducciones from "../../Img/Patrocinios/FCProducciones.png";
import Heracles from "../../Img/Patrocinios/Heracles.png";
import HotelProvincial from "../../Img/Patrocinios/HotelProvincial.png";
import Cabania from "../../Img/Patrocinios/LaGranCabania.png";
import Magnesiano from "../../Img/Patrocinios/Magnesiano.png";
import Prorun from "../../Img/Patrocinios/Prorun.png";
import Sox from "../../Img/Patrocinios/Sox.png";
import Trisport from "../../Img/Patrocinios/Trisport.png";
import Coco from "../../Img/Patrocinios/Coco.png";
import Mervick from "../../Img/Patrocinios/Mervick.png";
import IconSox from "../../Img/Patrocinios/IconSex.png";
import Maraton from "../../Img/Patrocinios/Maraton.png";
import PuestaDeSol from "../../Img/Patrocinios/PuestaDeSol.png";
import Atrevo from "../../Img/Patrocinios/Atrevo.png";


import "../Patrocinios/patrocinios.css";

function Patrocinios() {
  return (
    <section className="patrocinios">
      <h2 className="titulo">NOS ACOMPAÑAN</h2>
      <div>
        <div className="containerIMG">
          {/* <div id="LosAlerces">
            <img src={Alerces} alt="Logo Alerces" className="img"/>
          </div> */}
          <div id="Columbia">
            <img src={Columbia} alt="Logo Columbia" className="img"  />
          </div>
          <div id="Magnesiano">
            <img src={Magnesiano} alt="Logo Total Magnesiano" className="img" />
          </div>
          <div id="Sox">
            <img src={Sox} alt="Logo Sox" className="img" />
          </div>
          <div id="HotelProvincial">
            <img src={HotelProvincial} alt="Logo Hotel Provincial" className="img" />
          </div>
          <div id="Cabaña">
            <img src={Cabania} alt="Logo Cabaña" className="img" />
          </div>
          <div id="Heracles">
            <img src={Heracles} alt="Logo Heracles" className="img" />
          </div>
          <div id="IconSox">
            <img src={IconSox} alt="Logo IconSox" className="img"  />
          </div>
          <div id="Maraton">
            <img src={Maraton} alt="Logo Maraton" className="img"  />
          </div>
          <div id="PuestaDeSol">
            <img src={PuestaDeSol} alt="Logo Puesta de Sol" className="img"  />
          </div>
          <div id="Atrevo">
            <img src={Atrevo} alt="Logo Atrevo" className="img"  />
          </div>
          <div id="ProRun">
            <img src={Prorun} alt="Logo ProRun" className="img" />
          </div>
          <div id="EscuelaAgraria">
            <img src={EscuelaAgraria} alt="Logo Escuela Agraria" className="img" />
          </div>
          <div id="CerroColorado">
            <img src={CerroColorado} alt="Logo Cerro Colorado" className="img" />
          </div>
          <div id="Ciclismo">
            <img src={Ciclismo} alt="Logo Ciclismo" className="img" />
          </div>
          <div id="Trisport">
            <img src={Trisport} alt="Logo Trisport" className="img" />
          </div>
          <div id="Desafios">
            <img src={Desafios} alt="Logo Desafíos" className="img" />
          </div>
          <div id="CorrerLomas">
            <img src={CorrerLomas} alt="Logo Correr Lomas" className="img" />
          </div>
          <div id="FCProducciones">
            <img src={FCProducciones} alt="Logo FC Producciones" className="img" />
          </div>
          <div id="FCProducciones">
            <img src={Coco} alt="Logo Coco" className="img" />
          </div>
          <div id="FCProducciones">
            <img src={Mervick} alt="Logo Mervick" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Patrocinios;
