import React from 'react';
import Ratio from "react-bootstrap/Ratio";
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import DesafioPinamar from '../../../Img/DesafioPinamar/flyerPinamar.webp';
import recorrido10k from '../../../Img/DesafioPinamar/recorrido10k.webp';
import recorrido15k from '../../../Img/DesafioPinamar/recorrido15k.webp';
import recorrido25k from '../../../Img/DesafioPinamar/recorrido25k.webp';
import recorridoKids from '../../../Img/DesafioPinamar/recorridoKids.webp';


import AutMenores from '../../../PDF/Pinamar/autMenores.pdf';
import AptoMedico from '../../../PDF/Pinamar/aptoMedico.pdf';


import './elDesafioPinamar.css'

function ElDesafioPinamar() {

    function scrollCartas() {
        const section = document.getElementById('cartas');
        section.scrollIntoView({ behavior: 'smooth' });
      }

      function scrollInscripcion() {
        const section = document.getElementById('inscripcion');
        section.scrollIntoView({ behavior: 'smooth' });
      }

      function scrollCronograma() {
        const section = document.getElementById('cronograma');
        section.scrollIntoView({ behavior: 'smooth' });
      }
      
      function scrollReglamento() {
        const section = document.getElementById('reglamento');
        section.scrollIntoView({ behavior: 'smooth' });
      }


    return (
      <section className='elDesafioPinamar'>
      <h2 className='titulo' id='elDesafioPinamar'>EL DESAFÍO PINAMAR</h2>
      <div className='containerFlyerDescripcion'>

          <div>
           <img src={DesafioPinamar} alt='Desafío Columbia Pinamar' className='flyer' /> 
           </div>
              
               <div>
              <p className='descripcion'>Pinamar siempre tuvo carreras, pero ninguna como esta. El domingo 9 de agosto tenés una nueva cita con FC Producciones en la costa atlántica con distancias de 25K, 15k, 10K y KIDS.  
              </p>
              <p className='descripcion'>Partiendo desde el Centro Comercial Pinamar Norte, con el DESAFÍO PINAMAR 3° EDICIÓN vivirás un recorrido realmente soñado y diferente, en donde conocerás la ciudad desde otro lado: bosques, médanos, mar y muuuucha, pero mucha arena.</p>
              <p className='descripcion'><mark className='mark'><b>Inscripciones abiertas. Aquí abajo toda la información.</b></mark></p>   
              <ul className='redes'>
              
                <li><Link to='https://www.instagram.com/desafiocrosstrail/' target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                <li><Link to='https://www.facebook.com/desafiocrosstrail' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i> </Link></li>
              </ul>

              </div>
             
              </div>

      <div className='botones'>
          <Button variant="warning" size='lg' className='boton' onClick={scrollCartas}><Link to='#cartas'>Cartas</Link></Button> 
          <Button variant="warning" size='lg' className='boton' onClick={scrollInscripcion}><Link to='#inscripcion'>Inscripción</Link></Button>
          <Button variant="warning" size='lg' className='boton' onClick={scrollCronograma}><Link to='#cronograma'>Cronograma</Link></Button>
          <Button variant="warning" size='lg' className='boton' onClick={scrollReglamento}><Link to='#reglamento'>Reglamento</Link></Button>
          <Button variant="warning" size='lg' className='boton' onClick={scrollReglamento}><Link to='/desafio-pinamar/resultados'>Resultados + FOTOS 2025</Link></Button>
          <Button variant="warning" size='lg' className='boton' ><Link to='/desafio-pinamar/alojamientos'>Alojamientos</Link></Button>

       {/*    <Button variant="warning" size='lg' className='boton'><Link to='/desafio-columbia/alojamientos'>Alojamientos</Link></Button>
          <Button variant="warning" size='lg' className='boton'><Link to='/desafio-columbia/resultados'>Resultados + FOTOS 2023</Link></Button> */}
         {/*  <Button variant="warning" size='lg' className='boton' disabled><Link to='/desafio-columbia/fotos2022'>Fotos 2023</Link></Button> */}
          </div>

          
          <article className='video'>
                <Ratio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HktKzyS9jM8?si=ckKyF7eDRUEVM6UQ"
              title="Carrera El Desafio Pinamar"
            ></iframe>
          </Ratio>              
                </article>

                 
                <article className='video'>
                <Ratio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_oYEBBGDcYA?si=0EZOTdXxc40BCEFM"
              title="Carrera El Desafio Pinamar"
            ></iframe>
          </Ratio>              
                </article> 

          <h3 id='cartas'>Cartas</h3>

         {/*  <p>La acreditación se lleva a cabo el viernes, sábado y domingo únicamente en el Hotel Provincial Sierra de la Ventana, una vez acreditados podrán instalarse en el lugar de la largada.</p>
          <p>Toda la carrera, o sea la largada, llegada y campamento de la modalidad 2 días y 1 día, se realizará en la Reserva Natural Privada Sierras Grandes, un hermoso sitio ubicado en Sierra de la Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
          <p>La Reserva se encuentra a tan solo 9 kilómetros del Hotel Provincial Sierra de la Ventana (lugar de acreditación ya mencionado), una vez que lleguen, si no lo conocen, se van a enamorar. Y si ya lo conocen, lo mirarán con otros ojos cada vez que vayan.</p> */}



          <h4><mark className='mark'>DATOS GENERALES</mark></h4>
          <p><strong>Carrera:</strong> El Desafío Pinamar</p>
          <p><strong>Fecha:</strong> 9 de agosto 2026</p>
          <p><strong>Lugar:</strong> Centro Comercial Pinamar Norte, Pinamar, Buenos Aires</p>
          <p><strong>Distancias:</strong> 25K, 15K, 10K y KIDS.</p>
          <p><strong>Modalidad:</strong> Individual</p>
          <p><strong>Concepto:</strong> Recorrido por médanos y senderos</p>

         {/*  <h4><mark className='mark'>DOS MODALIDADES EN UN MISMO FIN DE SEMANA ¡VOS ELEGÍS CUÁL!</mark></h4>
          <p><strong>- 2 días:</strong> 25K el sábado y 21K el domingo con campamento obligatorio</p>
          <p><strong>- 1 día:</strong> 21K, 10K o kids, solo domingo</p>

          <h3>INDIVIDUAL O EN EQUIPOS</h3>
          <p><strong>- INDIVIDUAL:</strong> Ambas modalidades</p>
          <p><strong>- EQUIPOS:</strong> Únicamente en la modalidad de 2 días y será de 2 integrantes. Puede ser MASCULINO, FEMENINO Y/O MIXTO. <b>Los participantes tendrán que realizar juntos el total del recorrido.</b></p>
 */}

          <h3>CATEGORÍAS</h3>
          <p><strong>- INDIVIDUAL:</strong> Damas y caballeros:</p>
                <ul >
                    <li>Hasta 25 años</li>
                    <li>26 a 35 años</li>
                    <li>36 a 45 años</li>
                    <li>46 a 55 años</li>
                    <li>56 a 65 años</li>
                    <li>66 años en adelante*</li>
                </ul>
          <p>Las edades serán computadas al 09/08/2026</p>
          <p>Las categorías pueden modificarse en el caso de que se inscriba un grupo grande de corredores en la modalidad o no alcance a llegar a la cantidad necesaria.</p>
          <p>*La edad para poder correr el Desafío Pinamar es a partir de los 16 años.</p>
          <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr. De lo contrario, no podrán participar.</p>
           <div className='contenedorBoton'>
          <Button variant="warning" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AutMenores} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
          </div>      


          
          <h3>LARGADA: LUGAR Y HORARIOS</h3>

          <h4><mark className='mark'>25, 15 y 10K</mark></h4>
          <p><strong>- DÍA:</strong> Domingo 9 de agosto</p>
          <p><strong>- LUGAR DE SALIDA Y LLEGADA:</strong> Centro Comercial Pinamar Norte</p>
          <p><strong>- HORARIO DE SALIDA:</strong> 10AM</p>

          <h4><mark className='mark'>KIDS</mark></h4>
          <p><strong>- DÍA:</strong> Domingo 9 de agosto</p>
          <p><strong>- LUGAR DE SALIDA Y LLEGADA:</strong> Centro Comercial Pinamar Norte</p>
          <p><strong>- HORARIO DE SALIDA:</strong> 13HS aproximadamente</p>

          
            <h3>REMERAS</h3>
          <p>El talle de remeras está sujeto a stock. No hay posibilidad de cambio. Una vez se agota el talle, deberá seleccionar el siguiente disponible al inscribirse. Los talles de adultos van del XS al XXL. La de niños de 6 a 14.</p> 


          <h3>DESCUENTO PARA TEAMS DE ENTRENAMIENTO</h3>
          <p>10% de descuento en cada inscripción y un cupo liberado para 1 profesor/a. La condición es ser 10 participantes o más.</p> 
          <p>Para obtener los beneficios: primero el profesor/a debe solicitarlo a nuestro WhatsApp (+549-11-5135-6267) o al mail info@fcproducciones.com.ar, así les enviamos el CÓDIGO DE INSCRIPCIÓN, el cual habilita el descuento.</p>
          <p>Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p>


          <h3>LA INSCRIPCIÓN INCLUYE</h3>
          <ul>
              <li>Derecho a participación.</li>
              <li>Servicio de hidratación durante el recorrido.</li>
              <li>Kit de corredor.</li>
              <li>Remera técnica de corredor.</li>
              <li>Chip de control para clasificación.</li>
              <li>Medalla finisher.</li>
              <li>Seguro de corredor.</li>
              <li>Servicio de rescate.</li>
              <li>Servicio de salud.</li>
              <li>Premiación ganadores de categorías.</li>
              <li>Premiación ganadores de la general.</li>
          </ul> 
          


          
          <h3 id='inscripcion'>INSCRIPCIÓN ONLINE</h3>
          <p><b>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO, SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</b></p>

          <p>Los pasos para inscribirse online son:</p>
          <ol>
              <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams más arriba), colocarlo en su casillero.</li>
              <li>Elegir la distancia.</li>
              <li>Completar los datos personales. Firmar el deslinde virtual y adjuntar el apto médico. Si aún no tenés el apto, podes subirlo hasta el día anterior a la carrera desde el estado de tu inscripción. (Ver apartado “a presentar en acreditación”).</li>
              <li>Abonar la primera cuota vía transferencia o depósito bancario y <strong>subir el comprobante</strong>. (IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 5 días se elimina).</li>
              <li>Una vez realizados todos los pasos, les llegará un mail de confirmación desde eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. <strong>ES DE SUMA IMPORTANCIA QUE INDIQUEN CORRECTAMENTE EL MAIL</strong>.</li>
              <li>Les llegará aviso de cuando sea momento de abonar la segunda cuota y la tercera. La única forma de quedar confirmados los pagos es subiendo el comprobante a la inscripción.</li>

            <div className='contenedorBoton'>
                <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/el-desafio-pinamar-2026' className='enlaceBoton'>
                    <Button variant="warning" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                        </div>
                             </div>
          </ol>
        

          <h4><mark className='mark'>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN</mark></h4>
          <p>Les llegará un mail que dice “inscripción confirmada” desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible.</p>
          <p>Primero les llegará uno que dice “comenzaste el proceso de inscripción” el cual NO indica que estás confirmado. Si el mail de confirmación no llega es porque no terminaron la inscripción, indicaron mal su correo o porque está en correo no deseado.</p>
          <p>Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>



          <h3>INSCRIPCIÓN PRESENCIAL</h3>
          <p>Se abona el <b>TOTAL</b> de la carrera únicamente en <b>EFECTIVO</b> en los centros de inscripción.</p>
          <h4>CENTROS DE INSCRIPCIÓN:</h4>
          <ul>
              <li><u>Aerorunners</u>: Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
              <li><u>TriSport Necochea</u>: Calle 57, 3043. Tel: 2262-52-6684</li>
              <li><u>BicyShop Mar del Plata</u>: Av. Independencia 3565. Tel: 0223-474-9816</li>
              <li><u>La Fe Deportes</u>: Loria 193, Lomas de Zamora. Tel: 11-6069-3133</li>
              <li><u>Adrogué Outdoors</u>: Av. Mitre 1110, Adrogué. Tel: 4293-6350</li>
          </ul>

          <h3>COSTOS</h3>
           <h4 style={{textAlign: "center"}}>¡PROMO LANZAMIENTO!</h4> 
         
        {/*   <p style={{textAlign: "center"}}>(PRÓXIMAMENTE)</p> */}
          <ul>
              <li>25K: <strong>$99.000 a pagar en 3 cuotas de $33.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
              <li>15K: <strong>$78.000 a pagar en 3 cuotas de $26.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
              <li>10K: <strong>$69.000  a pagar en 3 cuotas de $23.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
              <li>KIDS: <strong>$25.000</strong> pago total.</li>

          </ul>
          <p>Si tenés tu código de descuento por running team debés ponerlo cuando comenzás la inscripción (al seleccionar la distancia) y se hará el 10% de descuento sobre el total.</p>
          <p>Cuando los cupos de la etapa se agoten, se cerrarán las inscripciones y cambiará el costo.</p>


          <h3>POLÍTICA DE PAGOS DE CUOTAS</h3>
          <p><strong>Si te inscribiste en las fechas donde el pago es en tres pagos sin interés (uno al inscribirse, el segundo a los 30 días y el tercero a los 60 días de inscribirse) debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</strong></p>

          <div className='contenedorBoton'>
            <div className='botonIntermedio'>
                <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/el-desafio-pinamar-2026' className='enlaceBoton'>
                <Button variant="warning" size='lg' className='boton'>
                    INSCRIBITE ACÁ
                </Button>
                </Link>
            </div>
            </div>



          
          <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>

          <h4><mark className='mark'>- VIERNES 07/08 de 16 a 20HS</mark></h4>
          <p>Hotel Garden Suites Pinamar (Av. Arquitecto Jorge Bunge 1544, Pinamar, Provincia de Buenos Aires)</p>

          <h4><mark className='mark'>- SÁBADO 08/08 de 10 a 19HS</mark></h4>
          <p>Hotel Garden Suites Pinamar (Av. Arquitecto Jorge Bunge 1544, Pinamar, Provincia de Buenos Aires)</p>

          <h5>¿CÓMO LLEGAR AL HOTEL GARDEN SUITES?</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101847.56564779286!2d-56.6914625!3d-37.087584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cde1503f251%3A0xd7c4ef04a7b95fc9!2sGarden%20Suites%20Pinamar%20Hotel%20Spa!5e0!3m2!1ses-419!2sar!4v1709009595214!5m2!1ses-419!2sar" width="600" height="450" loading='lazy' className='mapas' title='Mapa Hotel Garden Suites'></iframe>
          
          <h4><mark className='mark'>- DOMINGO 09/08 de 08:00 a 9:30AM</mark></h4>
          <p>Centro Comercial Pinamar Norte (Aquiles 4070, Pinamar, Provincia de Buenos Aires)</p>

          <h5>¿CÓMO LLEGAR AL CENTRO COMERCIAL PINAMAR NORTE?</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50906.92949498081!2d-56.9000981!3d-37.1126605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9cab5682b11f%3A0x12ca1bfb9399be91!2sCentro%20Pinamar%20Norte!5e0!3m2!1ses-419!2sar!4v1709009837605!5m2!1ses-419!2sar" width="600" height="450" loading='lazy' className='mapas' title='Mapa Centro Comercial Pinamar Norte'></iframe>
         
         <p><mark>Por razones operativas, recomendamos no venir el último día. El kit puede retirarlo otra persona llevando los papeles firmados por el titular (ver apartado siguiente).</mark></p>



        {/*   <h3>PAPELES A PRESENTAR EN ACREDITACIÓN</h3>
          <p>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</p>
          <p><mark>De completar el proceso de inscripción online como corresponde (esto es: completar los datos, firmar el deslinde ONLINE y adjuntar el apto físico) NO DEBERÁN PRESENTAR NINGUNA DOCUMENTACIÓN EN ACREDITACIÓN. Solo presentarse con el DNI.</mark></p>
          <p>De lo contrario, deberán llevar para acreditarse y retirar su kit la siguiente documentación: </p>
          <ol>
              <li>DNI</li>
              <li>APTO MÉDICO.</li>
               <div className='contenedorBoton'>
                  <div className='botonIntermedio'>
                      <Button variant="warning" size='lg' className='boton' disabled><Link target='_blank' rel="noopener noreferrer"  to={AptoMedico}  download='Apto médico'>DESCARGAR APTO MÉDICO</Link></Button>
                      </div>
                          </div> 
              <li>DESLINDE DE RESPONSABILIDAD (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>

              <li>AUTORIZACIÓN MENOR DE EDAD. En caso de ser necesario (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>
              
              <div className='contenedorBoton'>
          <Button variant="warning" size='lg' className='boton' disabled><Link target='_blank' rel="noopener noreferrer" to={AutMenores} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
              </div> 

          </ol> */}



          <h3>RETIRO DE KITS POR TERCEROS</h3>
          <p>Si el participante titular firmó el deslinde virtual y subió el apto médico a su estado de inscripción, solo deberá presentar fotocopia del DNI del titular.
          <strong>De no contar con estos requisitos la organización NO entregará el kit</strong>.</p>


       {/*    <ol>
            <li>FOTOCOPIA DEL DNI DEL TITULAR</li>
            <li>FICHA DE INSCRIPCIÓN FIRMADA POR EL TITULAR</li>
            <li>APTO FÍSICO DEL TITULAR</li>
          </ol>
          <p><b>De no contar con estos requisitos la organización NO entregará el Kit.</b></p>
 */}



          <h3>RECORRIDOS</h3>
          <p><b>Destildar la distancia que no se quiera ver</b></p>

          <iframe src="https://www.google.com/maps/d/embed?mid=1r5D5euOYMhnz3Wrp4DRC1RFhTGd0UDc&ehbc=2E312F" width="600" height="450" loading='lazy' className='mapas' title='Mapa Interactivo Desafio Pinamar'></iframe>
          
   {/*         <img src={recorrido10k} className='img' alt='Recorrido 10KM Desafio Pinamar' />
           <img src={recorrido15k} className='img' alt='Recorrido 15KM Desafio Pinamar' />
          <img src={recorrido25k} className='img' alt='Recorrido 25KM Desafio Pinamar' /> 
          <img src={recorridoKids} className='img' alt='Recorrido Kids Desafio Pinamar' /> */}
          
         {/*  <h5>VER MAPA INTERACTIVO</h5>
          <iframe src="https://www.google.com/maps/d/embed?mid=1r5D5euOYMhnz3Wrp4DRC1RFhTGd0UDc&ehbc=2E312F" width="600" height="450" loading='lazy' className='mapas' title='Mapa Interactivo Desafio Pinamar'></iframe> */}
          

        
          <h3>RUNNING KIDS</h3>
          <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva, por lo que no tendrá premiación ni clasificación. Sí contará con remera de corredor, medalla e hidratación.</p>

          

          <h3 id='cronograma'>CRONOGRAMA GENERAL DEL EVENTO</h3>
         <h4><strong><mark className='mark'>VIERNES 07/08</mark></strong></h4>
         <ul>
          <li><strong>16 a 20HS:</strong> Acreditación y entrega de kits en Garden Suites Pinamar.</li>
         </ul>

         <h4><strong><mark className='mark'>SÁBADO 08/08</mark></strong></h4>
         <ul>
          <li><strong>10 a 19HS:</strong> Acreditación y entrega de kits en Garden Suites Pinamar.</li>
          <li><strong>18HS:</strong> Charla técnica.</li>
         </ul>

         <h4><strong><mark className='mark'>DOMINGO 09/08</mark></strong></h4>
         <ul>
          <li><strong>8 a 9:30HS:</strong> Acreditación y entrega de kits en Centro Comercial Pinamar Norte.</li>
          <li><strong>10HS:</strong> Largadas 25K, 15K y 10K.</li>
          <li><strong>13HS:</strong> Largada distancia Kids (horario aproximado).</li>
          <li><strong>14HS:</strong> Premiación (horario aproximado).</li>
         </ul>


         <h3 id='reglamento'>REGLAMENTO DESAFÍO PINAMAR</h3>
         <p>La organización controlará el cumplimiento del reglamento, que detallamos a continuación, por parte de los competidores y decidirá sobre cualquier tema que tenga que ver con la carrera. Los corredores deberán remitirse al mismo ante cualquier duda sobre temas técnicos, de circuito, competencia, clasificaciones y demás.</p>

         <ul>
          <li>La participación en la carrera implica su responsabilidad por los datos suministrados en la ficha de inscripción, su aceptación plena del reglamento, bases y condiciones del evento, y el pago de la inscripción.</li>
          <li>La organización podrá impedir que un participante continúe en la competencia en caso de que el staff médico lo aconseje.</li>
          <li>La organización podrá realizar modificaciones de distancias, recorridos y horarios por inclemencias climáticas, de seguridad u otros factores que impidan su normal desarrollo.</li>
          <li>Además, podrá suspender, cancelar o reprogramar el evento por los mismos motivos.</li>
          <li>Tales decisiones no darán derecho a reclamo alguno hacia la organización, sponsors o staff médico.</li>
          <li>La decisión será tomada en función de las circunstancias y comunicada oportunamente a los participantes.</li>
         </ul>

         <h3>ABANDONO</h3>
         <p>En caso de abandono, el competidor tiene la obligación indelegable de avisar a la organización. El aviso deberá ser realizado únicamente en los puestos de asistencia, en la largada o llegada. Los banderilleros o personal fuera de estos lugares no están autorizados a registrar el aviso de abandono. Es muy importante avisar, de lo contrario el participante se presumirá extraviado y generará inconvenientes evitables.</p>



         <h4><mark className='mark'><strong>IMPORTANTE - CORTES</strong></mark></h4>
         <p>Los 25k, 15k y 10k, no tendrán tiempo de corte, salvo que la organización considere hacerlo por cuestiones ajenas y/o de seguridad del corredor, únicamente para beneficio y resguardo del mismo. Además, recordamos que ambas modalidades son carreras y no trekking, o sea, no son caminatas.</p>

         <h4><mark className='mark'>RECLAMOS</mark></h4>
          <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>


          <h4><mark className='mark'>APTO MÉDICO</mark></h4>
          <p>El apto médico debe cargarse en la inscripción y el mismo debe ser aprobado. De no hacerlo, no podrá retirar kit ni participar del evento.</p>
          <p>El apto médico que se debe cargar en la inscripción tiene que tener una vigencia de 1 año a partir de la fecha en que fue realizado el estudio. El documento a cargar debe mostrar claramente: tus datos personales, la fecha del apto y la firma con sello del médico.</p>
          <p>La validación del apto médico será realizada por la organización.</p>
          <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>
          <p>Podés descargar el modelo del apto médico y presentarlo a tu médico para que lo complete y luego lo puedas cargar o subir el realizado por él.</p>

         {/*  <div className='contenedorBoton'>
                  <div className='botonIntermedio'>
                      <Button variant="warning" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer"  to={AptoMedico}  download='Apto médico'>DESCARGAR APTO MÉDICO</Link></Button>
                      </div>
                          </div>  */}

                          <div className='contenedorBoton'>
      <div className='botonIntermedio'>
        <Link target='_blank' rel="noopener noreferrer" to={AptoMedico} download='Apto médico'>
          <Button variant="warning" size='lg' className='boton' 
          >
            DESCARGAR APTO MÉDICO
          </Button>
        </Link>
      </div>
    </div>

      <h3>ELEMENTOS OBLIGATORIOS PARA LA CARRERA</h3>
         <ul>
          <li><strong>APTO MÉDICO</strong></li>
          <li><strong>REMERA OFICIAL</strong> <br></br>
          Provista por la organización.</li>
          <li><strong>NÚMERO DE CORREDOR</strong>.<br></br>
          Con CHIP incluido. Debe estar visible en todo momento. Provisto por la organización.</li>
          <li><strong>RECIPIENTE PARA 1 LITRO DE AGUA</strong></li>
         </ul>

         <h3>ELEMENTOS RECOMENDADOS</h3>
         <ul>
          <li>Celular</li>
          <li>Calza larga o símil</li>
          <li>Gorro</li>
          <li>Cuello térmico</li>
          <li>Manta térmica</li>
          <li>Silbato</li>
          <li>Anteojos para sol</li>
          <li>Rompeviento</li>
          <li>Guantes</li>
          <li>Protector solar</li>
          <li>Polainas</li>
          <li>Repelente de mosquitos</li>
         </ul>

          <h3>POLÍTICA DE PAGOS DE CUOTAS</h3>
          <p>Si te inscribiste en las fechas donde se paga mediante 3 cuotas sin interés (una al inscribirse, la segunda a los 30 días y la tercera a los 60 días de inscribirse) debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</p>

          <h3>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</h3>
          <p>Las inscripciones <strong>NO</strong> tienen devolución.</p>
         
        
          <h4><mark className='mark'>TRANSFERENCIA A OTRO CORREDOR</mark></h4>
          <p>Hasta el viernes 24/07, inclusive, se podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Deberá tener en cuenta que solo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
          <p>En caso de no avisar con ese tiempo de anticipación, se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro, entre otras cuestiones.</p>


          <h4><mark className='mark'>TRANSFERENCIA POR NO PODER PARTICIPAR</mark></h4>
          <p>Hasta el viernes 24/07, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
        

         <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
         <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
         <ol>
          <li>Sólo se considerarán aquellos casos en que se solicite al mail de la organización.</li>
          <li>A partir del lunes 27/07 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
          <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción.</li>
          <li>Si el cambio es a una distancia menor NO se le devolverá dinero.</li>
         </ol>

          <h3>NÚMERO DE CORREDOR</h3>
          <p>Disponible una semana antes del evento.</p>

          <h3>DERECHOS</h3>
          <p>La organización se reserva el derecho de cualquier modificación que surja en cualquier momento del correspondiente a la carrera.</p>

          <h3>MARCACIÓN</h3>
          <p>Deberás guiarte por las cintas de la organización para poder confirmar que estás por la senda o circuito correcto. Siempre verás la próxima cinta. Seguir las marcaciones y no a los corredores. Si en algún momento no ves las cintas de la organización, deberás volver hasta el punto donde avistaste la última.</p>
          <p><strong>ELEMENTOS:</strong></p>
          <ul>
              <li>Cintas blancas de Fc producciones a lo largo de todo el recorrido</li>
              <li>Banderas de los sponsors y de la organización</li>
              <li>Cartelería</li>
              <li>Banderilleros en puntos claves</li>
          </ul>

          <h3>PREMIACIÓN</h3>
          <p>Todos los participantes que finalicen el recorrido de forma reglamentaria, recibirán medalla finisher.</p>
          <p>Se premiará cada categoría en sus respectivos primeros 3 puestos, tanto hombre como mujer. También habrá premio para las generales (hombre y mujer) de cada distancia.</p>
          <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización.</p>
          <p>Los premios no tienen cambio.</p>
          <p><strong>La presencia en la premiación es obligatoria. Toda persona que no se encuentre presente en ese momento, no podrá reclamar su premio, perdiendo el beneficio.</strong></p>


          <h3>TOMA DE TIEMPO Y CLASIFICACIONES</h3>
          <p>La toma de tiempo y clasificación será electrónica con chip. Los participantes deberán retirar el chip en la acreditación y utilizarlo obligatoriamente en la carrera, a fin de poder ser clasificados. El chip deberá ser utilizado de forma VISIBLE.</p>
          <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
          <p>Los resultados se publicarán en esta página el mismo día a la noche o el día posterior al evento.</p>

          <h3>MEDIO AMBIENTE</h3>
          <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso:</p>
          <ul>
              <li>No se deben dejar residuos durante el recorrido y en el resto de lugares. Lo que llevás a la carrera, vuelve con vos</li>
              <li>Respetar la flora y fauna</li>
              <li>Solo dejar la huella de tu calzado y no de tu basura</li>
          </ul>

          <div className='contenedorBoton'>
      <div className='botonIntermedio'>
        <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/el-desafio-pinamar-2026' className='enlaceBoton'>
          <Button variant="warning" size='lg' className='boton' 
          >
            INSCRIBITE ACÁ
          </Button>
        </Link>
      </div>
    </div>
  </section>
    );
}

export default ElDesafioPinamar;