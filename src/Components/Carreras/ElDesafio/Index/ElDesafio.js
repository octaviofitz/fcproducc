import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

/* PDF */
import AptoMedicoDesafio from '../../../../PDF/aptoMedicoDesafio.pdf';
/* import DeslindeDesafio from '../../../../PDF/deslindeDesafio.pdf';*/
import AutMenoresDesafio from '../../../../PDF/autMenoresDesafio.pdf';

import elDesafio from '../../../../Img/ElDesafio/elDesafio.webp';
import Imagen10KM from '../../../../Img/ElDesafio/10KM.webp';
import Imagen21KM from '../../../../Img/ElDesafio/21KM.webp';
import Imagen25KM from '../../../../Img/ElDesafio/25KM.webp'; 
import ImagenKids from '../../../../Img/ElDesafio/KIDS.webp';
import comoLlegar from '../../../../Img/ElDesafio/comoLlegar.webp';


import '../Index/elDesafio.css'

function ElDesafio() {

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
        <section className='elDesafio'>
            <h2 className='titulo' id='elDesafio'>EL DESAFÍO SIERRAS GRANDES</h2>
            <div className='containerFlyerDescripcion'>

                <div>
                <img src={elDesafio} alt='Maratón El Desafío' className='flyer' />
                 </div>
                    
                     <div>
                    <p className='descripcion'>El Desafío Sierras Grandes en Sierra de la Ventana es una carrera de trail running que sacará tu mejor versión aventurera. Se trata de 2 días de competencia compuesta por 25K el sábado + 21K el domingo (46K totales), o solo 1 día de 21K, 10K o KIDS el domingo, ambas modalidades con CAMPAMENTO OPCIONAL.</p>
                    <p className='descripcion'>El Desafío es la carrera MÁS ALTA DE LA PROVINCIA DE BUENOS AIRES con un ascenso de más de 1.000 metros al Cerro Carpa. Es una prueba perfecta para prepararte para El Cruce.</p>
                    <p className='descripcion'>Armar tu carpa, correr, cenar, compartir momentos en el fogón, dormir, desayunar y volver a correr en un contexto de camaradería entre deportistas que buscan lo mismo que vos: vivir una aventura única, en un lugar único, desconectados del estresante día a día.</p>
                    <p className='descripcion'><mark className='mark'><strong>3 Y 4 DE OCTUBRE 2026</strong></mark></p>
                    <p className='descripcion'><mark className='mark'><strong>INSCRIPCIONES ABIERTAS</strong></mark></p>
                    <ul className='redes'>
                    
                      <li><Link to='https://www.instagram.com/desafiocrosstrail/' target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                      <li><Link to='https://www.facebook.com/desafiocrosstrail' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i> </Link></li>
                    </ul>

                    </div>
                   
                    </div>

            <div className='botones'>
                <Button variant="success" size='lg' className='boton' onClick={scrollCartas}><Link to='#cartas'>Cartas</Link></Button> 
                <Button variant="success" size='lg' className='boton' onClick={scrollInscripcion}><Link to='#inscripcion'>Inscripción</Link></Button>
                <Button variant="success" size='lg' className='boton' onClick={scrollCronograma}><Link to='#cronograma'>Cronograma</Link></Button>
                <Button variant="success" size='lg' className='boton' onClick={scrollReglamento}><Link to='#reglamento'>Reglamento</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/desafio-columbia/alojamientos'>Alojamientos</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/desafio-columbia/resultados'>Resultados + FOTOS 2025</Link></Button>
               {/*  <Button variant="success" size='lg' className='boton' disabled><Link to='/desafio-columbia/fotos2022'>Fotos 2023</Link></Button> */}
                </div>

                <h3>LAS CARRERAS</h3>
                <ul>
                    <li><strong>El Desafío: 46K divididos en 2 días: (25K + 21K): </strong></li>
                </ul>
                <p>El sábado 3 de octubre comienza la aventura para los que corren dos días con la distancia más larga: 25K en el DÍA 1. Largan 14hs.</p>
                <p>El campamento es opcional, aunque recomendamos vivir la experiencia.</p>
                <p>El domingo 4, a las 10 am, largan su DÍA 2 (21K) con el resto de las modalidades.</p>
                <p>Disfrutarán un recorrido duro con varios ascensos; uno de ellos, el sábado, es al Cerro Carpa, convirtiéndose en LA CARRERA MÁS ALTA DE LA PROVINCIA DE BUENOS AIRES con un ascenso de 1.000 metros.</p>
                <p>Es un evento ideal para prepararse para otras carreras exigentes y también de varios días como El Cruce.</p>

                <ul>
                    <li><strong>21K media maratón de domingo</strong></li>
                </ul>
                <p>Un día de carrera que se corre el domingo. Un medio maratón ideal diseñado para aquellos corredores que buscan superarse a sí mismos elevando la barrera de los 10K. Es un verdadero trail donde se sumergirán en el interior de Sierras Grandes con un desnivel interesante que probará tu entrenamiento a lo largo del año.</p>

                <ul>
                    <li><strong>10K y un inicio al trail running para muchos</strong></li>
                </ul>
                <p>Un día de carrera que se corre el domingo. Una distancia para aquellos corredores que quieran incursionar en el mundo del trail running, y también para aquellos experimentados a los que les gusta la velocidad de los 10K con una mezcla de ascensos pronunciados y llanos para quemar zapatillas.</p>

                <ul>
                    <li><strong>Distancia kids: introducción al trail</strong></li>
                </ul>
                <p>Con FC Producciones nos gusta que la carrera para los más pequeños no sea una más. Buscamos que los chicos se vayan con una enseñanza y recomendaciones sobre cómo actuar ante recorridos con piedras, cruces de arroyos y más. Es 1K controlado y acompañado por el staff. Pueden sumarse los padres.</p>

                <ul>
                    <li><strong>RESUMEN PARA TODAS LAS DISTANCIAS</strong></li>
                </ul>
                <p>Se van a encontrar con un verdadero TRAIL RUNNING. Es un terreno variado y con elevación donde disfrutarán las hermosas vistas que nos provee la Reserva Natural Sierras Grandes. Realmente volverán un poco más enamorados del trail y de los paisajes inigualables que ofrece Sierra de la Ventana.</p>


                <ul>
                    <li><strong>Campamento opcional</strong></li>
                </ul>
                <p>No es obligatorio el campamento para aquellos que corran la modalidad de 2 días. Los que quieran vivir esta magnífica experiencia contarán con estadía, desayuno, cena y estacionamiento incluido. Obvio que lo recomendamos porque es el plus que tiene la carrera, esa desconexión total de quedarse en el paraíso que nos ofrece la Reserva junto a otros corredores es inigualable. Revisar apartado de campamento más abajo.</p>


                <h3 id='cartas'>Cartas</h3>

                <p><strong>La acreditación</strong> se llevará a cabo <strong><u>únicamente</u> los días <u>viernes y sábado en el Hotel Days Inn (Drago 130, Sierra de la Ventana)</u></strong>.</p>
                <p>Todo lo que respecta a <strong>la carrera</strong>, es decir, la largada, llegada y campamento de la modalidad 2 días y 1 día, se realizará <strong><u>íntegramente</u> en la Reserva Natural Privada Sierras Grandes</strong>, un lugar de ensueño ubicado en Sierra de la Ventana, comarca de Tornquist, Provincia de Buenos Aires.</p>
                <p>La Reserva se encuentra <strong>a tan solo 9 kilómetros del Hotel Provincial Sierra de la Ventana</strong> (lugar de acreditación ya mencionado). Los que vinieron a correr el año pasado no nos van a dejar mentir: una vez que lleguen se van a enamorar. Y si ya lo conocen, lo mirarán con otros ojos.</p>

        

                <h4><mark className='mark'>DATOS GENERALES</mark></h4>
                <p><strong>Carrera:</strong> El Desafío Sierras Grandes</p>
                <p><strong>Fecha:</strong> 3 y 4 DE OCTUBRE</p>
                <p><strong>Lugar:</strong> Reserva Natural Sierras Grandes, Sierra de la Ventana, comarca de Tornquist, provincia de Buenos Aires</p>
                <p><strong>Concepto:</strong> Carrera de trail running</p>
                <p><strong>Modalidad:</strong> Individual únicamente</p>

                <h3>Modalidad</h3>
                <h4><mark className='mark'>DOS MODALIDADES EN UN MISMO FIN DE SEMANA ¡VOS ELEGÍS CUÁL!</mark></h4>
                <p><strong>- 2 días:</strong> 25K el sábado y 21K el domingo con campamento opcional</p>
                <p><strong>- 1 día:</strong> 21K, 10K o kids, solo domingo con campamento opcional</p>

                {/* <h3>INDIVIDUAL O EN EQUIPOS</h3>
                <p><strong>- INDIVIDUAL:</strong> Ambas modalidades</p>
                <p><strong>- EQUIPOS:</strong> Únicamente en la modalidad de 2 días y será de 2 integrantes. Puede ser MASCULINO, FEMENINO O MIXTO. Los participantes tendrán que realizar juntos el total del recorrido. Esto puede modificarse y pasar a individual en caso de que no llegue a completarse la cantidad necesaria.</p> */}

                <h3>CATEGORÍAS</h3>
                <p><strong>- INDIVIDUAL:</strong> Damas y caballeros:</p>
                <ul >
                    <li>Hasta 25 años</li>
                    <li>26 a 35 años</li>
                    <li>36 a 45 años</li>
                    <li>46 a 55 años</li>
                    <li>56 a 65 años</li>
                    <li>66 en adelante</li>
                </ul>
               {/*  <p><strong>- EQUIPO MIXTO:</strong> Sin categoría. *</p>
                <p><strong>- EQUIPO MASC Y FEM:</strong> Sin categoría. *</p> */}
                <p><strong>*Las categorías pueden modificarse en caso de no completar el cupo mínimo de 6 corredores en la misma a 45 días antes de la carrera.</strong></p>
                <p><b>LAS EDADES SERÁN COMPUTADAS AL 4 DE OCTUBRE DE 2026.</b></p>
                <p>*La edad mínima para poder correr los 46K, los 21K o los 10K es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr. De lo contrario, no podrán participar.</p>
                <p>*En la distancia KIDS se pueden anotar pequeños de entre 1 a 15 años.</p>
                <div className='contenedorBoton'>
                <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AutMenoresDesafio} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>


                
                <h3>LUGAR Y HORARIOS DE LARGADA</h3>

                <h4><mark className='mark'>MODALIDAD 2 DÍAS</mark></h4>
                <p><strong>- DÍA:</strong> SÁBADO 03/10</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 14 horas</p>
                <p><strong>- DISTANCIA REAL:</strong> 25 K</p>
                <p><strong>- SALIDA Y LLEGADA:</strong> RESERVA NATURAL SIERRAS GRANDES, TORNQUIST.</p>

                <h4><mark className='mark'>MODALIDAD 2 DÍAS Y 1 DÍA</mark></h4>
                <p><strong>- DÍA:</strong> DOMINGO 04/10</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 10 horas</p>
                <p><strong>- DISTANCIAS REALES:</strong> 21K Y 10K</p>
                <p><strong>- SALIDA Y LLEGADA:</strong> RESERVA NATURAL SIERRAS GRANDES, TORNQUIST.</p>


                <h3>REMERAS</h3>
                <p>Los talles de adultos van del XS al XXL. Los de niños del 6 al 14. El talle de remera elegido al momento de inscribirse no tiene cambio.</p>


                <h3>DESCUENTO PARA TEAMS DE ENTRENAMIENTO</h3>
                <p>10% de descuento en cada inscripción y un cupo liberado para 1 profesor/a. La condición es ser 10 participantes o más.</p>
                <p>Para obtener los beneficios: primero el profesor/a debe solicitarlo a nuestro WhatsApp (+549-11-5135-6267) o al mail info@fcproducciones.com.ar, así les enviamos el CÓDIGO DE INSCRIPCIÓN, el cual habilita el descuento.</p>
                <p>Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p> 




                <h3>LA INSCRIPCIÓN INCLUYE</h3>
                <ul>
                    <li>Derecho a participación</li>
                    <li>Si corren modalidad 2 días (46k) y optaron por la opción CON CAMPAMENTO: incluye la estadía, el estacionamiento, la cena y el desayuno</li>
                    <li>Si corren solo el domingo, pueden solicitar esto mismo abonando un adicional. En cualquier caso, la carpa y todos los elementos del campamento corren por cuenta del corredor</li>
                    <li>Servicio de hidratación durante el recorrido</li>
                    <li>Kit de corredor</li>
                    <li>Remera técnica de corredor</li>
                    <li>Chip de control para clasificación</li>
                    <li>Medalla finisher</li>
                    <li>Seguro de corredor</li>
                    <li>Servicio de rescate</li>
                    <li>Servicio de salud</li>
                    <li>Premiación para ganadores de categoría</li>
                    <li>Premiación para ganadores de las generales</li>
                </ul>

                {/* <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <p>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</p> */}
             
                <h4><mark className='mark'>INSCRIPCIÓN ONLINE</mark></h4>
                <p>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE; PUEDE REALIZARSE LUEGO, SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</p>
                <p>Los pasos para inscribirse online son:</p>
                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams más arriba), colocarlo en su casillero.</li>
                    <li>Elegir la distancia.</li>
                    <li>Completar los datos personales. Firmar el deslinde virtual y adjuntar el apto médico. Si aún no tenés el apto, podés subirlo hasta el día anterior a la carrera desde el estado de tu inscripción. (Ver apartado “a presentar en acreditación”).</li>
                    <li>Abonar la primera cuota vía transferencia o depósito bancario y <strong>subir el comprobante.</strong> (IMPORTANTE: si no lo comparten, la inscripción queda pendiente y a los 5 días se elimina).</li>
                    <li>Una vez realizados todos los pasos, les llegará un mail de confirmación desde eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. <strong>ES DE SUMA IMPORTANCIA QUE INDIQUEN CORRECTAMENTE EL MAIL</strong>.</li>
                   <li>Les llegará aviso de cuándo sea momento de abonar la segunda cuota y la tercera. La única forma de quedar confirmados los pagos es subiendo el comprobante a la inscripción.</li> 
                </ol>
                
                      <div className='contenedorBoton'>
                    <div className='botonIntermedio'>
                        <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/desafio-sierra-de-la-ventana-2026' className='enlaceBoton'>
                        <Button variant="success" size='lg' className='boton'>
                            INSCRIBITE ACÁ
                        </Button>
                        </Link>
                    </div>
                    </div>

                    <h5><mark className='mark'>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN:</mark></h5>
                    <p>Les llegará un mail que dice “inscripción confirmada” desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible.</p>
                    <p>Primero les llegará uno que dice “Comenzaste el proceso de inscripción”, el cual NO indica que estás confirmado. Si el mail de confirmación no llega, es porque no terminaron la inscripción, indicaron mal su correo o porque está en <strong>correo no deseado u otra casilla</strong>.</p>
                    <p>Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>

             
                <h4><mark className='mark'>INSCRIPCIÓN PRESENCIAL</mark></h4>
                <p>Se abona el TOTAL de la carrera únicamente en EFECTIVO en los centros de inscripción.</p>
                <p><strong>CENTRO DE INSCRIPCIÓN</strong></p>
                <ul>
                    <li><u>Aerorunners:</u> Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
                    <li><u>TriSport Necochea:</u> Calle 57, 3043. Tel: 2262-52-6684</li>
                    <li><u>BicyShop Mar del Plata:</u> Av. Independencia 3565. Tel: 0223-474-9816</li>
                    <li><u>La Fe Deportes:</u> Loria 193, Lomas de Zamora. Tel 11-6069-3133</li>
                    <li><u>Adrogué Outdoors:</u> Av. Mitre 1110, Adrogué. Tel 4293-6350</li>
                </ul>

                <h3>COSTOS</h3>
                <h4 style={{textAlign: 'center'}}><mark className='mark'>PROMO LANZAMIENTO</mark></h4>
                <h4 style={{textAlign: 'center', marginBottom: '2rem'}}><mark className='mark'>CUMPLIMOS 10 AÑOS Y LES REGALAMOS ESTE:<br></br> 
                ¡PRECIO ÚNICO E IMPERDIBLE SOLO POR 5 DIAS!</mark></h4> 

                <p><strong>DOS DÍAS INDIVIDUAL (25K + 21K) CON SERVICIO DE CAMPAMENTO:</strong>  <strong><s>$324.000</s> <mark className='mark'>$270.000</mark> a pagar en tres cuotas de $90.000 por transferencia bancaria</strong>. La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</p>

                <p><strong>DOS DÍAS INDIVIDUAL (25K + 21K) SIN CAMPAMENTO:</strong>  <strong><s>$273.000</s> <mark className='mark'>$228.000</mark> a pagar en tres cuotas de $76.000 por transferencia bancaria</strong>. La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</p>

                <p><strong>1 DÍA (DOMINGO) 21K:</strong>  <strong><s>$135.000</s> <mark className='mark'>$114.000</mark> a pagar en tres cuotas de $38.000 por transferencia bancaria</strong>. La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</p>

                <p><strong>1 DÍA (DOMINGO) 10K:</strong>  <strong><s>$96.000</s> <mark className='mark'>$81.000</mark> a pagar en tres cuotas de $27.000 por transferencia bancaria</strong>. La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</p>

                <p><strong>KIDS (DOMINGO) 1K:</strong>  <strong><s>$25.000</s> <mark className='mark'>$20.000</mark> pago total.</strong> </p>
                


                <p>Si tenés tu código de descuento por running team (solicitado previamente), debés ponerlo cuando comenzás la inscripción y se hará el 10% de descuento sobre las cuotas.</p>
                <p><u>Cuando pasen los 5 días, se actualizarán los costos para la ETAPA 1.</u>.</p>


                <h3>POLÍTICA DE PAGO DE CUOTAS</h3>
                <p>Si te inscribiste en las fechas en donde se realizan tres pagos sin interés (uno al inscribirse, el segundo a los 30 días y el tercero a los 60 días), debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</p>

                <div className='contenedorBoton'>
                    <div className='botonIntermedio'>
                        <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/desafio-sierra-de-la-ventana-2026' className='enlaceBoton'>
                        <Button variant="success" size='lg' className='boton'>
                            INSCRIBITE ACÁ
                        </Button>
                        </Link>
                    </div>
                    </div>


                {/* <h3>TRASLADO</h3>

                <p>La organización ofrecerá para el SÁBADO y el DOMINGO un traslado desde el HOTEL PROVINCIAL (lugar de acreditaciones) hasta el lugar de la largada para quienes lo necesiten. Será un único horario de ida y un único horario de vuelta. Reservar enviando un mail a <strong>info@fcproducciones.com.ar</strong></p> */}

                
                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>
                <p><strong>La acreditación se realizará únicamente los días viernes y sábado en el Hotel Days Inn de Sierra de la Ventana (Drago 130). La Reserva Sierras Grandes, lugar donde se realiza la carrera, se encuentra a 12 kilómetros del Hotel Days Inn.</strong></p> 

                <h4><mark className='mark'>- VIERNES 02/10</mark></h4>
                <p>16 a 19hs: Acreditación a todas las distancias.</p>

                <h4><mark className='mark'>- SÁBADO 03/10</mark></h4>
                <p>9 a 13hs: Prioridad acreditación para modalidad 2 días.</p>
                <p>9 a 17hs: Acreditación modalidad 1 día: 21K, 10K y Kids.</p>

                <p><strong><u>ATENCIÓN:</u> El día domingo 4/10 NO HABRÁ ACREDITACIÓN. Se retira el kit únicamente el viernes o sábado, con la posibilidad de que lo haga un tercero con tu fotocopia de dni siempre y cuando esté el deslinde firmado y el apto médico subido.</strong></p>
    
                <h5>CÓMO LLEGAR AL HOTEL DAYS INN?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12853598.356428366!2d-61.798543!3d-38.138204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eceecaac28d5a3%3A0x820b68edb61e3981!2sDays%20Inn%20Hotel%20Sierra%20de%20la%20Ventana!5e0!3m2!1ses!2sus!4v1772655430468!5m2!1ses!2sus" width="600" height="450" loading="lazy" className='mapas' title='Mapa Hotel Provincial'></iframe>
                <p><b>IMPORTANTE: EN LA RESERVA NATURAL PRIVADA SIERRAS GRANDES NO SE PODRÁ RETIRAR KIT NI TAMPOCO INSCRIBIRSE AL EVENTO, NINGÚN DÍA.</b></p>
               
                <h3>RETIRO DE KITS POR TITULAR</h3>
                <p>Para retirar el kit deberán presentarse dentro de los horarios de acreditación correspondientes (viernes o sábado) con el DNI físico.</p>
                <p>Para poder retirarlo, el corredor debe tener el <strong>deslinde online firmado</strong> y el <strong>apto médico subido y aprobado. De lo contrario, no se le entregará el kit</strong>.</p>
                    
                <h3>RETIRO DE KITS POR TERCEROS</h3>
                <p>Si el participante titular firmó el deslinde virtual y subió el apto médico a su estado de inscripción, solo deberá presentar fotocopia del DNI del titular.</p>
                <p><strong><u>De no contar con estos requisitos, la organización NO entregará el kit.</u></strong></p>





    {/*             <h3>¿QUÉ NECESITO PARA RETIRAR MI KIT?</h3>
                <p>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</p>
                <p>De completar el proceso de inscripción online como corresponde (esto es: completar los datos, firmar el deslinde ONLINE y adjuntar el apto médico) NO DEBERÁN PRESENTAR NINGUNA DOCUMENTACIÓN EN ACREDITACIÓN. Solo presentarse con el DNI.</p>
                <p>De lo contrario, deberán llevar para acreditarse y retirar su kit la siguiente documentación: </p>
                <ol>
                    <li>DNI</li>
                    <li>APTO MÉDICO.</li>
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                            <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AptoMedicoDesafio} download='Apto médico'>DESCARGAR APTO MÉDICO</Link></Button>
                            </div>
                                </div>
                    <li>DESLINDE DE RESPONSABILIDAD (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>
                         <div className='contenedorBoton'>
                            <div className='botonIntermedio'>
                                <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={DeslindeDesafio} download='Deslinde'>DESCARGAR DESLINDE</Link></Button>
                                    </div>
                                        </div> 
                    <li>AUTORIZACIÓN MENOR DE EDAD. En caso de ser necesario (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>
                             <div className='contenedorBoton'>
                                <div className='botonIntermedio'>
                                    <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AutMenoresDesafio} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
                                        </div>
                                            </div> 
                </ol>
 */}
             
                
                
                <h3>¿CÓMO LLEGAR A LA RESERVA NATURAL SIERRAS GRANDES?</h3>
                <h4>LUGAR DE LARGADAS, LLEGADAS Y CAMPAMENTO</h4>
                <img src={comoLlegar} alt='Como llegar a Sierras Grandes' className='comoLlegar' />
                <ol>
                    <li>No es posible buscar la ubicación exacta mediante GPS, por lo que hay que seguir los siguientes pasos para llegar:</li>
                    <li>El siguiente link les marca la ubicación de la PRIMERA TRANQUERA que hay que atravesar, ese punto SÍ está marcado en GPS.<Link target='_blank' rel="noopener noreferrer" to='https://maps.app.goo.gl/AmrYN23jV8AJc5jH7' className='enlaceBoton'>
                <Button variant="success" size='lg' className='boton' id='enlaceBoton2' style={{paddingLeft: '2rem', paddingRight: '2rem', marginTop:'1rem'}}>
                       RUTA 
                    </Button>
                    </Link>
                    </li>
            
                    <li>Es una tranquera que está ubicada a 2,6 km del Hotel Days Inn de Sierra de la Ventana (lugar de acreditación).</li>
                    <li>Una vez atravesada la tranquera, son, aproximadamente, 9 kilómetros por camino de tierra hasta llegar a la Reserva Natural Sierras Grandes (lugar de llegada y salida de todas las carreras y del campamento).</li>
                    <li>Al camino de tierra inicial se accede desde la ruta provincial 72. Verán banderas y referencias de la carrera.</li>
                </ol>
                
           {/*      <Link target='_blank' rel="noopener noreferrer" to='https://www.instagram.com/p/DAlyEOqpClL/?img_index=1' className='enlaceBoton'>
                <Button variant="success" size='lg' className='boton' id='enlaceBoton2'>
                        MÁS INFORMACIÓN ACÁ
                    </Button>
                    </Link> */}

                <h3>REMERA OBLIGATORIA Y DORSAL VISIBLE</h3>
                <p>La remera oficial es obligatoria y todos los corredores deben utilizarla. Además, es de suma importancia que, durante todo el recorrido, el dorsal esté a la vista. Se debe ver siempre para la seguridad del corredor, para la clasificación y luego para poder adquirir las fotos, es decir, tener fotos disponibles. El dorsal no debe estar tapado por ropa, por mochila de hidratación ni por cualquier objeto que imposibilite su fácil lectura.</p>
            


{/* 
                <h3>EL DORSAL DEBE ESTAR SIEMPRE VISIBLE</h3>
                <p>Es de suma importancia que, durante todo el recorrido, el dorsal esté a la vista. Se debe ver siempre, tanto para la seguridad del corredor, para la clasificación como para luego poder adquirir las fotos, es decir, tener fotos disponibles. El dorsal no debe estar tapado por ropa, por mochilas de hidratación ni por cualquier objeto que imposibilite su fácil lectura.</p> */}

                    
                
                <h3>CAMPAMENTO OPCIONAL</h3>
                <ul>
                    <li>El campamento será opcional tanto para la modalidad de dos días como para la de un día de carrera. LA CARPA Y TODOS LOS ELEMENTOS DE CAMPAMENTO CORREN POR CUENTA DEL CORREDOR.</li>
                    <li>Los corredores que contratan campamento, deberán primero acreditarse para luego poder acceder al mismo. Cada corredor contará con una pulsera para ingresar al predio, otorgada en la acreditación.</li>
                    <li>El campamento (que será dentro de la Reserva Natural Sierras Grandes, donde salen y llegan todas las distancias) abrirá sus puertas a partir del sábado 3 de octubre desde las 10 am para que cada corredor pueda armar su propia carpa antes de correr.</li>
                    <li>Los autos quedarán dentro del campamento, contamos con un estacionamiento sin cargo para quienes contratan el servicio.</li>
                    <li>El servicio de campamento incluye también: estadía en el campo, cena del sábado y desayuno del domingo.</li>
                    <li>Los corredores de dos días que quieran acceder al campamento lo seleccionan al momento de inscribirse. Los de 1 día y/o acompañantes, solicitan la estadía con un costo adicional por mail info@fcproducciones.com.ar.</li>
                    <li>Avisar con anticipación al mail en caso de ser celíacos, vegetarianos o veganos para poder ofrecerles la comida adecuada en el campamento.</li>
                    <li>HORARIO DE CENA SÁBADO 3/10: 20 a 21:30 horas.</li>
                    <li>HORARIO DE DESAYUNO 4/10: 7 a 8:30 horas.</li>
                    <li>El campamento para los corredores y la Reserva en general no cuenta con una proveeduría. Se les proporcionará la cena y el desayuno correspondientes a quienes contraten campamento. Para los corredores de ambas modalidades habrá posibilidad de comprar únicamente bebidas sin alcohol, sandwiches y agua caliente. Al no haber señal en la zona, y solamente antena de internet, se recomienda llevar efectivo, sin excepción. Recomendamos proveerse de todo lo que consuman fuera de todo lo mencionado ya que la reserva se encuentra en una zona alejada a la ciudad. No olvidemos que el objetivo es disfrutar de dos días de correr y vincularse con la naturaleza. Contamos con 12 Baños químicos y dos duchas con agua caliente de hombres) y dos de mujeres (este último es exclusivo para el campamento).</li>
                </ul>
               


             <h3>RECORRIDOS</h3>
              <p style={{textAlign: "center"}} ><strong>PRÓXIMAMENTE</strong></p> 

{/* 
             <iframe
                    src="https://www.google.com/maps/d/embed?mid=1CoGqmWVPuxzKioYecP1hZj3ZRE5KkXs&ehbc=2E312F"
                    width="400"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className='recorridos'
                    title='Mapa interactivo recorridos El Desafio'
                ></iframe>


                <h3>RECORRIDO 25K</h3>

                 <img src={Imagen25KM} alt='Recorrido 25KM' className='recorridos' /> 

             <h3>RECORRIDO 21K</h3>

              <iframe
                    src="https://www.instagram.com/p/C_0Ta_lunWl/embed"
                    width="400"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className='recorridos'
                ></iframe> 
 

                <img src={Imagen21KM} alt='Recorrido 21KM Desafío Sierras' className='recorridos' /> 

                <h3>RECORRIDO 10K</h3>

              <iframe
                    src="https://www.instagram.com/p/C_9BsyvuV-0/embed"
                    width="400"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className='recorridos'
                ></iframe> 
               

                <img src={Imagen10KM} alt='Recorrido 10KM Desafío Sierras' className='recorridos' /> 


                <h3>RECORRIDO KIDS</h3>

                <img src={ImagenKids} alt='Recorrido Kids Desafío Sierras' className='recorridos' /> 
 */}

                
                <div style={{display:'flex', flexDirection:'column', margin:'auto', textAlign:'center'}}>
                <h3>ALTIMETRÍA</h3>
                
                <h4><span role="img" aria-label="emoji corredor">🏃</span>ALTIMETRÍA DÍA 1: 25K</h4>
                <p><span role="img" aria-label="emoji desnivel">📈</span>Desnivel: 1127 metros positivo</p>
                <p><span role="img" aria-label="emoji altura máxima">🔝</span>Altura máxima: 1037 metros</p>
                <p><span role="img" aria-label="emoji altura mínima">⬇</span> Altura mínima: 345 metros</p>

                <h4><span role="img" aria-label="emoji corredor">🏃</span>ALTIMETRÍA DÍA 2: 21K</h4>
                <p><span role="img" aria-label="emoji desnivel">📈</span>Desnivel: 909 metros positivo</p>
                <p><span role="img" aria-label="emoji altura máxima">🔝</span>Altura máxima: 592 metros</p>
                <p><span role="img" aria-label="emoji corredor">⬇</span>Altura mínima: 344 metros</p>

                <h4><span role="img" aria-label="emoji corredor">🏃</span>ALTIMETRÍA DÍA 2: 10K</h4>
                <p><span role="img" aria-label="emoji desnivel">📈</span>Desnivel: 399 metros positivo</p>
                <p><span role="img" aria-label="emoji altura máxima">🔝</span>Altura máxima: 553 metros</p>
                <p><span role="img" aria-label="emoji altura mínima">⬇</span>Altura mínima: 391 metros</p>
                </div>


                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva, por lo que no tendrá premiación ni clasificación. Sí contará con remera de corredor, medalla e hidratación.</p>

               {/*  <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <h4><mark className='mark'>INSCRIPCIÓN ONLINE</mark></h4>
                <p>Los pasos para inscribirse online son:</p>
                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams), colocarlo en su casillero</li>
                    <li>Elegir la distancia</li>
                    <li>Completar los datos personales. Firmar el deslinde virtual y adjuntar el apto médico. Si aún no tenés el apto, podes subirlo hasta el día anterior a la carrera desde el estado de tu inscripción. (Ver apartado “a presentar en acreditación”).</li>
                    <li>Abonar vía transferencia o depósito bancario la primera cuota y compartir el comprobante en la misma web de inscripción de Eventols. (IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 7 días se elimina)</li>
                    <li>Se avisará por mail (siempre revisen correo no deseado porque puede ingresar como spam) cuándo es momento de abonar la segunda cuota. Si no abonan la misma, lo abonado en su primer momento pasará como parte de pago del siguiente precio sin descuento.</li>
                    <div className='contenedorBoton'>
                    <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/desafio-columbia-sierra-de-la-ventana-2024' className='enlaceBoton'>
                    <Button variant="success" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                </div>
                </div>
                </ol> */}
              
{/* 
                <h4><mark className='mark'>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN</mark></h4>
                <p>Les llegará un mail que dice “Inscripción confirmada” desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Primero les llegará uno que dice “comenzaste el proceso de inscripción” <u>el cual NO indica que estás confirmado</u>. Si el mail de confirmación no llega es porque no terminaron la inscripción, indicaron mal su correo o porque está en correo no deseado. Si eso sucede, hay que marcarlo como correo deseado y agregarnos a tu lista de contactos.</p>

                <h3>INSCRIPCIÓN PRESENCIAL</h3>
                <p>Se abona el <b>TOTAL</b> de la carrera únicamente en <b>EFECTIVO</b> en los centros de inscripción.</p>
                <h4>CENTROS DE INSCRIPCIÓN:</h4>
                <ul>
                    <li><u>Aerorunners</u>: Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
                    <li><u>TriSport Necochea</u>: Calle 57, 3043. Tel: 2262-52-6684</li>
                    <li><u>BicyShop Mar del Plata</u>: Av. Independencia 3565. Tel: 0223-474-9816</li>
                    <li><u>La Fe Deportes</u>: Loria 193, Lomas de Zamora. Tel: 11-6069-3133</li>
                    <li><u>Adrogué Outdoors</u>: Av. Mitre 1110, Adrogué. Tel: 4293-6350</li>
                </ul> */}

             {/*    <h3>COSTOS</h3>
                <h4>¡EN DOS PAGOS SIN INTERÉS! UNO AL INSCRIBIRSE Y EL RESTANTE EN ACREDITACIÓN!</h4>
                <ul>
                    <li>DOS DÍAS INDIVIDUAL (25K + 21K) CON SERVICIO DE CAMPAMENTO: <strong>$184.000</strong> en dos pagos sin interés de $92.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>DOS DÍAS INDIVIDUAL (25K + 21K) SIN CAMPAMENTO: <strong>$138.000</strong> en dos pagos sin interés de $69.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>DOS DÍAS EQUIPO (25K + 21K) CON SERVICIO DE CAMPAMENTO: <strong>$368.000</strong> en dos pagos sin interés de $184.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>DOS DÍAS EQUIPO (25K + 21K) SIN CAMPAMENTO: <strong>$276.000</strong> en dos pagos sin interés de $138.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>1 DÍA (DOMINGO) 21K: <strong>$66.000</strong> en dos pagos sin interés de $33.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>1 DÍA (DOMINGO) 10K: <strong>$48.000</strong> en dos pagos sin interés de $24.000, uno por transferencia al inscribirse y el otro en EFECTIVO en acreditación.</li>
                    <li>KIDS (DOMINGO) 1K: <strong>$8.900</strong> pago total.</li>
                   

                    <div className='contenedorBoton'>
                    <div className='botonIntermedio'>
                        <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/desafio-columbia-sierra-de-la-ventana-2024' className='enlaceBoton'>
                        <Button variant="success" size='lg' className='boton'>
                            INSCRIBITE ACÁ
                        </Button>
                        </Link>
                    </div>
                    </div>
                    </ul> */}
               
                 

                <h3 id='cronograma'>CRONOGRAMA GENERAL DEL EVENTO</h3>
               <h4><strong><mark className='mark'>VIERNES 02/10</mark></strong></h4>
               <ul>
                <li><strong>16 a 19 hs:</strong> Acreditación y entrega de kits. Hotel Days Inn de Sierra de la Ventana, ubicado en Drago 130.</li>
               </ul>

               <h4><strong><mark className='mark'>SÁBADO 03/10</mark></strong></h4>
               <ul>
                <li><strong>9 a 13 hs:</strong> Acreditación y entrega de kits con prioridad para la modalidad 2 días: Hotel Days Inn de Sierra de la Ventana.</li>
                <li><strong>9 a 17 hs:</strong> Acreditación y entrega de kits modalidad 1 día: 21K, 10K y Kids. Hotel Days Inn Sierra de la Ventana.</li>
                <li><strong>13:45 hs:</strong> Charla técnica modalidad 2 días en el arco de largada. Reserva Natural Sierras Grandes, Sierra de la Ventana, Tornquist.</li>
                <li><strong>14 hs:</strong> Largada de la modalidad de 2 días: 25K. Reserva Natural Sierras Grandes.</li>
                <li><strong>20 a 21:30 hs:</strong> Cena en el campamento de la Reserva Natural Sierras Grandes.</li>
               </ul>

               <h4><strong><mark className='mark'>DOMINGO 04/10</mark></strong></h4>
               <ul>
                <li><strong>7 a 8:30 hs:</strong> Desayuno en el campamento de Reserva Natural Sierras Grandes.</li>
                <li><strong>9:45 hs:</strong> Charla técnica en el arco de largada. Reserva Natural Sierras Grandes.</li>
                <li><strong>10 hs:</strong> Largada 2 días + 1 día: 21K y 10K. Reserva Natural Sierras Grandes.</li>
                <li><strong>13:30  hs:</strong> Largada Kids (horario aproximado). Reserva Natural Sierras Grandes.
                </li>
                <li><strong>14 / 14:30 hs:</strong> Premiación (horario aproximado). Reserva Natural Sierras Grandes.</li>
               </ul>

               <h3>ESTACIONAMIENTO</h3>
               <p><strong><u>No estará a cargo de FC Producciones.</u></strong> Se cobrará un ticket para estacionar (para quienes no contrataron el campamento) dentro de la Reserva Natural Sierras Grandes. <strong>La recaudación va directamente para colaborar con los viajes de estudio del ciclo superior de la EEST N.º 1 de Tornquist. Pueden comprarlo en la acreditación o al llegar al lugar.</strong>
               </p>

               <h3>AVISO DE NO SEÑAL 3G/4G/5G</h3>
               <p>Dentro del campo privado donde se realizará el evento no hay señal 3g, 4g ni 5g. Si bien habrá antenas starlink, recomendamos contar con efectivo por si quieren adquirir productos de los stands o por cualquier otro motivo.</p>

               <h3 id='reglamento'>REGLAMENTO DESAFÍO SIERRAS GRANDES</h3>
               <p>La organización controlará el cumplimiento del reglamento por parte de los competidores y decidirá sobre cualquier tema que tenga que ver con la carrera. Los corredores deberán remitirse al mismo ante cualquier duda sobre temas técnicos, de circuito, competencia, clasificaciones y demás.</p>
               <ul>
                <li>La participación en la carrera implica su responsabilidad por los datos suministrados en la ficha de inscripción, su aceptación plena del reglamento, bases y condiciones del evento, y el pago de la inscripción.</li>
                <li>La organización podrá impedir que un participante continúe en la competencia en caso de que el staff médico lo aconseje.</li>
                <li>La organización podrá realizar modificaciones de distancias, recorridos y horarios por inclemencias climáticas, de seguridad u otros factores que impidan su normal desarrollo. Ya se encuentra preestablecido un recorrido plan b por inconvenientes de clima, en el caso de ser viable.</li>
                <li>Además, podrá suspender, cancelar o reprogramar el evento por los mismos motivos.</li>
                <li>Tales decisiones no darán derecho a reclamo alguno hacia la organización, sponsors o staff médico.</li>
                <li>La decisión será tomada en función de las circunstancias y comunicada oportunamente a los participantes.</li>
               </ul>


               <h4><mark className='mark'>ABANDONO</mark></h4>
               <p>En caso de abandono, el competidor tiene la obligación indelegable de avisar a la organización. El aviso deberá ser realizado únicamente en los puestos de asistencia, en la largada o llegada. Los banderilleros o personal fuera de estos lugares no están autorizados a registrar el aviso de abandono. Es muy importante dar aviso de abandono, pues de lo contrario el participante se presumirá extraviado y generará inconvenientes evitables.</p>


                <h4><mark className='mark'>IMPORTANTE - CORTES</mark></h4>
                <p>Las distancias no tendrán tiempo de corte, salvo que la organización considere hacerlo por cuestiones ajenas y/o de seguridad del corredor, como ser el horario, siendo únicamente para beneficio y resguardo del mismo. Además, recordamos que todas las modalidades son carreras y no trekking, es decir, no son caminatas.</p>


                <h4><mark className='mark'>RECLAMOS</mark></h4>
                <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>


                <h4><mark className='mark'>APTO MÉDICO</mark></h4>
                <p>El apto médico debe cargarse en la inscripción y el mismo debe ser aprobado. De no hacerlo, no podrá retirar kit ni participar del evento.</p>
                <p>El apto médico que se debe cargar en la inscripción tiene que tener una vigencia de 1 año a partir de la fecha en que fue realizado el estudio. El documento a cargar debe mostrar claramente: tus datos personales, la fecha del apto y la firma con sello del médico.</p>
                <p>La validación del apto médico será realizada por la organización.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>
                <p>Podés descargar el modelo del apto médico y presentarlo a tu médico para que lo complete y luego lo puedas cargar o subir el realizado por él.</p>


                <h4><mark className='mark'>CATEGORÍAS:</mark></h4>
                <p>Las categorías pueden modificarse en caso de no completar el cupo mínimo de 6 corredores en la misma a 45 días antes de la carrera.</p>


                <h4><mark className='mark'>EL DORSAL DEBE ESTAR SIEMPRE VISIBLE</mark></h4>
                <p>Es de suma importancia que, durante todo el recorrido, el dorsal esté a la vista. Se debe ver siempre, tanto para la seguridad del corredor, para la clasificación como para luego poder adquirir las fotos, es decir, tener fotos disponibles. El dorsal no debe estar tapado por ropa, por mochilas de hidratación ni por cualquier objeto que imposibilite su fácil lectura.</p>



            <h3>ELEMENTOS OBLIGATORIOS PARA LA CARRERA</h3>
               <ul>
                <li><strong>NÚMERO DE CORREDOR con CHIP incluido</strong>.<br></br>
                Será provisto por la organización y deberá estar visible en todo momento.</li>
                <li><strong>APTO MÉDICO. Cargar en la web o entregar en la acreditación</strong></li>
                <li><strong>REMERA OFICIAL (Provista por la organización)</strong></li>
                <li><strong>HIDRATACIÓN PROPIA</strong>. Más allá de la provista por la organización</li>
               </ul>

               <h3>ELEMENTOS OBLIGATORIOS PARA EL CAMPAMENTO</h3>
                <ul>
                    <li>Carpa</li>
                    <li>Bolsa de dormir</li>
                    <li>Platos, cubiertos y vaso térmico</li>
                    <li>Linterna frontal</li>
                </ul>

               <h3>ELEMENTOS RECOMENDADOS</h3>
               <ul>
                <li>Bastones</li>
                <li>Chaleco o mochila con hidratación</li>
                <li>Sombrero o gorra</li>
                <li>Campera de lluvia</li>
                <li>Dos pares de zapatillas</li>
                <li>Abrigo</li>
                <li>Ojotas</li>
                <li>Protector Solar</li>
                <li>Toalla</li>
                <li>Silbato</li>
                <li>Kit de primeros auxilios</li>
                <li>Toallitas higiénicas</li>
                <li>Polainas</li>
                <li>Repelente para mosquitos</li>
               </ul>


                <h4><mark className='mark'>POLÍTICA DE PAGO DE CUOTAS</mark></h4>
                <p>Si te inscribiste en las fechas donde se paga mediante 3 cuotas sin interés (una al inscribirse, la segunda a los 30 días y la tercera a los 60 días de inscribirse) debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</p>

                <h3><mark className='mark'>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</mark></h3>
                <p><strong>LEER CON ATENCIÓN:</strong></p>
                <p>Las inscripciones <strong>NO tienen devolución.</strong></p>
               
              
                <h4><u>TRANSFERENCIA A OTRO CORREDOR</u></h4>
                <p>Hasta el viernes 18/09, inclusive, se podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Deberá tener en cuenta que solo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
                <p>En caso de no avisar con ese tiempo de anticipación, se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro, entre otras cuestiones.</p>


                <h4><u>TRANSFERENCIA POR NO PODER PARTICIPAR</u></h4>
                <p>Hasta el viernes 18/09, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
              
    
               <h3><mark className='mark'>CAMBIO DE DISTANCIA O DE OTRO TIPO</mark></h3>
               <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
               <ol>
                <li>Solo se considerarán aquellos casos en que se solicite al mail de la organización.</li>
                <li>A partir del lunes 21/09 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
                <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción.</li>
                <li>Si el cambio es a una distancia menor, NO se le devolverá dinero.</li>
               </ol>

                <h4><mark className='mark'>NÚMERO DE CORREDOR</mark></h4>
                <p>Disponible una semana antes del evento desde su inscripción.</p>

                <h4><mark className='mark'>DERECHOS</mark></h4>
                <p>La organización se reserva el derecho de cualquier modificación que surja durante la carrera.</p>

                <h4><mark className='mark'>MARCACIÓN</mark></h4>
                <p>Deberás guiarte por las cintas de la organización para poder confirmar que estás por la senda o circuito correcto. Siempre verás la próxima cinta. Seguir las marcaciones y no a los corredores. Si en algún momento no ves las cintas de la organización, deberás volver hasta el punto donde avistaste la última.</p>
                <p><strong>ELEMENTOS DE MARCACIÓN DE RECORRIDO:</strong></p>
                <ul>
                    <li>Cintas blancas de FC Producciones a lo largo de todo el recorrido</li>
                    <li>Banderas de la organización y de los sponsors</li>
                    <li>Cartelería con números y flechas</li>
                    <li>Banderilleros en puntos claves</li>
                </ul>


                <h4><mark className='mark'>PREMIACIÓN</mark></h4>
                <p>Todos los participantes que finalicen el recorrido de forma reglamentaria, recibirán medalla finisher.</p>
                <p>Se premiará cada categoría en sus respectivos primeros 3 puestos, tanto hombre como mujer. También habrá mención para las generales (hombre y mujer) de cada distancia.</p>
                <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización.</p>
                <p>Los premios no tienen cambio.</p>
                <p><strong><u>La presencia en la premiación es obligatoria. Toda persona que no se encuentre presente en ese momento, no podrá reclamar su premio, perdiendo el beneficio.</u></strong></p>

               {/*  <h4><mark className='mark'>ENVÍO DE PREMIOS</mark></h4>
                <p>Toda persona que no se encuentre presente al momento de la premiación y le corresponda premio, podrá solicitarlo vía mail y retirar únicamente por LOMAS DE ZAMORA.</p> */}

                <h4><mark className='mark'>TOMA DE TIEMPO Y CLASIFICACIONES</mark></h4>
                <p>La toma de tiempo y clasificación será electrónica con chip. Los participantes deberán utilizar el dorsal (junto con el chip) obligatoriamente durante la carrera por control y seguridad, para poder ser clasificados y tener sus respectivas fotos. El dorsal siempre tiene que estar VISIBLE.</p>
                <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
                <p>Los resultados se publicarán en esta página, www.fcproducciones.com.ar, el mismo día a la noche o el día posterior al evento.</p>

                <h4><mark className='mark'>MEDIO AMBIENTE</mark></h4>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso:</p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y en el resto de lugares. Lo que llevás a la montaña, vuelve con vos</li>
                    <li>Respetar la flora y fauna</li>
                    <li>Solo dejar la huella de tu calzado y no de tu basura</li>
                </ul>
                <p><strong><mark className='mark'>NO SE PUEDE HACER FUEGO DENTRO DE LA RESERVA NATURAL SIERRAS GRANDES. POR FAVOR NO NOS COMPROMETA.</mark></strong></p>

                <div className='contenedorBoton'>
                    <div className='botonIntermedio'>
                        <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/desafio-sierra-de-la-ventana-2026' className='enlaceBoton'>
                        <Button variant="success" size='lg' className='boton'>
                            INSCRIBITE ACÁ
                        </Button>
                        </Link>
                    </div>
                    </div>
 
        </section>
    );
}

export default ElDesafio;