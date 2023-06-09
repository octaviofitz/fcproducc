import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

/* Imágenes */
import m42General from '../../../../Img/m42/flyerM42.webp';
import Remera from '../../../../Img/m42/remera.webp';

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

            <h2 className='titulo'>M42 MARATÓN DE MONTAÑA LOS ALERCES</h2>
            <div className='containerFlyerDescripcion'>
                <div>
                    <img src={m42General} alt='Maratón M42' className='flyer' />
                        </div>

                            <div>           
                                 <p className='descripcion'>El Maratón M42 Los Alerces se convirtió, hace años, en el clásico de trail y ultra trail de Villa Ventana, en la comarca de Tornquist. Con más de 1.800 corredores en las últimas ediciones, la fiesta que se vive es total y muy esperada por los competidores. </p>
                                    <p className='descripcion'>El M42, que este año llega a su 11° edición, busca llevar tu cuerpo al extremo en un recorrido que mezcla la exigencia con el disfrute en un contexto natural único.</p>
                                    <p className='descripcion'>Las sierras de Villa Ventana y San Andrés de la Sierra te harán olvidar tu estresante día a día para vivir un fin de semana largo inmerso en una naturaleza que ofrece paisajes inolvidables, cruces de arroyos, senderos, bosques y una compañía única de los demás corredores y del personal del staff de FC Producciones.</p>
                                    <p className='descripcion'>50K, 42K, 25K, 10K y KIDS son las 5 modalidades diferentes que harán que te sea imposible venir tan solo por un año, vas a querer, como muchos corredores lo hacen, volver a elevar la distancia en la próxima edición.</p>
                                      
                                    <ul className='redes'>
                    
                                        <li><Link to='https://www.instagram.com/MaratonM42/' target='_blank' rel="noopener noreferrer"> <i className="fab fa-instagram"></i></Link></li>
                                         <li><Link to='https://www.facebook.com/MaratonM42/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i> </Link></li>
                                                 </ul>
                                        </div>
                                             </div>

                <div className='botones'>
                <Button variant="danger" size='lg' className='boton' onClick={scrollCartas}><Link to='#cartas'>Cartas</Link></Button>
                <Button variant="danger" size='lg' className='boton' onClick={scrollInscripcion}><Link to='#inscripcion'>Inscripción</Link></Button>
                <Button variant="danger" size='lg' className='boton' onClick={scrollCronograma}><Link to='#cronograma'>Cronograma</Link></Button>
                <Button variant="danger" size='lg' className='boton' onClick={scrollReglamento}><Link to='#reglamento'>Reglamento</Link></Button>
                <Button variant="danger" size='lg' className='boton'><Link to='/m42/alojamientos'>Alojamientos</Link></Button>
                <Button variant="danger" size='lg' className='boton'><Link to='/m42/resultados'>Resultados 2022</Link></Button>
                <Button variant="danger" size='lg' className='boton'><Link to='/m42/fotos2022'>Fotos 2022</Link></Button>
                </div>
                
                <h3 id='cartas'>Cartas</h3>

                <h4><mark>DATOS GENERALES</mark></h4>
                <p><strong>Carrera:</strong> Maratón M42 Los Alerces 11° edición</p>
                <p><strong>Fechas:</strong> 27 Y 28 DE MAYO 2023</p>
                <p><strong>Lugares:</strong> Los Alerces, San Andrés de la Sierra; Plaza Salerno, Villa Ventana; Estancia las Vertientes, Villa Ventana. Todo en comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><strong>Concepto:</strong> Carrera de trail y ultratrail running</p>
                <p><strong>Distancias:</strong> 50K, 42K, 25K, 10K y KIDS.</p>
                <p><strong>Modalidad:</strong> Individual</p>

                <h4><mark>CATEGORÍAS</mark></h4>
                <p><strong>INDIVIDUAL:</strong> Damas y caballeros*</p>
                <p>Hasta 25 años | 26 a 35 | 36 a 45 años | 46 a 55 años | 56 a 65 años | +66 años. Las edades serán computadas al 28/5/2023</p>
                <p>*La edad para poder correr el M42 es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr el M42. De lo contrario, no podrá participar.</p>
               
                <div className='contenedorBoton'>
                <Button variant="danger" size='lg' className='boton'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
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
                    <li>Más de 5 mil fotos gratuitas.</li>
                    <li>Video y foto de llegada.</li>
                    <li>Transporte a la largada 50 y 42k</li>
                    <li>Servicio de rescate</li>
                    <li>Servicio de salud</li>
                    <li>Premiación ganadores de categoría</li>
                    <li>Premiación ganadores de la general</li>
                </ul>

                <h4><mark>REMERA</mark></h4>
                <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 12. El talle de remera elegido al momento de inscribirse no tiene cambio.</p>
                <img src={Remera} className='img' alt='Remera M42' />

                <h4><mark>DESCUENTO TEAMS DE ENTRENAMIENTO</mark></h4>
                <p>Otorgamos un 10% de descuento en cada inscripción y liberamos únicamente a 1 profesor/a. La condición para obtenerlo es ser 10 corredores o más. La forma de inscripción es primero consultando a nuestro mail <b>info@fcproducciones.com.ar</b>, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento. Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p>

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva por lo que no tendrá premiación ni clasificación. Sí contará con <b>remera de corredor, hidratación y medalla finisher</b>.</p>
                <p><strong>La carrera tendrá dos distancias:</strong></p>
                <ul>
                    <li><strong>1K para niños de hasta 9 años</strong></li>
                    <li><strong>3K para niños de 10 a 15 años</strong></li>
                </ul>
                <p><b>Los padres o acompañantes podrán acompañar durante el recorrido a sus hijos de ser necesario por cuestiones de edad</b>.</p>

                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>
                
                <h4><mark>VIERNES 26/05 de 10 a 18hs</mark></h4>
                <p>Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Grindella, ex Melica.</p>
                <p><b>PUEDEN RETIRAR TODAS LAS DISTANCIAS: 50K, 42K, 25K, 10K y KIDS</b></p>
                <h5>¿CÓMO LLEGAR A LOS ALERCES?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.399580909211!2d-62.08592658843749!3d-38.065062030645144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec61c36c812b09%3A0x129922352fe697!2sGnena-Kena%20%26%20Melica%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1680915042499!5m2!1ses-419!2sar" width="600" height="450" className='mapas' title='Mapa Los Alerces'></iframe>

                <h4><mark>SÁBADO 27/05</mark></h4>
                <p>Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><b>EL RETIRO SERÁ PARA TODAS LAS DISTANCIAS, PERO CON HORARIOS ESPECÍFICOS QUE SERÁN RESPETADOS. NO ACREDITAMOS A NADIE FUERA DE SU HORARIO.</b></p>
                <ul>
                    <li>50 y 42K retiran entre las <b>6 y 7:30 am</b></li>
                    <li>25 y 10K retiran entre las <b>10 y las 18 pm</b></li>
                </ul>
                <p><strong>INFORMACIÓN IMPORTANTE 50 Y 42K</strong>: Habrá traslados gratuitos desde la Plaza Salerno de Villa Ventana hasta la largada de los 50 y 42K. El último micro saldrá a las 8 am. Deben reservar su lugar en el mismo a <b>info@fcproducciones.com.ar</b></p>

                <h5>¿CÓMO LLEGAR A LA PLAZA SALERNO?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100532.41661521242!2d-61.93467999999999!3d-38.05552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf3c631137e11%3A0x652387499a504212!2sPlaza%20Salerno!5e0!3m2!1ses-419!2sar!4v1682008713151!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa Plaza Salerno'></iframe>

                <h4><mark>DOMINGO 29/05</mark></h4>
                <p>Estancia Las Vertientes, Villa Ventana</p>
                <p><strong>EL RETIRO SERÁ PARA TODAS LAS DISTANCIAS, PERO CON HORARIOS ESPECÍFICOS QUE SERÁN RESPETADOS. NO ACREDITAMOS A NADIE FUERA DE SU HORARIO.</strong></p>
                <ul>
                    <li>25K retira entre las <b>8 y 9 am</b></li>
                    <li>10K retira entre las <b>9 y 10 am</b></li>
                </ul>
                <p><strong>POR RAZONES OPERATIVAS, RECOMENDAMOS NO VENIR EL ÚLTIMO DÍA. EL KIT PUEDE RETIRARLO OTRA PERSONA LLEVANDO LOS PAPELES FIRMADOS POR EL TITULAR (VER EL APARTADO “RETIRO DE KITS POR TERCEROS”).</strong></p>

                <h5>¿CÓMO LLEGAR A LA ESTANCIA LAS VERTIENTES?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6281.567071671955!2d-61.943919!3d-38.075422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec8cd2287f4b2d%3A0xffaacc594c32d622!2sEstancia%20Las%20Vertientes!5e0!3m2!1ses!2sus!4v1682008795355!5m2!1ses!2sus" width="600" height="450" className='mapas' title='Mapa Las Vertientes' loading="lazy"></iframe>

                <h4><mark>PAPELES A PRESENTAR EN ACREDITACIÓN</mark></h4>
                <p>Los inscriptos deberán acreditarse y retirar su kit con la siguiente documentación:</p>
                <ol>
                    <li>DNI</li>
                    <li>CERTIFICADO MÉDICO. (No aceptamos foto del celolar). La organización se quedará con el certificado por lo que si lo necesitan, traigan copia</li>
                    
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                         <Button variant="danger" size='lg' className='boton'><Link target='_blank' download='Apto Médico' to={AptoMedico}>DESCARGAR APTO MÉDICO</Link></Button>
                          </div>
                          </div>

                    <li>DESLINDE DE RESPONSABILIDAD COMPLETO Y FIRMADO </li>

                    <div className='contenedorBoton'>
                    <div className='botonIntermedio'>  
                        <Button variant="danger" size='lg' className='boton'><Link target='_blank' download='Deslinde de Responsabilidad' to={Deslinde}>DESCARGAR DESLINDE</Link></Button>
                            </div>
                            </div>

                    <li>AUTORIZACIÓN MENOR DE EDAD (En caso de pertenecer)</li>

                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>  
             <Button variant="danger" size='lg' className='boton' id='botonesIntermedios'><Link target='_blank' download='Autorización Menores' to={AutorizacionMenores}>DESCARGAR AUTORIZACIÓN</Link></Button>
                             </div>
                             </div>

                </ol>

                <h4><mark>RETIRO DE KITS POR TERCEROS</mark></h4>
                <p>El requisito es que se acerque con los siguientes documentos:</p>
                <ol>
                    <li>FOTOCOPIA DEL DNI DEL CORREDOR</li>
                    <li>DESLINDE DE RESPONSABILIDAD DEL CORREDOR COMPLETO Y FIRMADO POR ÉL</li>
                    <li>APTO FÍSICO DEL CORREDOR</li>
                </ol>
                <p><strong>De no contar con estos requisitos la organización NO entregará el Kit.</strong></p>

                <h3>LARGADAS: LUGARES Y HORARIOS</h3>

                <h4><mark>SÁBADO 27 DE MAYO 2023 | 50 y 42K</mark></h4>
                <p><strong>- LARGADA</strong>: Los Alerces. Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Grindella, ex Melica.</p>
                <p><strong>- HORARIO</strong>: 9 am</p>
                <p><strong>- LLEGADA</strong>: Plaza Salerno, en el centro de Villa Ventana, comarca de Tornquist, provincia de Buenos Aires.</p>
                <p>IMPORTANTE: Habrá traslados desde la Plaza Salerno hasta la largada de los 50 y 42K. El último micro saldrá a las 8 am. Deben reservar su lugar enviando un mail a info@fcproducciones.com.ar</p>

                <h4><mark>DOMINGO 28 DE MAYO | 25, 10K y KIDS</mark></h4>
                <p><strong>LARGADA Y LLEGADA</strong>: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana)</p>
                <p><strong>HORARIOS</strong></p>
                <ul>
                    <li>25K: 10 am</li>
                    <li>10K: 11 am</li>
                    <li>KIDS: 13 hs, horario aproximado</li>
                </ul>


                <h3>RECORRIDO 50 Y 42K:</h3>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 50 y 42K'></iframe>

                <h4><mark>ALTIMETRÍAS</mark></h4>

                <h5>🏃50K</h5>
                <p>📈 Desnivel: + 2.200 metros</p>
                <p>🔝 Altura máxima: 944 msnm</p>
                <p>⬇ Altura mínima: 390 msnm</p>

                <br></br>

                <h5>🏃42K</h5>
                <p>📈 Desnivel: + 1.800 metros</p>
                <p>🔝 Altura máxima: 944 msnm</p>
                <p>⬇ Altura mínima: 390 msnm</p>

                <br></br>

                <h3>RECORRIDO 25 Y 10K:</h3>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas' title='Recorrido 25 y 10K'></iframe>

                <h4><mark>ALTIMETRÍAS</mark></h4>

                <h5>🏃25K</h5>
                <p>📈 Desnivel: + 616 metros</p>
                <p>🔝 Altura máxima: 548 msnm</p>
                <p>⬇ Altura mínima: 369 msnm</p>

                <br></br>

                <h5>🏃10K</h5>
                <p>📈 Desnivel: + 261 metros</p>
                <p>🔝 Altura máxima: 548 msnm</p>
                <p>⬇  Altura mínima: 369 msnm</p>

                
                <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <h4><mark>INSCRIPCIÓN ONLINE</mark></h4>
                <p>Los pasos para inscribirse online son:</p>

                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams), colocarlo en su casillero.</li>
                    <li>Elegir la distancia y si abonás el <b>TOTAL</b> de la inscripción o la SEÑA del 50% por transferencia o depósito bancario.</li>
                    <li>Completar los datos personales.</li>
                    <li>Abonar vía transferencia o depósito bancario y compartir el comprobante. <b>(IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 7 días se elimina)</b>.</li>
                    <li>Si eligieron la opción de pago de seña, abonan lo restante en la acreditación el fin de semana de la carrera y en efectivo.</li>
                </ol>

                <div className='contenedorBoton'>
                <Button variant="danger" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/maraton-m42-2023'>INSCRIBITE ACÁ</Link></Button>
                </div>
                
                <h5>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN:</h5>
                <p>Les llegará un mail de confirmación desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Si el mail no llega es porque indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>

                <h4><mark>INSCRIPCIÓN PRESENCIAL</mark></h4>
                <p>Se abona el <b>TOTAL</b> de la carrera únicamente en <b>EFECTIVO</b> en los centros de inscripción.</p>
                <h5>CENTROS DE INSCRIPCIÓN:</h5>
                <ul>
                    <li><strong>Aerorunners</strong>: Av. Córdoba 1360 CABA Tel 011 5811-1043</li>
                    <li><strong>TriSport Necochea</strong>: Calle 57 3043. Tel 2262 52-6684</li>
                    <li><strong>BicyShop Mar del Plata</strong>: Av. Independencia 3565. Tel 0223-474-9816.</li>
                    <li><strong>La Fe Deportes</strong>: Loria 193, Lomas de Zamora. Tel 11-6069-3133</li>
                    <li><strong>Adrogué Outdoors</strong>: Av. Mitre 1110, Adrogué. Tel 4293-6350</li>
                </ul>

                <h3>COSTOS</h3>
                <p>Del 13/4 en adelante</p>
                <ul>
                    <li><strong>50K</strong>: $27.000 <b>pago total o seña del 50%</b></li>
                    <li><strong>42K</strong>: $23.000 <b>pago total o seña del 50%</b></li>
                    <li><strong>25K</strong>: $17.000 <b>pago total o seña del 50%</b></li>
                    <li><strong>10K</strong>: $13.000 <b>pago total o seña del 50%</b></li>
                    <li><strong>KIDS</strong>:
                         <ul> 
                            <li>Hasta 9 años: $3.000 <b>pago total</b></li>
                            <li>De 10 a 14 años: $5.000 <b>pago total</b></li>
                        </ul>
                        </li>
                </ul>

                <h4><mark>¿QUERÉS CORRER LOS DOS DÍAS?¡PODÉS! HAY UN DESCUENTO ESPECIAL</mark></h4>
                <p>Para aquellos corredores de 50 o 42K que quieran correr también el domingo, les otorgamos un 20% de descuento en su segunda inscripción de 25 o 10K. Deberá solicitar el código de descuento online para inscribirse en el día domingo de competencia.</p>
                <p><strong>CONSIDERACIONES:</strong></p>
                <p>*No es acumulable con otros descuentos.</p>
                <p>*La inscripción es únicamente online y de forma previa, no se inscribirá el mismo día.</p>
                <p>*No se puede dar de baja ni modificar nada a partir del viernes 12/5/23.</p>
                <p>*Se inscribe en dos carreras y realiza dos acreditaciones, dos largadas, dos premiaciones, todo por separado.</p>
                <p>*No se harán devoluciones. (Ver política de devolución de inscripciones en reglamento)</p>


                <h3 id='cronograma'>CRONOGRAMA GENERAL</h3>
                <h4><mark>VIERNES 26 DE MAYO</mark></h4>
                <p><strong>De 10 a 18 hs</strong>: acreditación de todas las distancias en Los Alerces, ubicado en el corazón de San Andrés de la Sierra, comarca de Tornquist, provincia de Buenos Aires. Calles: Gnena-Kena y Grindella, ex Melica.</p>
                
                <h4><mark>SÁBADO 27 DE MAYO</mark></h4>
                <ul>
                    <li><strong>De 6.00 a 7.30 am</strong> acreditación de 50 y 42K. Lugar: Plaza Salerno, en el centro de Villa Ventana.</li>
                    <li><strong>9 am</strong> LARGADA 50 Y 42K Lugar: Los Alerces, San Andrés de la Sierra.</li>
                    <li><strong>De 10 a 19 hs</strong> ACREDITACIÓN 25 Y 10K Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>17 hs</strong> premiación 50 Y 42K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18 hs</strong> Charla técnica 25 y 10K. Lugar: Plaza Salerno, Villa Ventana.</li>
                    <li><strong>18:30 hs</strong>: Desfile de teams. Lugar: Plaza Salerno, Villa Ventana.</li>
                </ul>

                <h4><mark>DOMINGO 28 DE MAYO</mark></h4>
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
                <h4><mark>RECLAMOS</mark></h4>
                <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>
                <h4><mark>CERTIFICADO MÉDICO</mark></h4>
                <p>El certificado médico que se debe presentar tendrá que ser de no más de un año de vigencia. Si el corredor no va a dejar el original (porque lo necesita) es obligatorio traer una copia del mismo, de lo contrario la organización se quedará con el certificado original sin excepción.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>

                <h3>ELEMENTOS OBLIGATORIOS</h3>
                <ul>    
                    <li><strong>APTO MÉDICO</strong><br></br>Entregar en acreditación</li>
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
                    <li>Hidratación propia (más allá de la provista por la organización en el recorrido de la carrera)</li>
                    <li>Gorro</li>
                    <li>Cuello térmico</li>
                    <li>Manta térmica</li>
                    <li>Silbato</li>
                    <li>Anteojos para sol</li>
                    <li>Rompeviento</li>
                    <li>Guantes</li>
                </ul>

                <h3>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</h3>
                <p>Las inscripciones NO tienen devolución.</p>

                <h4><mark>TRANSFERENCIA POR NO PODER PARTICIPAR</mark></h4>
                <p>Hasta el viernes 12/5, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>

                <h4><mark>TRANSFERENCIA A OTRO CORREDOR</mark></h4>
                <p>Hasta el viernes 12/5, inclusive, podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Deberá tener en cuenta que: solo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
                <p>En caso de no avisar con ese tiempo de anticipación se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</p>

                <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
                <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
                <ol>
                    <li>Sólo se considerarán aquellos casos en que se solicite al mail de la organización.</li>
                    <li>A partir del lunes 15/5 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
                    <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción.</li>
                    <li>Si el cambio es a una distancia menor NO se le devolverá dinero.</li>
                </ol>

                <h4><mark>NÚMERO DE CORREDOR</mark></h4>
                <p>Disponible una semana antes del evento desde su inscripción.</p>

                <h4><mark>DERECHOS</mark></h4>
                <p>La organización se reserva el derecho de cualquier modificación que surja en cualquier momento del correspondiente a la carrera.</p>

                <h4><mark>MARCACIÓN</mark></h4>
                <p>Deberás guiarte por las cintas de la organización para poder confirmar que estás por la senda o circuito correcto. Siempre verás la próxima cinta. Seguir las marcaciones y no a los corredores. Si en algún momento no ves las cintas de la organización, deberás volver hasta el punto donde avistaste la última.</p>
                <h5>ELEMENTOS</h5>
                <ul>
                    <li>Cintas blancas de Fc producciones a lo largo de todo el recorrido.</li>
                    <li>Banderas de los sponsors y de la organización.</li>
                    <li>Cartelería.</li>
                    <li>Banderilleros en puntos claves.</li>
                </ul>

                <h3>PREMIACIÓN</h3>
                <p>Todos los participantes que finalicen el recorrido de forma reglamentaria, recibirán medalla finisher.</p>
                <p>Se premiará cada categoría en sus respectivos primeros 3 puestos, tanto hombre como mujer. También habrá premio para las generales (hombre y mujer) de cada distancia.</p>
                <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización.</p>
                <p>Los premios no tienen cambio.</p>

                <h4><mark>ENVÍO DE PREMIOS</mark></h4>
                <p>Toda persona que no se encuentre presente al momento de la premiación y le corresponda premio, podrá solicitarlo vía mail y se le enviará por terminal de micros, Oca o Correo Argentino. El COSTO de ENVÍO corre por cuenta del corredor, sin excepción.</p>

                <h3>TOMA DE TIEMPO Y CLASIFICACIONES</h3>
                <p>La toma de tiempo y clasificación será electrónica con chip. Los participantes deberán retirar el chip en la acreditación y utilizarlo obligatoriamente en la carrera, a fin de poder ser clasificados. El chip deberá ser utilizado de forma VISIBLE.</p>
                <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
                <p>Los resultados se publicarán en esta página el mismo día a la noche o el día posterior al evento</p>

                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso: </p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares. Lo que llevás a la montaña, vuelve con vos.</li>
                    <li>Respetar la flora y fauna.</li>
                    <li>Sólo dejar la huella de tu calzado y no de tu basura.</li>
                </ul>
                
                <div className='contenedorBoton'>
                <Button variant="danger" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/maraton-m42-2023'>INSCRIBITE ACÁ</Link></Button>
                </div>

        </section>
    );
}

export default M42;