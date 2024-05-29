import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

/* Imágenes */
import m42General from '../../../../Img/m42/flyerM42.webp';
import Remera from '../../../../Img/m42/remera.webp';
import km50 from '../../../../Img/m42/50k.webp'
import km42 from '../../../../Img/m42/42k.webp'
import km25 from '../../../../Img/m42/25k.webp'
import km10 from '../../../../Img/m42/10k.webp'


/* Documentos */
import AutorizacionMenores from '../../../../PDF/autMenores.pdf';
import Deslinde from '../../../../PDF/deslinde.pdf';
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

            <h2 className='titulo'>M42 LOS ALERCES</h2>
            <div className='containerFlyerDescripcion'>
                <div>
                    <img src={m42General} alt='Maratón M42' className='flyer' />
                        </div>

                            <div>           
                                 <p className='descripcion'>El Maratón M42 Los Alerces se convirtió, hace años, en el clásico de trail y ultra trail de la comarca de Tornquist, provincia de Buenos Aires. Con más de 1.800 corredores en cada edición, la fiesta que se vive es total y muy esperada por los participantes.</p>
                                    <p className='descripcion'>Con la edición N°12, llevaremos tu cuerpo al extremo en un recorrido que mezcla la exigencia con el disfrute en un contexto natural único en Villa Ventana y San Andrés de la Sierra, dos paraísos.</p>
                                    <p className='descripcion'>Paisajes inolvidables, cruces de arroyos, un histórico hotel abandonado, senderos, bosques y mucho trail, sumado a una compañía única de los demás corredores y del staff de FC Producciones que harán que sea un fin de semana que no olvidarás jamás.</p>
                                    <p className='descripcion'>50K y 42K el sábado y 25K, 10K y KIDS el domingo (podés correr ambos días de así quererlo) son las 5 modalidades diferentes que harán que te sea imposible venir tan solo por un año, vas a querer, como muchos habitués del M42 lo hacen, volver a participar pero elevando la distancia en la próxima edición.</p>
                                      
                                    <ul className='redes'>
                    
                                        <li><Link to='https://www.instagram.com/MaratonM42/' target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                         <li><Link to='https://www.facebook.com/MaratonM42/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i> </Link></li>
                                                 </ul>
                                        </div>
                                             </div>

                <div className='botones'>
                <Button variant="info" size='lg' className='boton' onClick={scrollCartas}><Link to='#cartas'>Cartas</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollInscripcion}><Link to='#inscripcion'>Inscripción</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollCronograma}><Link to='#cronograma'>Cronograma</Link></Button>
                <Button variant="info" size='lg' className='boton' onClick={scrollReglamento}><Link to='#reglamento'>Reglamento</Link></Button>
                <Button variant="info" size='lg' className='boton'><Link to='/m42/alojamientos'>Alojamientos</Link></Button>
                <Button variant="info" size='lg' className='boton'><Link to='/m42/resultados'>Resultados y fotos 2023</Link></Button> 
                 {/* <Button variant="info" size='lg' className='boton'><Link to='/m42/fotos2022'>Fotos 2023</Link></Button> */}
                </div>
                
                <h3 id='cartas'>Cartas</h3>


                <h4><mark>DATOS GENERALES</mark></h4>
                <p><strong>Carrera:</strong> Maratón M42 Los Alerces 12° edición</p>
                <p><strong>Fechas:</strong> 1 y 2 DE JUNIO 2024</p>
                <p><strong>Lugares:</strong>Los Alerces Resort & Spa, San Andrés de la Sierra; Plaza Salerno, en el corazón de Villa Ventana y Estancia las Vertientes, también en Villa Ventana. Todo ubicado en la comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><strong>Concepto:</strong> Carrera de trail y ultratrail running</p>
                <p><strong>Distancias:</strong> 50K, 42K, 25K, 10K y KIDS.</p>
                <p><strong>Modalidad:</strong> Individual</p>

                <h4><mark>CATEGORÍAS</mark></h4>
                <p><strong>INDIVIDUAL:</strong> Damas y caballeros*</p>
                <p>Hasta 25 años | 26 a 35 | 36 a 45 años | 46 a 55 años | 56 a 65 años | +66 años. Las edades serán computadas al 02/06/2024</p>
                <p>*La edad para poder correr el M42 es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr el M42. De lo contrario, no podrá participar.</p>
               
                <div className='contenedorBoton'>
                <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>

                <h4><mark>LA INSCRIPCIÓN INCLUYE</mark></h4>
                <ul>
                    <li>Derecho a participación.</li>
                    <li>Servicio de hidratación durante el recorrido</li>
                    <li>Kit de corredor</li>
                    <li>Remera técnica de corredor</li>
                    <li>Chip de control para clasificación</li>
                    <li>Medalla finisher</li>
                    <li>Seguro de corredor</li>
                    {/* <li>Más de 10 mil fotos gratuitas</li>
                    <li>Video y foto de llegada</li> */}
                    <li>Certificado finisher</li>
                    {/* <li>Transporte gratuito a la largada de 50 y 42K, de ser necesario</li> */}
                    <li>Servicio de rescate</li>
                    <li>Servicio de salud</li>
                    <li>Premiación ganadores de categoría</li>
                    <li>Premiación ganadores de la general</li>
                </ul>

                <h3>REMERA</h3>
                 <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 12. El talle de remera elegido al momento de inscribirse no tiene cambio.</p>
                <img src={Remera} className='img' alt='Remera M42' /> 

                

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva, por lo que no tendrá premiación ni clasificación. Sí contará con <strong>remera de corredor, hidratación y medalla finisher</strong>.</p>

                <p><strong>La carrera tendrá dos distancias:</strong></p>
                <ul>
                    <li><strong>1K para niños sin límite de edad</strong></li>
                    <li><strong>3K para niños de entre 10 y 15 años</strong></li>
                </ul>

                <p><b>Los padres o acompañantes podrán acompañar durante el recorrido a sus hijos de ser necesario. Los 3K se realizan de manera controlada por el staff y en grupo por lo extenso del recorrido. </b>.</p>
                
                
                <h3>TRASLADO 50 Y 42K</h3>
                <p>Habrá disponibilidad de un micro para ir desde Plaza Salerno (Villa Ventana) hasta el Complejo Los Alerces (lugar de largada) el día sábado 1 de junio.</p>
                <p>El micro saldrá el sábado 1/6 a las 8 de la mañana puntual desde Plaza Salerno. Estar 10 min antes.</p>
                <p>El costo es de $3.000 y se abona EN EFECTIVO al retirar el kit.</p>
                <p>La reserva se hace previamente a <strong>info@fcproducciones.com.ar</strong> indicando nombre completo, dni y celular.</p>
                <p>Por favor les solicitamos que la reserva sea confirmada por tema de cupos del micro. Es decir, una vez que reservan, que sea segura su participación en el traslado.</p>


                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>
                
                <h4><mark>VIERNES 31/05 de 11 a 19hs</mark></h4>
                <p>Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Melica.</p>
                <p><b>PUEDEN RETIRAR TODAS LAS DISTANCIAS: 50K, 42K, 25K, 10K y KIDS</b></p>
                <h5>¿CÓMO LLEGAR A LOS ALERCES?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12565.668852426901!2d-62.0961989!3d-38.0606637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec6143bc37e253%3A0xe806173c3f397c3c!2sLos%20Alerces%20Resort%20%26%20Spa!5e0!3m2!1ses-419!2sar!4v1684965720811!5m2!1ses-419!2sar" width="600" height="450" className='mapas' title='Mapa Los Alerces'></iframe>

                <h4><mark>SÁBADO 01/06</mark></h4>
                <p>Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><b>EL RETIRO SERÁ PARA TODAS LAS DISTANCIAS, PERO CON HORARIOS ESPECÍFICOS QUE SERÁN RESPETADOS. NO ACREDITAMOS A NADIE FUERA DE SU HORARIO.</b></p>
                <ul>
                    <li>50 y 42K retiran entre las <b>6:30 y 7:45 am</b></li>
                    <li>25 y 10K retiran entre las <b>10 y las 18 pm</b></li>
                </ul>
                {/* <p><strong>INFORMACIÓN IMPORTANTE 50 Y 42K</strong>: Habrá traslados <strong>gratuitos</strong> desde la Plaza Salerno de Villa Ventana hasta la largada de los 50 y 42K. Deben reservar su lugar en el mismo enviando un mail a <b>info@fcproducciones.com.ar</b></p> */}

                <h5>¿CÓMO LLEGAR A LA PLAZA SALERNO?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100532.41661521242!2d-61.93467999999999!3d-38.05552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf3c631137e11%3A0x652387499a504212!2sPlaza%20Salerno!5e0!3m2!1ses-419!2sar!4v1682008713151!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa Plaza Salerno'></iframe>

                <h4><mark>DOMINGO 02/06</mark></h4>
                <p>Estancia Las Vertientes, Villa Ventana</p>
                <p><strong>EL RETIRO SERÁ PARA TODAS LAS DISTANCIAS, PERO CON HORARIOS ESPECÍFICOS QUE SERÁN RESPETADOS. NO ACREDITAMOS A NADIE FUERA DE SU HORARIO.</strong></p>
                <ul>
                    <li>25K retira entre las <b>8 y 9 am</b></li>
                    <li>10K retira entre las <b>9 y 10 am</b></li>
                </ul>
                <p><strong>POR RAZONES OPERATIVAS, RECOMENDAMOS NO ESPERAR AL DOMINGO PARA RETIRAR. EL KIT PUEDE RETIRARLO OTRA PERSONA (VER EL APARTADO “RETIRO DE KITS POR TERCEROS”).</strong></p>

                <h5>¿CÓMO LLEGAR A LA ESTANCIA LAS VERTIENTES?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6281.567071671955!2d-61.943919!3d-38.075422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec8cd2287f4b2d%3A0xffaacc594c32d622!2sEstancia%20Las%20Vertientes!5e0!3m2!1ses!2sus!4v1682008795355!5m2!1ses!2sus" width="600" height="450" className='mapas' title='Mapa Las Vertientes' loading="lazy"></iframe>

                <h4><mark>A PRESENTAR EN ACREDITACIÓN</mark></h4>
                <p><mark>ATENCIÓN: FACILITAMOS EL PROCESO DE INSCRIPCIÓN Y DE ACREDITACIÓN. DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</mark></p>

                <h5>De completar el proceso de inscripción online como corresponde (esto es: completar los datos, firmar el deslinde ONLINE y adjuntar el apto físico) NO DEBERÁN PRESENTAR NINGUNA DOCUMENTACIÓN EN ACREDITACIÓN. Solo presentarse con el DNI. </h5>
                
                <p>De lo contrario, deberán llevar para acreditarse y retirar su kit la siguiente documentación:</p>
                <ol>

                    <li>DNI</li>
                    <li>APTO MÉDICO</li>
                    
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                         <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Apto Médico' to={AptoMedico}>DESCARGAR APTO MÉDICO</Link></Button>
                          </div>
                          </div>

                    <li>DESLINDE DE RESPONSABILIDAD (SOLICITAR POR MAIL INFO@FCPRODUCCIONES.COM.AR)</li>

                    {/* <div className='contenedorBoton'>
                    <div className='botonIntermedio'>  
                        <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Deslinde de Responsabilidad' to={Deslinde}>DESCARGAR DESLINDE</Link></Button>
                            </div>
                            </div>
 */}
                    <li>AUTORIZACIÓN MENOR DE EDAD.</li>
                    <div className='contenedorBoton'>
                <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>

                    {/* <div className='contenedorBoton'>
                        <div className='botonIntermedio'>  
             <Button variant="info" size='lg' className='boton' id='botonesIntermedios'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                             </div>
                             </div> */}

                </ol>

                <h3><mark>RETIRO DE KITS POR TERCEROS</mark></h3>
                <p>Si el participante titular ya firmó el deslinde virtual y subió el apto médico a su inscripción, sólo deberá presentar dni. Si no hizo el proceso correspondiente, el requisito es que se acerque con los siguientes documentos:</p>
                <ol>
                    <li>FOTOCOPIA DEL DNI DEL TITULAR</li>
                    <li>FICHA DE INSCRIPCIÓN FIRMADA POR EL TITULAR</li>
                    <li>APTO FÍSICO DEL TITULAR.</li>
                </ol>
                <p><strong>De no contar con estos requisitos la organización NO entregará el Kit.</strong></p>
                            
                
                <h3><mark>APTO MÉDICO</mark></h3>
                <p>A partir de ahora, en las carreras de FC Producciones podrán cargar el apto médico en la web a la hora de inscribirse y firmar el deslinde online para no tener que llevarlo a la acreditación. De no cargarlo, deberán presentarlo presencial en la acreditación.</p>
                <p>El apto médico que se debe cargar en la inscripción tiene que tener una vigencia de 1 año a partir de la fecha que fue realizado el estudio. El documento a cargar debe mostrar claramente: tus datos personales, la fecha del apto y la firma, con sello, del médico.</p>
                <p>La validación del apto médico será realizada por la organización.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>
                <p>Podés descargar un modelo del apto médico y presentarlo a tu médico para que lo complete y luego lo puedas cargar.</p>
                <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                         <Button variant="info" size='lg' className='boton'><Link target='_blank' download='Apto Médico' to={AptoMedico}>DESCARGAR APTO MÉDICO</Link></Button>
                          </div>
                          </div>


                <h3>LARGADAS: LUGARES Y HORARIOS</h3>

                <h4><mark>SÁBADO 1 DE JUNIO | 50 y 42K</mark></h4>
                <p><strong>- LARGADA</strong>: Los Alerces. Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Melica.</p>
                <p><strong>- HORARIO</strong>: 9 am</p>
                <p><strong>- LLEGADA</strong>: Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
               {/*  <p>IMPORTANTE: Habrá traslados desde la Plaza Salerno hasta la largada de los 50 y 42K. El último micro saldrá a las 8 am. Deben reservar su lugar enviando un mail a info@fcproducciones.com.ar</p> */}

                <h4><mark>DOMINGO 2 DE JUNIO | 25, 10K y KIDS</mark></h4>
                <p><strong>LARGADA Y LLEGADA</strong>: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana)</p>
                <p><strong>HORARIOS</strong></p>
                <ul>
                    <li>25K: 10 am</li>
                    <li>10K: 11 am</li>
                    <li>KIDS: 13 hs, horario aproximado</li>
                </ul>


                <h3><span role="img" aria-label="Emoji de montaña">⛰️</span>RECORRIDOS 50 y 42K<span role="img" aria-label="Emoji de montaña">⛰️</span></h3>
            
                <p>Destildar la distancia que no se quiera ver</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 50 y 42K'></iframe>

                <div className='containerAltimetria'>
                     <div className='altimetriaIMG'>
                <img src={km50} alt='Altimetria 50kM Los Alerces' className='img' />
                </div> 
                {/* <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>50K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: + 2200 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 944 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 390 msnm</p>
                </div> */}
                </div>

                <br></br>
                
                <div className='containerAltimetria'>
                <div className='altimetriaIMG'>
                <img src={km42} alt='Altimetria 42kM Los Alerces' className='img' />
                </div> 
                {/* <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>42K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: + 1.800 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 944 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 390 msnm</p>
                </div> */}
                </div>

                <br></br>

                <h3><span role="img" aria-label="Emoji de montaña">⛰️</span>RECORRIDOS 25 y 10K<span role="img" aria-label="Emoji de montaña">⛰️</span></h3>
            
                <p>Destildar la distancia que no se quiera ver</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 25 y 10K'></iframe>

                <div className='containerAltimetria'>
                 <div className='altimetriaIMG'>
                <img src={km25} alt='Altimetria 25kM Los Alerces' className='img' />
                </div> 
                {/* <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>25K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: + 616 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 548 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇ </span>Altura mínima: 369 msnm</p>
                </div> */}
                </div>
                <br></br>

                <div className='containerAltimetria'>
                 <div className='altimetriaIMG'>
                <img src={km10} alt='Altimetria 10kM Los Alerces' className='img' />
                </div> 
                {/* <div>
                <h5 className='altimetriaTxt'><span role="img" aria-label="Gráfico de recorrido">🏃</span>10K</h5>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de desnivel">📈</span>Desnivel: + 261 metros</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura máxima">🔝</span>Altura máxima: 548 msnm</p>
                <p className='altimetriaTxt'><span role="img" aria-label="Gráfico de altura mínima">⬇</span> Altura mínima: 369 msnm</p>
                </div> */}
                </div>
{/* 
                <br></br>
                <h4>RECORRIDOS INTERACTIVOS 50 Y 42K</h4>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 50 y 42K'></iframe>

                <br></br>
                <h4>RECORRIDOS INTERACTIVOS 25 Y 10k</h4>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 25 y 10K'></iframe>
                 */}
                <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <p><b>ATENCIÓN: FACILITAMOS EL PROCESO DE INSCRIPCIÓN Y DE ACREDITACIÓN. DENTRO DE LA INSCRIPCIÓN ONLINE DEBERÁN FIRMAR VIRTUALMENTE EL DESLINDE DE RESPONSABILIDAD Y TAMBIÉN SUBIR EL APTO MÉDICO. NO ES OBLIGATORIO HACERLO AL MOMENTO DE INSCRIBIRSE, PUEDE REALIZARSE LUEGO SIEMPRE Y CUANDO SEA ANTES DEL EVENTO. LO PUEDEN HACER INGRESANDO A SU INSCRIPCIÓN DENTRO DEL MAIL DE CONFIRMACIÓN DE EVENTOLS.</b></p>
                
                <h4><mark>INSCRIPCIÓN ONLINE</mark></h4>
                <p>Los pasos para inscribirse online son:</p>

                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams más abajo), colocarlo en su casillero.</li>
                    <li>Elegir la distancia.</li>
                    <li> Completar los datos personales. Firmar el deslinde virtual y adjuntar el apto médico. Si aún no tenés el apto, podes subirlo hasta el día anterior a la carrera desde el estado de tu inscripción. (Ver apartado “a presentar en acreditación”).</li>
                    <li>Abonar vía transferencia o depósito bancario y compartir el comprobante. <b>(IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 7 días se elimina)</b>.</li>
                    <li>Se avisará por mail cuándo es momento de abonar la segunda cuota.<b> Si no abonan la misma, lo abonado en su primer momento pasará como parte de pago del siguiente precio sin descuento</b>.</li>
                </ol>

                <div className='contenedorBoton'>
      <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/m42-los-alerces-2024' className='enlaceBoton'>
        <Button variant="info" size='lg' className='boton'>
          INSCRIBITE ACÁ
        </Button>
      </Link>
    </div>
                
                <h5>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN:</h5>
                <p>Les llegará un mail que dice “Inscripción confirmada” desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Primero les llegará uno que dice “comenzaste el proceso de inscripción” el cual NO indica que estás confirmado. Si el mail de confirmación no llega es porque no terminaron la inscripción, indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>

                <h4><mark>INSCRIPCIÓN PRESENCIAL</mark></h4>
                <p>Se abona el TOTAL de la carrera únicamente en EFECTIVO en los centros de inscripción.</p>
                <h5>CENTROS DE INSCRIPCIÓN:</h5>
                <ul>
                    <li><strong>Aerorunners</strong>: Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
                    <li><strong>TriSport Necochea</strong>: Calle 57, 3043. Tel: 2262-52-6684</li>
                    <li><strong>BicyShop Mar del Plata</strong>: Av. Independencia 3565. Tel: 0223-474-9816</li>
                    <li><strong>La Fe Deportes</strong>: Loria 193, Lomas de Zamora. Tel 11-6069-3133</li>
                    <li><strong>Adrogué Outdoors</strong>: Av. Mitre 1110, Adrogué. Tel 4293-6350</li>
                </ul>

                <h4><mark>DESCUENTO TEAMS DE ENTRENAMIENTO</mark></h4>
                <p>Otorgamos un 10% de descuento en cada inscripción y liberamos únicamente a 1 profesor/a. La condición para obtenerlo es ser 10 corredores o más. Para adquirir los descuentos: PRIMERO hay que solicitarlo a nuestro mail info@fcproducciones.com.ar, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento. Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p> 

                <h3>COSTOS</h3>
                  <h4><strong>¡ABRIMOS EL QUINTO PERÍODO! ¡CUPOS LIMITADOS!</strong></h4>
                <ul>
                    <li><strong>50K: $86.000</strong> abonando el 50% AL INSCRIBIRSE por TRANSFERENCIA BANCARIA o DEPÓSITO y el otro 50% restante en EFECTIVO en ACREDITACIÓN.</li>
                    <li><strong>42K: $74.000</strong> abonando el 50% AL INSCRIBIRSE por TRANSFERENCIA BANCARIA o DEPÓSITO y el otro 50% restante en EFECTIVO en ACREDITACIÓN.</li>
                    <li><strong>25K: $58.000</strong> abonando el 50% AL INSCRIBIRSE por TRANSFERENCIA BANCARIA o DEPÓSITO y el otro 50% restante en EFECTIVO en ACREDITACIÓN.</li>
                    <li><strong>10K: $42.000</strong> abonando el 50% AL INSCRIBIRSE por TRANSFERENCIA BANCARIA o DEPÓSITO y el otro 50% restante en EFECTIVO en ACREDITACIÓN.</li>
                    <li><strong>KIDS 1K (sin límite de edad): $6.900</strong> pago total AL INSCRIBIRSE.</li>
                    <li><strong>KIDS 3K (de 10 a 15 años): $8.900</strong> pago total AL INSCRIBIRSE.</li>
                </ul> 
                <p><b>Si tenés tu código de descuento por running team debés ponerlo cuando comenzás la inscripción y se hará el 10% de descuento sobre las cuotas.</b></p>
                <p>Cuando los cupos se acaben, se cerrarán las inscripciones y los costos cambiarán en la próxima etapa.</p>  
 
                {/*  <h5 style={{textAlign:'center'}}><mark>CUPO PROMOCIONAL COMPLETO</mark></h5>
                 <h5 style={{textAlign:'center', marginBottom: '3rem'}}>¡ESTÉN ATENTOS A LA APERTURA DEL CUARTO PERÍODO!</h5>   */}


                <h4><mark>¿QUERÉS CORRER LOS DOS DÍAS?¡PODÉS! HAY UN DESCUENTO ESPECIAL</mark></h4>
                <p>Para aquellos corredores de 50 o 42K que quieran correr también el domingo, les otorgamos un 20% de descuento en su segunda inscripción de 25 o 10K. Deberá solicitar el código de descuento online por mail info@fcproducciones.com.ar para inscribirse en el día domingo de competencia.</p>
                <p><strong>CONSIDERACIONES:</strong></p>
                <p>*No es acumulable con otros descuentos.</p>
                <p>*La inscripción es únicamente online y de forma previa, no se inscribirá el mismo día.</p>
                <p>*No se puede dar de baja ni modificar nada a partir del lunes 20/05.</p>
                <p>*Se inscribe en dos carreras y realiza dos acreditaciones, dos largadas, dos premiaciones, todo por separado.</p>
                <p>*No se harán devoluciones. (Ver política de devolución de inscripciones en reglamento)</p>


                <h3 id='cronograma'>CRONOGRAMA GENERAL</h3>
                <h4><mark>VIERNES 31 DE MAYO</mark></h4>
                <p><strong>De 11 a 19hs</strong>: acreditación de todas las distancias en Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Melica.</p>
                
                <h4><mark>SÁBADO 1 DE JUNIO</mark></h4>
                <ul>
                    <li><strong>De 6.30 a 7.45 am</strong> acreditación de 50 y 42K. Lugar: Plaza Salerno, en el centro de Villa Ventana.</li>
                    <li><strong>9 am</strong> LARGADA 50 Y 42K Lugar: Los Alerces, San Andrés de la Sierra.</li>
                    <li><strong>De 10 a 18 hs</strong> ACREDITACIÓN 25 Y 10K Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>17 hs</strong> premiación 50 Y 42K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18 hs</strong> Charla técnica 25 y 10K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18:30 hs</strong>: Desfile de teams. Lugar: Plaza Salerno, Villa Ventana.</li>
                </ul>

                <h4><mark>DOMINGO 2 DE JUNIO</mark></h4>
                <p>Todo se llevará a cabo en Estancia Las Vertientes (Ruta 76, km 221, Villa Ventana).</p>
                <ul>
                    <li><strong>De 8 a 9 am:</strong> ACREDITACIÓN 25K</li>
                    <li><strong>De 9 a 10 am:</strong> ACREDITACIÓN 10K</li>
                    <li><strong>10 am:</strong> LARGADA 25K</li>
                    <li><strong>11 am:</strong> LARGADA 10K</li>
                    <li><strong>13 hs:</strong> LARGADA KIDS</li>
                    <li><strong>14 hs:</strong> PREMIACIÓN 10 y 25K</li>
                </ul>

                <h3 id='reglamento'>REGLAMENTO M42 LOS ALERCES</h3>
                <p>La organización controlará el cumplimiento del reglamento por parte de los competidores y decidirá sobre cualquier tema que tenga que ver con la carrera. Los corredores deberán remitirse al mismo ante cualquier duda sobre temas técnicos, de circuito, competencia, clasificaciones y demás.</p>
               
               {/*  <ul>
                    <li>La participación en la carrera implica su responsabilidad por los datos suministrados en la ficha de inscripción, su aceptación plena del reglamento, bases y condiciones del evento, y el pago de la inscripción.</li>
                    <li>La Organización podrá impedir que un participante continúe interviniendo en la competencia, en caso de que el staff médico lo aconseje. La Organización podrá también realizar modificaciones de distancias, recorridos y horarios por factores climáticos, de seguridad y/u otros motivos. Tales decisiones no darán derecho a reclamo alguno hacia la Organización, sponsors y/o staff médico.</li>
                </ul>

                <h4><mark>HORARIO Y LUGAR DE CORTE EN 50K</mark></h4>
                <p>Los participantes tendrán, como límite, 7 horas (a las 16:00hs del sábado) para llegar al kilómetro 42, ubicado a 500 metros del PA6 donde se divide 50K y 42K. En caso de no llegar a tiempo, el corredor será dirigido por el recorrido de 42K hacia la llegada.</p>
                <p>En la clasificación aparecerá al final de la grilla. Y la medalla va a depender de cada corredor querer recibirla o no. Por favor: NO COMPROMETA A LA GENTE DEL STAFF UNA VEZ CUMPLIDO EL TIEMPO DE CARRERA.</p>

                <h4><mark>ABANDONO</mark></h4>
                <p>En caso de abandono, el competidor tiene la obligación indelegable de avisar a la Organización. El aviso deberá ser realizado únicamente en los Puestos de Asistencia, en la Largada o Meta. Los banderilleros o personal fuera de estos lugares no están autorizados a registrar el aviso de abandono. Es muy importante dar aviso de abandono, pues de lo contrario el participante se presumirá extraviado y generará inconvenientes evitables.</p>


                <h4><mark>CERTIFICADO MÉDICO</mark></h4>
                <p>El certificado médico que se debe presentar tendrá que ser de no más de un año de vigencia. Si el corredor no va a dejar el original (porque lo necesita) es obligatorio traer una copia del mismo, de lo contrario la organización se quedará con el certificado original sin excepción.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p> */}

                <h3>RECLAMOS</h3>
                <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>

                <h3>ELEMENTOS OBLIGATORIOS</h3>
                <ul>    
                    <li><strong>APTO MÉDICO</strong><br></br>Cargar en la web o entregar en la acreditación.</li>
                    <li><strong>REMERA</strong><br></br>Provista por la organización</li>
                    <li><strong>NÚMERO DE CORREDOR</strong><br></br> Con CHIP incluído. Debe estar visible en todo momento. Provisto por la organización</li>
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
                <p>La forma de pago de inscripción es en dos pagos sin interés (uno al inscribirse y el segundo a los 30 días de hacerlo). Si no se abona la segunda cuota en tiempo y forma, pasados los 7 días de la fecha cumplida, el precio de la segunda cuota pasará a valer el precio vigente.</p>

                <h3>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</h3>
                <p>Las inscripciones <strong>NO</strong> tienen devolución. Sin excepción.</p>

                <h4><mark>TRANSFERENCIA POR NO PODER PARTICIPAR</mark></h4>
                <p>Para poder transferir, debe estar toda la carrera abonada. Hasta el viernes 17/5, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
            
                
                <h4><mark>TRANSFERENCIA A OTRO CORREDOR</mark></h4>
                <p>Para poder transferir, debe estar toda la carrera abonada. Hasta el viernes 17/5, inclusive, podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Deberá tener en cuenta que: solo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
                <p>En caso de no avisar con ese tiempo de anticipación se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</p>
               
               
               <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
                <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
                <ol>
                    <li>Sólo se considerarán aquellos casos en que se solicite al mail de la organización.</li>
                    <li>A partir del lunes 20/5 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
                    <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción. Esta diferencia entre ambas inscripciones corresponderá al importe vigente al momento del cambio de distancia.</li>
                    <li>Si el cambio es a una distancia menor NO se le devolverá dinero.</li>
                </ol>

                <h3>CORTES OBLIGATORIOS</h3>
                <p><strong>La distancia Maratón (42k)</strong>, la cual larga el sábado 1 de junio a las 9 de la mañana, tendrá <strong>un único corte</strong> en el kilómetro 34 donde se encuentra la última subida (la antena) a las 6:00 horas de carrera, siendo las 15:00hs.</p>
                <p>No comprometa al staff de FC producciones al momento del corte. En el punto indicado se les redireccionará para continuar con la carrera. La persona indicada les retirará el chip y su clasificación pasará al final de la tabla donde figurará como un DNF. Está en cada corredor recibir la medalla finisher. </p>
                <p>Todos estos puntos son sujeto a cambio en caso que la organización lo decida, por factores climáticos, luz, hasta estado del corredor.</p>
                <p><strong>La distancia Ultra (50k)</strong>, la cual larga el sábado 1 de junio a las 9 de la mañana, tendrá tres cortes. El primero será en el kilómetro 34 (subida a la antena) a las 6:00 horas de carrera siendo las 15:00hs. El segundo corte será en la entrada a Cerro colorado en el kilómetro 40 a las 7:50 horas de carrera, siendo las 16:50hs. El tercer corte será en la división final de 50 y 42k en el kilómetro 44, siendo las 17:30hs.</p>
                <p>No comprometa al staff de FC producciones al momento del corte. En el punto indicado se les redireccionará para continuar con la carrera. La persona indicada les retirará el chip y su clasificación pasará al final de la tabla donde figurará como un DNF. Está en cada corredor recibir la medalla finisher. </p>
                <p>Todos estos puntos son sujeto a cambio en caso que la organización lo decida, por factores climáticos, luz, hasta estado del corredor.</p>
                <p><strong>Los 25 y 10k no tienen corte.</strong> (La organización tiene el derecho de realizar el que crea conveniente en el momento que lo considere por razones operativas).</p>

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
                <p>La organización se reserva el derecho de interrumpir la participación y el recorrido de cualquier corredor/a que se considere esté poniendo en riesgo su salud. En ese caso, tiene la obligación de responder a la misma indicación. De no hacerlo, será descalificado y la responsabilidad corre por cuenta del propio participante.</p>

                <h3>SEGURO DEL CORREDOR</h3>
                <p>Cada participante estará asegurado con una póliza de Accidentes Personales con las siguientes coberturas: </p>
                <ul>
                    <li>Accidente o muerte por persona</li>
                    <li>Invalidez parcial y total permanente</li>
                    <li>Asist. Medico farmaceutica</li>
                </ul>
                <p>El seguro cubrirá únicamente durante la participación del evento, no cubre el riesgo “in itinere”.</p>

                <h3>PREMIACIÓN</h3>
                <p>Todos los participantes que finalicen el recorrido de forma reglamentaria, recibirán medalla finisher.</p>
                <p>Se premiará cada categoría en sus respectivos primeros 3 puestos, tanto hombre como mujer. También habrá premio para las generales (hombre y mujer) de cada distancia.</p>
                <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización.</p>
                <p>Los premios no tienen cambio.</p>

                <h3>ENVÍO DE PREMIOS</h3>
                <p>Toda persona que no se encuentre presente al momento de la premiación y le corresponda premio, podrá solicitarlo vía mail y se le enviará por terminal de micros, Oca o Correo Argentino. El COSTO de ENVÍO corre por cuenta del corredor, sin excepción.</p>

                <h3>TOMA DE TIEMPO Y CLASIFICACIONES</h3>
                <p>La toma de tiempo y clasificación será electrónica con chip. Los participantes deberán retirar el dorsal que lleva pegado el chip detrás en la acreditación y utilizarlo obligatoriamente en la carrera, a fin de poder ser clasificados. El dorsal deberá ser utilizado de forma VISIBLE en la remera de la parte frontal. Es descartable, es decir, no deben devolverlo.</p>
                <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
                <ul>
                    <li>No olvides colocarte el dorsal antes de la largada</li>
                    <li>No lo cambies ni confundas con el de otro corredor</li>
                    <li>No lo coloques en otro lugar que no sea el indicado por la organización</li>
                    <li>No hay que devolverlo</li>
                </ul>
                <p>Los resultados se publicarán en esta página el mismo día a la noche o el día posterior al evento.</p>
                
                
                <h3>FOTOGRAFÍA Y VIDEO</h3>
                <p>El material audiovisual otorgado por el staff podrá ser utilizado por la organización y los auspiciantes con fines de publicidad. Al aceptar participar en la carrera, los corredores aceptan este uso no dando lugar a reclamos posteriores.</p>

                
                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso: </p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares. Lo que llevás a la montaña, vuelve con vos.</li>
                    <li>Respetar la flora y fauna.</li>
                    <li>Sólo dejar la huella de tu calzado y no de tu basura.</li>
                </ul>
                
                <div className='contenedorBoton'>
      <Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/m42-los-alerces-2024' className='enlaceBoton'>
        <Button variant="info" size='lg' className='boton'>
          INSCRIBITE ACÁ
        </Button>
      </Link>
    </div>
             

        </section>
    );
}

export default M42;