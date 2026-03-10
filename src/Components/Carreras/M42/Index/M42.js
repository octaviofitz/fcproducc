import React from 'react';
import Ratio from "react-bootstrap/Ratio";
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

/* Imágenes */
import m42General from '../../../../Img/m42/flyerM42.webp';
import Remera from '../../../../Img/m42/remera.webp';
import Productos from '../../../../Img/m42/productos.webp';
import km50 from '../../../../Img/m42/50k.webp'
import km42 from '../../../../Img/m42/42k.webp'
import km34 from '../../../../Img/m42/34k.webp'
import km25 from '../../../../Img/m42/25k.webp'
import km15 from '../../../../Img/m42/15k.webp'
import km10 from '../../../../Img/m42/10k.webp'
import Hidratacion10KM from '../../../../Img/m42/hidratacion10k.webp'
import Hidratacion25KM from '../../../../Img/m42/hidratacion25k.webp'
import Hidratacion34KM from '../../../../Img/m42/hidratacion34k.webp'
import Hidratacion42KM from '../../../../Img/m42/hidratacion42k.webp'
import Hidratacion50KM from '../../../../Img/m42/hidratacion50k.webp'



/* Documentos */
import AutorizacionMenores from '../../../../PDF/autMenores.pdf';
/* import Deslinde from '../../../../PDF/deslinde.pdf'; */
import AptoMedico from '../../../../PDF/aptoMedico.pdf'

import '../Index/m42.css'

function M42() {

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
        <section className='m42' id='m42'>

            <h2 className='titulo'>MARATON DE MONTAÑA M42</h2>
            <div className='containerFlyerDescripcion'>
                <div>
                    <img src={m42General} alt='Maratón M42' className='flyer' />
                        </div>

                            <div>           
                                 <p className='descripcion'>El Maratón de montaña M42 es, desde hace años, el clásico de trail y ultra trail de la comarca de Tornquist, provincia de Buenos Aires. Con más de 1.800 corredores en cada edición, la fiesta que se vive es total y muy esperada por los participantes.</p>
                                    <p className='descripcion'>Con la edición N°14 llevaremos tu cuerpo al extremo en un recorrido que mezcla la exigencia con el disfrute en un contexto natural único en Villa Ventana y San Andrés de la Sierra, dos paraísos.</p>
                                    <p className='descripcion'>Paisajes inolvidables, cruces de arroyos, un histórico hotel abandonado por donde pasaron Nazis, senderos, bosques y mucho trail, sumado a una compañía única de los demás corredores y del staff de FC Producciones que harán que sea un fin de semana que no olvidarás jamás.</p>
                                    <p className='descripcion'>50K, 42K y 34K el sábado 30 de mayo y 25K, 15K, 10K y las distancias KIDS de 3K y 1K el domingo. Sí,  LA GRAN NOVEDAD de este 2026 son los ¡15 kilómetros! nuestra nueva distancia. Si querés un poco más de exigencia, vas a poder correr los dos días.</p>
                                    <p className='descripcion'>Estas son las 8 modalidades que harán que te sea imposible venir tan solo por un año, vas a querer, como muchos habitués del M42, volver a participar, pero elevando la distancia en la próxima edición.</p>
                                    <p className='descripcion'>Agendá la fecha de la edición N°14: 30 y 31 de mayo de 2026.</p>                                      
                                  {/*   <ul className='redes'>
                    
                                        <li><Link to='https://www.instagram.com/MaratonM42/' target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                         <li><Link to='https://www.facebook.com/MaratonM42/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i> </Link></li>
                                                 </ul> */}
                                        </div>
                                             </div>

                <div className='botones'>
                <Button variant="info" size='lg' className='boton' onClick={scrollCartas}><Link to='#cartas'>Cartas</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollInscripcion}><Link to='#inscripcion'>Inscripción</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollCronograma}><Link to='#cronograma'>Cronograma</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollReglamento}><Link to='#reglamento'>Reglamento</Link></Button>
                <Button variant="info" size='lg' className='boton'><Link to='/m42/alojamientos'>Alojamientos</Link></Button>
                <Button variant="info" size='lg' className='boton'><Link to='/m42/resultados'>Resultados y fotos 2025</Link></Button> 
                 {/* <Button variant="info" size='lg' className='boton'><Link to='/m42/fotos2022'>Fotos 2023</Link></Button> */}
                </div>


                <article className='video'>
                <Ratio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/__ZwNgk0rxU?si=fAez1gJMw3vws9nL"
              title="Carrera Alecec"
            ></iframe>
          </Ratio>              
                </article>

                <h4 style={{textAlign:'center', marginTop:'4rem'}}><mark className='mark'>INSCRIPCIONES ABIERTAS</mark></h4>

        
                <h3 id='cartas'>Cartas</h3>


                <h4>DATOS GENERALES</h4>
                <p><strong>Carrera:</strong> Maratón de montaña M42 edición N°14.</p>
                <p><strong>Fechas:</strong> 30 Y 31 de mayo de 2026.</p>
                <p><strong>Lugares:</strong> San Andrés de la Sierra y Villa Ventana. Todo ubicado en la comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><strong>Concepto:</strong> Carrera de trail y ultra trail running.</p>
                <p><strong>Distancias:</strong> 50K, 42K, 34K, 25K, 15K (nuevos), 10K y KIDS.</p>
                <p><strong>Sábado 30 de mayo de 2026: 50K, 42K y 34K (Salida desde San Andrés de la Sierra, llegada a la Plaza Salerno en Villa Ventana)</strong></p>
                <p><strong>Domingo 31 de mayo de 2026: 25K, 15K, 10K, 3K KIDS Y 1K KIDS (Salida y llegada en Estancia las Vertientes).</strong></p>
                <p><strong>Modalidad:</strong> Individual</p>

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
                <p>*Las edades serán computadas a la fecha de carrera.</p>
                <p>*Las categorías pueden modificarse en el caso de que se inscriba un grupo grande de corredores en la modalidad o no se llegue a la cantidad necesaria.</p>
                <p>*La edad para poder correr el M42 es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr el M42. De lo contrario, no podrá participar.</p>
               
                <div className='contenedorBoton'>
                <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>

                <h4>LA INSCRIPCIÓN INCLUYE</h4>
                <ul>
                    <li>Derecho a participar.</li>
                    <li>Servicio de hidratación durante el recorrido.</li>
                    <li>Kit de corredor.</li>
                    <li>Remera técnica de corredor.</li>
                    <li>Chip de control para clasificación.</li>
                    <li>Medalla finisher.</li>
                    <li>Seguro de corredor.</li>
                    <li>Certificado finisher.</li>
                    <li>Servicio de rescate.</li>
                    <li>Servicio de salud.</li>
                    <li>Premiación ganadores de categoría.</li>
                    <li>Premiación ganadores de la general.</li>
                </ul>

                <h3>REMERA</h3>
                 <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 14. El talle de remera elegido al momento de inscribirse no tiene cambio.</p>
                 {/* <img src={Remera} className='img' alt='Remera M42' />  */}

                 {/* <h3>PRODUCTOS OFICIALES</h3>
                 <p>Si querés tener el mejor y más completo outfit para correr por las sierras de Villa Ventana, comprá por la web y retirá con tu kit.</p>
                 <p><strong>¿Quiénes pueden comprarlos?</strong> Aquellos que ya estén inscriptos o quienes se vayan a inscribir al M42 2025.</p>
                 <p><strong>¿Cómo pueden hacerlo?</strong> Para acceder al carrito de compras, debés ingresar desde tu estado de inscripción al cual llegás vía mail recibido de Eventols. Los que se vayan a inscribir ya lo tendrán disponible al momento de la inscripción</p>
                 <p><strong>Paso a paso si ya estás inscripto:</strong> vas al mail de eventols, clic en VER MI ESTADO (te lleva a la web de eventols) + EXTRAS + AGREGAR PRODUCTO DESEADO + CONFIRMAR + PAGAR + ADJUNTAR COMPROBANTE (como las cuotas de la inscripción) + LISTO RETIRÁS CON TU KIT</p>
                 <img src={Productos} className='img' alt='Productos M42' />  */}
                

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva, por lo que no tendrá premiación ni clasificación. Sí contará con <strong>remera de corredor, hidratación y medalla finisher</strong>.</p>
                <p><strong>La carrera tendrá dos distancias:</strong></p>
                <ul>
                    <li><strong>1K para niños sin límite de edad</strong></li>
                    <li><strong>3K para niños de entre 10 y 15 años</strong></li>
                </ul>

                <p><b>Los padres o acompañantes podrán acompañar durante el recorrido de ser necesario. Ambas distancias se realizan de manera controlada por el staff y en grupo. Buscamos que sea recreativa, pero a la vez pedagógica con explicación de nociones básicas del trail.</b>.</p>

                
                
                <h3>TRASLADO 50, 42 Y 34K</h3>
                <p>Quienes corran 50K, 42K o 34K y no tengan cómo llegar a la largada, pondremos un traslado desde Plaza Salerno (Villa Ventana) hasta el Complejo Puesta del Sol (lugar de largada) el sábado 30 de mayo.</p>
                <p>El micro saldrá a las 7:45 de la mañana puntual desde Plaza Salerno. Deben estar 10 min antes.</p>
                <p>El costo se define próximamente.</p>
                <p>Deben confirmar la reserva con anticipación para obtener su lugar en el traslado. En caso de reservar y luego no utilizarlo, avisar a la organización.</p>
                {/* <h4><mark className='mark'>INFO PRÓXIMAMENTE</h4> */}


                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>
                
                 <h4><mark className='mark'>VIERNES 29 DE MAYO</mark></h4>
                <p>Lugar: La Gran Cabaña, Belisario y Picaflor, Villa Ventana, Provincia de Buenos Aires.</p>
                <p><strong>Horario: De 11 a 19 hs.</strong></p>
                <p>*El día y horario es todas las distancias (50K, 42K, 34K, 25K, 15K, 10K y Kids)</p>
                
                 <h5>¿CÓMO LLEGAR A LA GRAN CABAÑA?</h5>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3140.386906552386!2d-61.929315!3d-38.084657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf2d093d0f4fd%3A0xad4d33cb6aa65910!2sLa%20Gran%20Caba%C3%B1a%20-%20Hotel%20Spa%20%26%20Restaurante!5e0!3m2!1ses-419!2sar!4v1740175342495!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa Plaza Salerno'></iframe>
               
                <h4><mark className='mark'>SÁBADO 30 DE MAYO</mark></h4>
                <p style={{textDecoration:'underline'}}>ATENCIÓN: *El día y horario es únicamente para las distancias del domingo <strong>(25K, 15K, 10K y KIDS)</strong>. Lugar: Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
                <ul>
                    {/* <li>Horario 50K, 42K y 34K: 6:30 a 7:30 am</li> */}
                    <li><strong>Horario 25K, 15K y 10K:</strong> de 10 a 18 hs</li>
                </ul>
                {/* <p>Lugar: Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p> */}
               
           

                <h5>¿CÓMO LLEGAR A LA PLAZA SALERNO?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100532.41661521242!2d-61.93467999999999!3d-38.05552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf3c631137e11%3A0x652387499a504212!2sPlaza%20Salerno!5e0!3m2!1ses-419!2sar!4v1682008713151!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa Plaza Salerno'></iframe>

                <h4><mark className='mark'>DOMINGO 31 DE MAYO</mark></h4>
                <p>ATENCIÓN: Los horarios serán respetados por distancias. No acreditaremos a nadie fuera de su horario correspondiente.</p>
                <p>Lugar: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana).</p>
                <ul>
                    <li><strong>Horario 25K: 6.30 a 7.30 am</strong></li>
                    <li><strong>Horario 15K: 7.30 a 8.30 am</strong></li>
                    <li><strong>Horario 10K: 8.30 a 9.30 am</strong></li>
                </ul>
{/*                 <p><strong>POR RAZONES OPERATIVAS, RECOMENDAMOS NO ESPERAR AL DOMINGO PARA RETIRAR. EL KIT PUEDE RETIRARLO OTRA PERSONA (VER EL APARTADO “RETIRO DE KITS POR TERCEROS”).</strong></p>
 */}
                <h5>¿CÓMO LLEGAR A LA ESTANCIA LAS VERTIENTES?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6281.567071671955!2d-61.943919!3d-38.075422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec8cd2287f4b2d%3A0xffaacc594c32d622!2sEstancia%20Las%20Vertientes!5e0!3m2!1ses!2sus!4v1682008795355!5m2!1ses!2sus" width="600" height="450" className='mapas' title='Mapa Las Vertientes' loading="lazy"></iframe>
 


               {/*  <h4>A PRESENTAR EN ACREDITACIÓN</h4>
                <p>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR 
                VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</p> */}

              {/*   <h5>De completar el proceso de inscripción online como corresponde (esto es: completar los datos, firmar el deslinde ONLINE y adjuntar el apto físico) NO DEBERÁN PRESENTAR NINGUNA DOCUMENTACIÓN EN ACREDITACIÓN. Solo presentarse con el DNI. </h5> */}
                
              {/*   <p>De lo contrario, deberán llevar para acreditarse y retirar su kit la siguiente documentación:</p>
                <ol>

                    <li>DNI</li>
                    <li>APTO MÉDICO</li>
                    
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                         <Button disabled variant="info" size='lg' className='boton'><Link target='_blank' download='Apto Médico' to={AptoMedico}>DESCARGAR APTO MÉDICO</Link></Button>
                          </div>
                          </div>

                    <li>DESLINDE DE RESPONSABILIDAD (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>

                    <li>AUTORIZACIÓN MENOR DE EDAD.</li>
                    <div className='contenedorBoton'>
                <Button disabled variant="info" size='lg' className='boton'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>

                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>  
             <Button variant="info" size='lg' className='boton' id='botonesIntermedios'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                             </div>
                             </div> 

                </ol> */}

                <h3>RETIRO DE KITS POR TITULAR</h3>
                <p>Para retirar el kit deberán presentarse dentro de los horarios de acreditación correspondientes con el DNI físico.</p>
                <p>La organización sólo entregará el kit si el titular tiene firmado el deslinde de responsabilidad virtual y subido/confirmado el apto médico de forma online.</p>
                <p>En caso de no tenerlo hecho, deben completar los pasos en el momento (no recomendado)</p>


                <h3>RETIRO DE KITS POR TERCEROS</h3>
                <p>Si el participante titular de la inscripción firmó el deslinde virtual y subió el apto médico a su estado de Eventols (y está confirmado)  el tercero deberá presentar el DNI o la fotocopia del titular. De no contar con estos requisitos, la organización NO entregará el kit.</p>
               {/*  <ol>
                    <li>FOTOCOPIA DEL DNI DEL TITULAR</li>
                    <li>FICHA DE INSCRIPCIÓN FIRMADA POR EL TITULAR</li>
                    <li>APTO FÍSICO DEL TITULAR.</li>
                </ol>
                <p><strong>De no contar con estos requisitos la organización NO entregará el Kit.</strong></p> */}
                            
                
                <h3>APTO MÉDICO</h3>
                <p>El apto médico debe cargarse en la web a la hora de inscribirse. El apto médico tiene que tener <strong>vigencia de 1 año</strong> a partir de la fecha que fue realizado el estudio. El documento a cargar debe mostrar claramente: tus datos personales, la fecha del apto y la firma con sello del médico.</p>
                <p>La validación del apto médico será realizada por la organización.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>
                <p>Podés descargar nuestro modelo de  apto y presentarlo a tu médico para que lo complete o cualquier formato.</p>
                
                <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                         <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Apto Médico' to={AptoMedico}>DESCARGAR APTO MÉDICO</Link></Button>
                          </div>
                          </div>


                <h3>LARGADAS: LUGARES Y HORARIOS</h3>

                <h4>SÁBADO 30 DE MAYO | 50K, 42K Y 34K</h4>
                <p><strong>- LARGADA</strong>: Puesta del Sol Houses & Nature (Calle Gnena Kena y Chila, San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires).</p>
                <p><strong>- HORARIO</strong>: 9 am</p>
                <p><strong>- LLEGADA</strong>: Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
                <h5>¿Cómo llegar a Puesta de Sol?</h5>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.2079439959557!2d-62.091638599999996!3d-38.0655381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec61c416455dcb%3A0x57970baf20e534ec!2sPuesta%20del%20Sol%20Houses%20%26%20Nature!5e0!3m2!1ses-419!2sar!4v1737142048342!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa Puesta de Sol'></iframe>


                <h4>DOMINGO 31 DE MAYO | 25K, 15K, 10K y KIDS</h4>
                <p><strong>LARGADA Y LLEGADA</strong>: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana)</p>
                <p><strong>HORARIOS</strong></p>
                <ul>
                    <li>25K: 8 am</li>
                    <li>15K: 9 am</li>
                    <li>10K: 10 am</li>
                    <li>KIDS: 12/12.30hs (horario aproximado, puede modificarse)</li>
                </ul>
                <h5>¿Cómo llegar a Estancia Las Vertientes?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6281.567071671955!2d-61.943919!3d-38.075422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec8cd2287f4b2d%3A0xffaacc594c32d622!2sEstancia%20Las%20Vertientes!5e0!3m2!1ses!2sus!4v1682008795355!5m2!1ses!2sus" width="600" height="450" className='mapas' title='Mapa Las Vertientes' loading="lazy"></iframe>

 
                <h3><span role="img" aria-label="Emoji de montaña">⛰️</span>RECORRIDOS 50k, 42K y 34K<span role="img" aria-label="Emoji de montaña">⛰️</span></h3>
            
                 <p>Destildar la distancia que no se quiera ver</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 50 y 42K'></iframe>


                  {/*  <div className='containerAltimetria'>
                     <div className='altimetriaIMG'>
                <img src={km50} alt='Altimetria 50kM Los Alerces' className='img' />
                </div> 
                </div>    */}
 
                 <div className='containerAltimetria'>
                <div className='altimetriaIMG'>
                 <img src={km50} alt='Altimetria 50kM Los Alerces' className='img' /> 
                </div> 
                 <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 50K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 1.950 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 944 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 390 msnm</p>
                </div> 
                </div>
                <br></br>

               {/*  <img src={Hidratacion50KM} alt='Hidratación M42 50KM' className='img' />  */}


                <br></br>
                
                <div className='containerAltimetria'>
                <div className='altimetriaIMG'>
                 <img src={km42} alt='Altimetria 42kM Los Alerces' className='img' /> 
                </div> 
                 <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 42K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 1.600 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 944 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 390 msnm</p>
                </div> 
                </div>
                <br></br>
                {/* <img src={Hidratacion42KM} alt='Hidratación M42 42KM' className='img' />  */}


                <br></br>

                <div className='containerAltimetria'>
                <div className='altimetriaIMG'>
                 <img src={km34} alt='Altimetria 42kM Los Alerces' className='img' /> 
                </div> 
                 <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 34K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 855 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 944 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 390 msnm</p>
                </div> 
                </div>
                <br></br>
               {/*  <img src={Hidratacion34KM} alt='Hidratación M42 34KM' className='img' />  */} 


                <h3><span role="img" aria-label="Emoji de montaña">⛰️</span>RECORRIDOS 25K, 15K y 10K<span role="img" aria-label="Emoji de montaña">⛰️</span></h3>
            
                 <p>Destildar la distancia que no se quiera ver</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 25 y 10K'></iframe> 

                {/* <h4 style={{textAlign:'center'}}><mark className='mark' >RECORRIDO 15K PRÓXIMAMENTE</mark></h4> */}

                 <div className='containerAltimetria'>
                 <div className='altimetriaIMG'>
                <img src={km25} alt='Altimetria 25kM Los Alerces' className='img' />
                </div>  
                 <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 25K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 616 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 548 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇ </span>Altura mínima: 369 msnm</p>
                </div> 
                </div>
                <br></br>
               {/*  <img src={Hidratacion25KM} alt='Hidratación M42 25KM' className='img' />  */}



               <div className='containerAltimetria'>
                  <div className='altimetriaIMG'>
                <img src={km15} alt='Altimetria 15kM Los Alerces' className='img' />
                </div>  
                <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 15K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 261 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 548 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 369 msnm</p>
                </div> 
                </div>
                <br></br>
                {/* <img src={Hidratacion10KM} alt='Hidratación M42 10KM' className='img' />    */}

                <br></br>

                <div className='containerAltimetria'>
                  <div className='altimetriaIMG'>
                <img src={km10} alt='Altimetria 10kM Los Alerces' className='img' />
                </div>  
                <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>ALTIMETRÍA 10K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: 261 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 548 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 369 msnm</p>
                </div> 
                </div>
                <br></br>
               {/*  <img src={Hidratacion10KM} alt='Hidratación M42 10KM' className='img' />    */}
 
                <br></br>
                <h4>RECORRIDOS INTERACTIVOS 50 Y 42K</h4>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 50 y 42K'></iframe>

                <br></br>
                <h4>RECORRIDOS INTERACTIVOS 25 Y 10k</h4>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 25 y 10K'></iframe>
                 


                <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <p><b>DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</b></p>
                
                <h4>INSCRIPCIÓN ONLINE</h4>
                <p>Los pasos para inscribirse online son:</p>

                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams más abajo), colocarlo en su casillero.</li>
                    <li>Elegir la distancia.</li>
                    <li> Completar los datos personales. Firmar el deslinde virtual y adjuntar el apto médico. Si aún no tenés el apto, podes subirlo hasta el día anterior a la carrera desde el estado de tu inscripción. (Ver apartado “a presentar en acreditación”).</li>
                    <li>Abonar la primera cuota vía transferencia o depósito bancario y <strong>subir el comprobante</strong>. (IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 5 días se elimina).</li>
                    <li>Una vez realizados todos los pasos, les llegará un mail de confirmación desde eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. <strong>ES DE SUMA IMPORTANCIA QUE INDIQUEN CORRECTAMENTE EL MAIL</strong>.</li>
                </ol>

                
           
        <div className='contenedorBoton'>
                <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/m42-maraton-de-montana-2026' className='enlaceBoton'>
                    <Button variant="info" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                        </div>
                             </div>
      
   
                
                <h5>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN:</h5>
                <p>Les llegará un mail que dice “Inscripción confirmada” desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Primero les llegará uno que dice “comenzaste el proceso de inscripción” el cual NO indica que estás confirmado. Si el mail de confirmación no llega es porque no terminaron la inscripción, indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>

                <h4>INSCRIPCIÓN PRESENCIAL</h4>
                <p>Se abona el TOTAL de la carrera únicamente en EFECTIVO en los centros de inscripción.</p>
                <h5>CENTROS DE INSCRIPCIÓN:</h5>
                <ul>
                    <li><strong>Aerorunners</strong>: Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
                    <li><strong>TriSport Necochea</strong>: Calle 57, 3043. Tel: 2262-52-6684</li>
                    <li><strong>BicyShop Mar del Plata</strong>: Av. Independencia 3565. Tel: 0223-474-9816</li>
                    <li><strong>La Fe Deportes</strong>: Loria 193, Lomas de Zamora. Tel 11-6069-3133</li>
                    <li><strong>Adrogué Outdoors</strong>: Av. Mitre 1110, Adrogué. Tel 4293-6350</li>
                </ul>

                <h4>DESCUENTO TEAMS DE ENTRENAMIENTO</h4>
                <p>10% de descuento en cada inscripción y un cupo liberado para 1 profesor/a. La condición es ser 10 participantes o más.</p>
                <p>Para obtener los beneficios: primero el profesor/a debe solicitarlo a nuestro WhatsApp (+549-11-5135-6267) o al mail info@fcproducciones.com.ar, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento.</p>
                <p><strong>Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</strong></p>

               
                <h3>COSTOS</h3>
                <h4><strong><s>PROMO LANZAMIENTO 150 CUPOS: COMPLETA</s></strong></h4>
                   <h4><strong><s>ETAPA 1: COMPLETA</s></strong></h4>
                   <h4><strong>ETAPA 2</strong></h4>
                <ul>
                    <li><strong>50K: $252.000 a pagar en 3 cuotas de $84.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>42K: $222.000 a pagar en 3 cuotas de $74.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>34K: $192.000 a pagar en 3 cuotas de $64.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>25K: $174.000 a pagar en 3 cuotas de $58.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>15K: $147.000 a pagar en 3 cuotas de $49.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>10K: $123.000 a pagar en 3 cuotas de $41.000 por transferencia bancaria.</strong> La primera al inscribirse, la segunda a los 30 días y la última a los 60 días de inscribirse.</li>
                    <li><strong>KIDS 3K (de 10 a 15 años): $23.000</strong> pago total al inscribirse por transferencia bancaria.</li>
                    <li><strong>KIDS 1K (sin límite de edad): $17.000</strong> pago total al inscribirse por transferencia bancaria.</li>
                </ul> 
                <p><b>Si tenés tu código de descuento por running team debés ponerlo cuando comenzás la inscripción (al seleccionar la distancia) y se hará el 10% de descuento sobre el total.</b></p>
                <p>Cuando los cupos de la etapa se agoten, se cerrarán las inscripciones y cambiará el costo.</p>

                <p>Si te inscribiste en las fechas donde el pago es en tres pagos sin interés (uno al inscribirse, el segundo a los 30 días y el tercero a los 60 días de inscribirse) debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</p>    
 
                 {/*  <h5 style={{textAlign:'center'}}>¡PRIMERA ETAPA AGOTADA!</h5>
                 <h5 style={{textAlign:'center', marginBottom: '3rem'}}>Pronto abriremos la segunda etapa.</h5>   */}

<div className='contenedorBoton'>
                <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/m42-maraton-de-montana-2026' className='enlaceBoton'>
                    <Button variant="info" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                        </div>
                             </div>
              
              <h3>DOS DÍAS DE COMPETENCIA CON DESCUENTO ESPECIAL</h3>
              <p>Para aquellos corredores de 50K, 42K o 34K que quieran correr también el domingo, les otorgamos un 20% de descuento en su segunda inscripción de 25K, 15K o 10K.</p>
              <p><strong>Deberán solicitar el código de descuento online por mail info@fcproducciones.com.ar para inscribirse en el día domingo de competencia.</strong></p>
            <p><strong>CONSIDERACIONES:</strong></p>
                <p>*No es acumulable con otros descuentos.</p>
                <p>*La inscripción es únicamente online y de forma previa, no se inscribirá el mismo día.</p>
                <p>*No se puede dar de baja ni modificar nada a partir del lunes 18/05/2026.</p>
                <p>*Se inscribe en dos carreras y realiza dos acreditaciones, dos largadas, dos premiaciones, todo por separado.</p>
                <p>*No se harán devoluciones. (Ver política de devolución de inscripciones en reglamento)</p>


                <h3>DESFILE DE TEAMS</h3>
                <p>En el M42 no solo corremos... también HACEMOS COREOS, PERREAMOS Y BAILAMOS. Bueno... ustedes lo hacen.</p>
                <p>El sábado 18:30hs aproximadamente, en la PLAZA SALERNO, en el corazón de Villa Ventana, una vez finalizados los 50K, 42K y 34K, luego de la premiación, es momento de MOVER LAS CACHAS, pero con mucha creatividad.</p>
                <h4>¿DE QUÉ SE TRATA?</h4>
                <p>Un momento único para que cada running team se pueda lucir arriba del escenario con la coreo y canción que elijan. También, como podrán ver en las imágenes del año pasado, con MUCHO cotillón y dejando todo.</p>
                <p>La idea es divertirnos, bailar, saltar, cantar, gritar, demostrar la unión que tienen como equipo y, para los que ya corrieron (50K, 42K y 34K), aflojar un poco las piernas -o acalambrarse-, y para los que corren el domingo (25K, 15K y 10K), tener un subidón de adrenalina para lo que vendrá.</p>
                <p>Aquellos que no son un running team pero son un grupo que quiere participar, también pueden. Ya hubo equipos de 2 o 3 integrantes.</p>
                <h4>¿CÓMO SUMARSE?</h4>
                <p>Nos tienen que mandar el nombre del team y la canción elegida al WhatsApp o al mail: info@fcproducciones.com.ar</p>
                <p>Además..¡HAY PREMIO!</p>
                <p>La más creativa se llevará una inscripción gratuita para el M42 2027.</p>
                <p>Tienen tiempo para empezar a pensar una coreo en conjunto para deslumbrar a los espectadores. ¡Ya vimos por ahí que hay varios teams que arrancaron! Y ojo, porque los teams del año pasado dejaron MUY alta la vara!</p>


                <h3 id='cronograma'>CRONOGRAMA GENERAL</h3>
                 <h4>VIERNES 29 DE MAYO</h4>
                <p><strong>De 11 a 19hs: ACREDITACIÓN TODAS LA DISTANCIAS.</strong></p>
                <p>Lugar: La Gran Cabaña, Villa Ventana.</p>
                
                <h4>SÁBADO 30 DE MAYO</h4>
                <ul>
        
                    <li><strong>9 am</strong> LARGADA 50, 42 Y 34K. Lugar: San Andrés de la Sierra.</li>
                    <li><strong>De 10 a 18 hs</strong> ACREDITACIÓN 25. 15K y 10K Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>17 hs</strong> Premiación 50, 42 Y 34K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18 hs</strong> Charla técnica 25, 15, 10K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18:30 hs</strong>: Desfile de teams. Lugar: Plaza Salerno, Villa Ventana.</li>
                </ul>

                <h4>DOMINGO 31 DE MAYO</h4>
                <p>Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana).</p>
                <ul>
                    <li><strong>De 6.30 a 7.30 am:</strong> ACREDITACIÓN 25K.</li>
                    <li><strong>8 am:</strong> LARGADA 25K.</li>
                    <li><strong>7.30 a 8.30 am:</strong> ACREDITACIÓN 15K.</li>
                    <li><strong>9 am:</strong> LARGADA 15K.</li>
                    <li><strong>8.30 a 9.30 am:</strong> ACREDITACIÓN 10K.</li>
                    <li><strong>10 am:</strong> LARGADA 10K.</li>
                    <li><strong>12/12.30 hs:</strong> LARGADA KIDS (horario aproximado, puede modificarse).</li>
                    <li><strong>13/13:30hs:</strong> PREMIACIÓN (horario aproximado, puede modificarse).</li>
                </ul> 

                <h3 id='reglamento'>REGLAMENTO M42</h3>
                <p>La organización controlará el cumplimiento del reglamento por parte de los competidores y decidirá sobre cualquier tema que tenga que ver con la carrera. Los corredores deberán remitirse al mismo ante cualquier duda sobre temas técnicos, de circuito, competencia, clasificaciones y demás.</p>
               
                 <ul>
                    <li>La participación en la carrera implica su responsabilidad por los datos suministrados en la ficha de inscripción, su aceptación plena del reglamento, bases y condiciones del evento, y el pago de la inscripción.</li>
                    <li>La organización podrá impedir que un participante continúe en la competencia en caso de que el staff médico lo aconseje.</li>
                    <li>La organización podrá realizar modificaciones de distancias, recorridos y horarios por inclemencias climáticas, de seguridad u otros factores que impidan su normal desarrollo.</li>
                    <li>Además, podrá suspender, cancelar o reprogramar el evento por los mismos motivos. Tales decisiones no darán derecho a reclamo alguno hacia la organización, sponsors o staff médico.</li>
                    <li>La decisión será tomada en función de las circunstancias y comunicada oportunamente a los participantes.</li>
                </ul>

                <h3>RECLAMOS</h3>
                <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>

               
                <h3>ELEMENTOS OBLIGATORIOS</h3>
                <ul>    
                    <li><strong>APTO MÉDICO</strong><br></br>Cargar en la web o entregar en la acreditación.</li>
                    <li><strong>REMERA</strong><br></br>Provista por la organización</li>
                    <li><strong>NÚMERO DE CORREDOR</strong><br></br>Con CHIP incluído. Debe estar visible en todo momento. Provisto por la organización</li>
                   <li><strong>MANTA TÉRMICA</strong><br></br>Llevar en la mochila de carrera</li>
                   <li><strong>REMERA TÉRMICA</strong><br></br>Puesta o en la mochila de carrera</li>
                </ul>

                <h3>ELEMENTOS RECOMENDADOS</h3>
                <ul>
                    <li>Bastones</li>
                    <li>Casco</li>
                    <li>Celular</li>
                    <li>Calza larga o símil</li>
                    <li>Hidratación propia (más allá de la provista por la organización)</li>
                    <li>Gorro</li>
                    <li>Cuello térmico</li>
                    <li>Silbato</li>
                    <li>Anteojos para sol</li>
                    <li>Rompeviento</li>
                    <li>Guantes</li>
                    <li>Protector solar</li>
                    <li>Polainas</li>
                    <li>Repelente de mosquitos</li>
                </ul>

{/* 
                <h4>HORARIO Y LUGAR DE CORTE EN 50K</h4>
                <p>Los participantes tendrán, como límite, 7 horas (a las 16:00hs del sábado) para llegar al kilómetro 42, ubicado a 500 metros del PA6 donde se divide 50K y 42K. En caso de no llegar a tiempo, el corredor será dirigido por el recorrido de 42K hacia la llegada.</p>
                <p>En la clasificación aparecerá al final de la grilla. Y la medalla va a depender de cada corredor querer recibirla o no. Por favor: NO COMPROMETA A LA GENTE DEL STAFF UNA VEZ CUMPLIDO EL TIEMPO DE CARRERA.</p>

                <h4>ABANDONO</h4>
                <p>En caso de abandono, el competidor tiene la obligación indelegable de avisar a la Organización. El aviso deberá ser realizado únicamente en los Puestos de Asistencia, en la Largada o Meta. Los banderilleros o personal fuera de estos lugares no están autorizados a registrar el aviso de abandono. Es muy importante dar aviso de abandono, pues de lo contrario el participante se presumirá extraviado y generará inconvenientes evitables.</p>


                <h4>CERTIFICADO MÉDICO</h4>
                <p>El certificado médico que se debe presentar tendrá que ser de no más de un año de vigencia. Si el corredor no va a dejar el original (porque lo necesita) es obligatorio traer una copia del mismo, de lo contrario la organización se quedará con el certificado original sin excepción.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p> 
 */}


<div className='contenedorBoton'>
                <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/m42-maraton-de-montana-2026' className='enlaceBoton'>
                    <Button variant="info" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                        </div>
                             </div>
               

               

                <h3>POLÍTICA DE PAGOS DE CUOTAS</h3>
                <p>Si te inscribiste en las fechas donde el pago es en tres pagos sin interés (uno al inscribirse, el segundo a los 30 días y el tercero a los 60 días de inscribirse) debés tener en cuenta que: si no se abona la segunda o tercera cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el costo aumentará y pasará a valer el precio vigente.</p>

                <h3>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</h3>
                <p>Las inscripciones <strong>NO</strong> tienen devolución. Sin excepción.</p>

                <h4>TRANSFERENCIA POR NO PODER PARTICIPAR</h4>
                <p>Para poder transferir debe estar toda la carrera abonada. Hasta el viernes 15/05/2026, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
            
                
                <h4>TRANSFERENCIA A OTRO CORREDOR</h4>
                <p>Para poder transferir debe estar toda la carrera abonada. Hasta el viernes 15/5/2026, inclusive, podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Solo se considerarán aquellos casos en que se solicite a la organización por mail y solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
                <p>En caso de no avisar con ese tiempo de anticipación se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</p>
               
               
               <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
                <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
                <ol>
                    <li>Sólo se considerarán aquellos casos en que se solicite al mail de la organización.</li>
                    <li>El viernes 15/05/2026 es el último día en que se aceptarán modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
                    <li>Si el cambio es a una distancia mayor, se debe abonar la diferencia del monto de inscripción. Esta diferencia entre ambas inscripciones corresponderá al importe vigente al momento del cambio de distancia.</li>
                    <li>No se devolverá dinero si el cambio es a una distancia menor.</li>
                </ol>


                <h3>CORTES OBLIGATORIOS</h3>
                <p><strong>La distancia de 42k</strong>, la cual larga el sábado 30 de mayo a las 9 de la mañana, tendrá un único corte a las 6 horas de carrera (o sea, 15:00hs del sábado) en el kilómetro 34 donde se encuentra la última subida (la antena).</p>
                <p>No comprometa al staff de FC producciones al momento del corte. En el punto indicado se les redireccionará para continuar con la carrera. La persona indicada les retirará el chip y su clasificación pasará al final de la tabla donde figurará como un DNF. Está en cada corredor recibir la medalla finisher.</p>
                <p>Todos estos puntos son sujetos a cambio en caso de que la organización lo decida, por factores climáticos, luz, hasta estado del corredor.</p>

                <p><strong>La distancia de 50k</strong>, la cual larga el sábado 30 de mayo a las 9 de la mañana, tendrá tres cortes. El primero será a las 6 horas de carrera (o sea, 15:00hs del sábado), en el kilómetro 34 (subida a la antena).</p>
                <p>El segundo corte será a las a las 7 horas y 50 minutos de haber largado (o sea, a las 16:50hs del sábado), en la entrada a Cerro Colorado en el kilómetro 40.</p>
                <p>El tercer corte será en la división final de 50K y 42K a las 8 horas y 30 minutos de haber largado (o sea a las 17:30hs del sábado), en el kilómetro 44.</p>
                <p>No comprometa al staff de FC producciones al momento del corte. En el punto indicado se les redireccionará para continuar con la carrera. La persona indicada les retirará el chip y su clasificación pasará al final de la tabla donde figurará como un DNF. Está en cada corredor recibir la medalla finisher.</p>
                <p>Todos estos puntos son sujetos a cambio en caso que la organización lo decida, por factores climáticos, luz, hasta estado del corredor.</p>
                <br></br>
                <p><strong>Los 34K, 25K, 15K y 10K no tienen corte.</strong> (La organización tiene el derecho de realizar el que crea conveniente en el momento que lo considere por razones operativas).</p>

                <h3>NÚMERO DE CORREDOR</h3>
                <p>Disponible una semana antes del evento desde su inscripción.</p>

                <h3>DERECHOS</h3>
                <p>La organización se reserva el derecho de cualquier modificación que surja en cualquier momento del correspondiente a la carrera.</p>

                <h3>MARCACIÓN</h3>
                <p>Deberás guiarte por las cintas de la organización para poder confirmar que estás por la senda o circuito correcto. Siempre verás la próxima cinta. Seguir las marcaciones y no a los corredores. En caso de extravío, por no ver una cinta, o no prestar atención a los senderos o indicaciones por parte de la organización, deberás volver sobre tus pasos hasta el punto donde avistaste la última y retomar el camino.</p>
                <h5>ELEMENTOS</h5>
                <ul>
                    <li>Cintas blancas de FC Producciones a lo largo de todo el recorrido.</li>
                    <li>Banderas de los sponsors y de la organización.</li>
                    <li>Cartelería.</li>
                    <li>Banderilleros en puntos claves.</li>
                </ul>
                <p><b>El recorrido podrá ser modificado antes o incluso durante la carrera por decisión de la organización ya sea por razones de seguridad u otras circunstancias que lo ameriten.</b></p>
                
                <h3>ABANDONO O INTERRUPCIÓN</h3>
                <p>El corredor/a que abandone la competición está obligado a comunicar al staff su decisión y esperar las indicaciones de los mismos para llegar a la meta. Deberá entregar dorsal y chip.</p>
                <p>La organización se reserva el derecho de interrumpir la participación y el recorrido de cualquier corredor/a que se considere que esté poniendo en riesgo su salud. En ese caso, tiene la obligación de responder a la misma indicación. De no hacerlo, será descalificado y la responsabilidad corre por cuenta del propio participante.</p>


                <h3>SEGURO DEL CORREDOR</h3>
                <p>Cada participante estará asegurado con una póliza de Accidentes Personales con las siguientes coberturas:</p>
                <ul>
                    <li>Accidente o muerte por persona</li>
                    <li>Invalidez parcial y total permanente</li>
                    <li>Asistencia médico farmaceutica</li>
                </ul>
                <p>El seguro cubrirá únicamente durante la participación del evento, no cubre el riesgo “in itinere”.</p>


                <h3>PREMIACIÓN</h3>
                <p>Todos los participantes que finalicen el recorrido de forma reglamentaria recibirán medalla finisher.</p>
                <p>Se premiará cada categoría en sus respectivos primeros 3 puestos, tanto hombre como mujer. También habrá premio para las generales (hombre y mujer) de cada distancia.</p>
                <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización.</p>
                <p>Los premios no tienen cambio.</p>
                <p><strong>La presencia en la premiación es obligatoria. Toda persona que no se encuentre presente en ese momento, no podrá reclamar su premio, perdiendo el beneficio.</strong></p>

                {/* <h3>ENVÍO DE PREMIOS</h3>
                <p>Toda persona que no se encuentre presente al momento de la premiación y le corresponda premio, podrá solicitarlo vía mail y se le enviará por terminal de micros, Oca o Correo Argentino. El COSTO de ENVÍO corre por cuenta del corredor, sin excepción.</p> */}

                <h3>TOMA DE TIEMPO Y CLASIFICACIONES</h3>
                <p>La toma de tiempo y clasificación será electrónica vía chip. El mismo viene pegado en el dorsal. Los participantes deberán utilizarlo obligatoriamente en la carrera, a fin de poder ser clasificados. El dorsal deberá ser utilizado de forma VISIBLE en la remera de la parte frontal, o en su defecto en otro sitio, pero que esté visible desde adelante. Es descartable, es decir, no deben devolverlo.</p>
                <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
                <ul>
                    <li>No olvides colocarte el dorsal antes de la largada</li>
                    <li>No lo cambies ni confundas con el de otro corredor</li>
                    <li>No lo coloques en otro lugar que no sea el indicado por la organización</li>
                    <li>No hay que devolverlo</li>
                </ul>
                <p>Los resultados se publicarán en esta página el mismo día a la noche o el día posterior al evento.</p>

               
                
                <h3>FOTOGRAFÍA Y VIDEO</h3>
                <p>El material audiovisual otorgado por el staff podrá ser utilizado por la organización y los auspiciantes con fines publicitarios. Al aceptar participar en la carrera, los corredores aceptan este uso no dando lugar a reclamos posteriores.</p>

                
                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso:</p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares. Lo que llevás a la montaña, vuelve con vos.</li>
                    <li>Respetar la flora y fauna.</li>
                    <li>Respetar los senderos del circuito y no cortar camino.</li>
                    <li>Sólo dejar la huella de tu calzado y no de tu basura.</li>
                </ul>
                

      
                <div className='contenedorBoton'>
                <div className='botonIntermedio'>
                    <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/p/m42-maraton-de-montana-2026' className='enlaceBoton'>
                    <Button variant="info" size='lg' className='boton'>
                        INSCRIBITE ACÁ
                    </Button>
                    </Link>
                        </div>
                             </div>

             

        </section>
    );
}

export default M42;