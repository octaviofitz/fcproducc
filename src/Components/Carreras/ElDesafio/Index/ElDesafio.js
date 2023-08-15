import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

/* PDF */
import AptoMedicoDesafio from '../../../../PDF/aptoMedicoDesafio.pdf';
import DeslindeDesafio from '../../../../PDF/deslindeDesafio.pdf';
import AutMenoresDesafio from '../../../../PDF/autMenoresDesafio.pdf';

import elDesafio from '../../../../Img/elDesafio/elDesafio.webp'
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
            <h2 className='titulo' id='elDesafio'>EL DESAFÍO COLUMBIA</h2>
            <div className='containerFlyerDescripcion'>

                <div>
                <img src={elDesafio} alt='Maratón El Desafío' className='flyer' />
                 </div>
                    
                     <div>
                    <p className='descripcion'>El Desafío Columbia es una carrera de trail running que sacará tu mejor versión aventurera. Se trata de un evento que te motiva a dejar atrás las exigencias y el estrés diario para pasar a una conexión total y plena con la naturaleza.</p>
                    <p className='descripcion'>Correr, cenar, relajar en el fogón, acampar, desayunar y volver a correr en un contexto de camaradería entre deportistas que buscan lo mismo que vos: vivir una aventura única, en un lugar único. </p>
                    <p className='descripcion'>Y para aquellos que quieran vivir la experiencia de correr un único día, con o sin camping, también lo podrán hacer. Chequeá toda la información aquí abajo.</p>
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
                <Button variant="success" size='lg' className='boton'><Link to='/desafio-columbia/resultados'>Resultados 2022</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/desafio-columbia/fotos2022'>Fotos 2022</Link></Button>
                </div>

                <h3 id='cartas'>Cartas</h3>

                <h4><mark className='mark'>DATOS GENERALES</mark></h4>
                <p><strong>Carrera:</strong> El Desafío Columbia</p>
                <p><strong>Fecha:</strong> 28 y 29 de octubre 2023</p>
                <p><strong>Lugar:</strong> Sierra de La Ventana a Saldungaray, comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><strong>Concepto:</strong> Carrera de trail running</p>

                <h3>Modalidad</h3>
                <h4><mark className='mark'>DOS MODALIDADES EN UN MISMO FIN DE SEMANA ¡VOS ELEGÍS CUÁL!</mark></h4>
                <p><strong>- 2 días:</strong> 25K el sábado y 21K el domingo con campamento obligatorio</p>
                <p><strong>- 1 día:</strong> 21K, 10K o kids, solo domingo</p>

                <h3>INDIVIDUAL O EN EQUIPOS</h3>
                <p><strong>- INDIVIDUAL:</strong> Ambas modalidades</p>
                <p><strong>- EQUIPOS:</strong> Únicamente en la modalidad de 2 días y será de 2 integrantes. Puede ser MASCULINO, FEMENINO Y/O MIXTO. <b>Los participantes tendrán que realizar juntos el total del recorrido.</b></p>

                <h3>CATEGORÍAS DESAFÍO COLUMBIA</h3>
                <p><strong>- INDIVIDUAL:</strong> Damas y caballeros (Hasta 35 años / 36 a 45 años / 46 a 55 años / más 56 años)*</p>
                <p><strong>- EQUIPO MIXTO:</strong> Sin categoría. *</p>
                <p><strong>- EQUIPO MASC Y FEM:</strong> Sin categoría. *</p>
                <p>*Las categorías pueden modificarse en el caso de que se inscriba un grupo grande de corredores en la modalidad.</p>
                <p><b>LAS EDADES SERÁN COMPUTADAS AL 29 DE OCTUBRE 2023</b></p>
                <p>*La edad mínima para poder correr El Desafío Columbia es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr. De lo contrario, no podrá participar.</p>
                <div className='contenedorBoton'>
                <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AutMenoresDesafio} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
                </div>

                <h3>DESCUENTO PARA TEAMS</h3>
                <p>Otorgamos un 10% de descuento en cada inscripción y liberamos únicamente a 1 profesor/a. La condición para obtenerlo es ser 10 corredores o más. La forma de inscripción es primero consultando a nuestro mail <b>info@fcproducciones.com.ar</b>, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento. Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p>

                <h3>REMERAS</h3>
                <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 12. El talle de remera elegido al momento de inscribirse <b>no tiene cambio</b>.</p>

                <h3>LA INSCRIPCIÓN INCLUYE</h3>
                <ul>
                    <li>Derecho a participación</li>
                    <li>Estadía para quienes corren 2 días en el camping desde el sábado. Quien corre un día lo puede solicitar abonando un adicional. En cualquier caso, la carpa corre por cuenta del corredor</li>
                    <li>Cena y desayuno para quienes corren dos días</li>
                    <li>Servicio de hidratación durante el recorrido</li>
                    <li>Kit de corredor</li>
                    <li>Remera técnica de corredor</li>
                    <li>Chip de control para clasificación</li>
                    <li>Medalla finisher</li>
                    <li>Seguro de corredor</li>
                    <li>Fotos gratuitas de más de 4 fotógrafos</li>
                    <li>Video y foto de llegada</li>
                    <li>Transporte a la largada para quienes corren dos días</li>
                    <li>Servicio de rescate</li>
                    <li>Servicio de salud</li>
                    <li>Premiación ganadores categoría</li>
                    <li>Premiación ganadores general</li>
                </ul>
                <p><b>La organización pondrá micro y/o autos para trasladar a quienes no tengan como ir desde el camping a la largada del sábado.</b></p>

                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>

                <h4><mark className='mark'>- VIERNES 27/10 de 16 a 19hs</mark></h4>
                <p>Hotel Provincial de Sierra de la Ventana (Drago 130)</p>
                <h5>¿CÓMO LLEGAR AL HOTEL PROVINCIAL?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6426799.178214183!2d-61.798543!3d-38.138204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eceecaac28d5a3%3A0x820b68edb61e3981!2sHotel%20Provincial%20Sierra%20de%20la%20Ventana!5e0!3m2!1ses!2sus!4v1682094259680!5m2!1ses!2sus" width="600" height="450" loading="lazy" className='mapas' title='Mapa Hotel Provincial'></iframe>

                <h4><mark className='mark'>- SÁBADO 28/10 de 10 a 17hs</mark></h4>
                <p>Hotel Provincial de Sierra de la Ventana (Drago 130)</p>
                <p>(Habrá prioridad hasta las 14 hs para quienes corren los dos días)</p>
                <h5>¿CÓMO LLEGAR AL HOTEL PROVINCIAL?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6426799.178214183!2d-61.798543!3d-38.138204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eceecaac28d5a3%3A0x820b68edb61e3981!2sHotel%20Provincial%20Sierra%20de%20la%20Ventana!5e0!3m2!1ses!2sus!4v1682094259680!5m2!1ses!2sus" width="600" height="450" loading="lazy" className='mapas' title='Mapa Hotel Provincial'></iframe>

                <h4><mark className='mark'>- DOMINGO 29/10 de 7:30 a 9:30 am</mark></h4>
                <p>A 100 metros del arco de salida, en el “Centro de Interpretación de la obra de Francisco Salamone”, Av. Corrales 202, predio del camping Fortín Pavón.</p>
                <h5>¿CÓMO LLEGAR A LA ACREDITACIÓN?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6270.811893412615!2d-61.769943000000005!3d-38.200471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ece622ae73c7e3%3A0xc719abd95ca6308f!2sCentro%20de%20Interpretaci%C3%B3n%20de%20Obras%20de%20Francisco%20Salamone!5e0!3m2!1ses-419!2sar!4v1682094417742!5m2!1ses-419!2sar" width="600" height="450" loading="lazy" className='mapas' title='Mapa acreditación'></iframe>

                <p>Por razones operativas, <b>recomendamos no venir el último día</b>. El kit puede retirarlo otra persona llevando los papeles firmados por el titular (ver apartado siguiente).</p>


                <h3>PAPELES A PRESENTAR EN ACREDITACIÓN</h3>
                <p>Los inscriptos deberán acreditarse y retirar su kit con la siguiente documentación:</p>
                <ol>
                    <li>DNI</li>
                    <li>CERTIFICADO MÉDICO. No aceptamos foto del celular. La organización se quedará con el certificado, por lo que si lo necesitan, traigan copia.</li>
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                            <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AptoMedicoDesafio} download='Apto médico'>DESCARGAR APTO MÉDICO</Link></Button>
                            </div>
                                </div>
                    <li>DESLINDE DE RESPONSABILIDAD COMPLETO Y FIRMADO</li>
                        <div className='contenedorBoton'>
                            <div className='botonIntermedio'>
                                <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={DeslindeDesafio} download='Deslinde'>DESCARGAR DESLINDE</Link></Button>
                                    </div>
                                        </div>
                    <li>AUTORIZACIÓN MENOR DE EDAD. En caso de ser necesario</li>
                            <div className='contenedorBoton'>
                                <div className='botonIntermedio'>
                                    <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to={AutMenoresDesafio} download='Autorización menores'>DESCARGAR AUTORIZACIÓN</Link></Button>
                                        </div>
                                            </div>
                </ol>

                <h3>LUGAR Y HORARIOS DE LARGADA</h3>

                <h4><mark className='mark'>MODALIDAD 2 DÍAS</mark></h4>
                <p><strong>- DÍA:</strong> SÁBADO 28/10</p>
                <p><strong>- LUGAR DE SALIDA:</strong> Hotel Provincial, Drago 130, Sierra de la Ventana</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 15 horas</p>
                <p>-<strong>- LUGAR DE LLEGADA:</strong> Camping Fortín Pavón, Saldungaray.</p>

                <h4><mark className='mark'>MODALIDAD 2 DÍAS Y 1 DÍA</mark></h4>
                <p><strong>- DÍA:</strong> DOMINGO 29/10</p>
                <p><strong>- LUGAR DE SALIDA:</strong> Camping Fortín Pavón, Saldungaray</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 10 horas</p>
                <p><strong>- LUGAR DE LLEGADA:</strong> Camping Fortín Pavón, Saldungaray</p>

                
                <h3>CAMPAMENTO OBLIGATORIO</h3>
                <ul>
                    <li>El campamento es <b>OBLIGATORIO</b> para aquellos que participen de la modalidad de <b>dos días</b> de carrera. <b>LA CARPA CORRE POR CUENTA DEL CORREDOR</b>Quienes corran solo el domingo e igualmente quieran dormir en el camping, pueden, leer siguiente apartado.</li>
                    <li>Los corredores deberán <b>primero acreditarse</b> para luego poder acceder al camping. Cada corredor contará con un voucher y una pulsera para ingresar al predio, otorgado en la acreditación.</li>
                    <li>El camping de Saldungaray <b>abrirá sus puertas a partir del sábado 28 de octubre</b> desde temprano para aquellos que quieran armar su carpa antes de correr. Es lo recomendado. Caso contrario, podrán armarla una vez finalizado el primer día de carrera, pudiendo dejar sus objetos para acampar en el Hotel Provincial al momento de la acreditación, y posteriormente se retiran en el predio de acampe al llegar de la carrera.</li>
                    <li>La distancia entre Sierra de La Ventana y Saldungaray es de 8.5 kilómetros. La organización pondrá micro y/o autos <b>para trasladar a quienes no tengan como ir</b> desde el camping a la largada del sábado.</li>
                    <li>Los dos días de carrera incluyen: estadía en el camping, cena del día sábado y desayuno del domingo.</li>
                </ul>

                <p><strong>Cena:</strong> Pollo o asado al horno con ensaladas.</p>
                <p><strong>Postre:</strong> Frutas</p>
                <p><strong>Bebida:</strong> Gaseosas o agua mineral</p>
                <p><strong>Desayuno:</strong> Té, café, mate cocido con o sin leche. Tostadas y torta casera</p>
                <ul>
                    <li><strong>HORARIO DE CENA SÁBADO 28/10:</strong> 20 a 21:30 horas</li>
                    <li><strong>HORARIO DE DESAYUNO 29/10:</strong> 7 a 8:30 horas</li>
                </ul>

                <h3>CAMPAMENTO OPCIONAL</h3>
                <h4><mark className='mark'>SI SOS UN ACOMPAÑANTE, O UN CORREDOR DE UN DÍA Y QUERÉS ACAMPAR, PODÉS</mark></h4>
                <p>Todos los <b>corredores de un día o acompañantes</b> que quieran <b>participar del campamento</b>, podrán. Se les cobrará un adicional que incluye alojamiento en camping desde el sábado, cena y desayuno.</p>
                <p>Deberán solicitar la estadía y costo en <b>info@fcproducciones.com.ar</b> y deberán retirar el voucher en la acreditación.</p>

                <h3>RECORRIDOS</h3>
                <p>(PRÓXIMAMENTE)</p>

                <h3>ALTIMETRÍA</h3>
                <p>(PRÓXIMAMENTE)</p>

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva por lo que no tendrá premiación ni clasificación. Sí contará con remera de corredor, hidratación y medalla finisher.</p>

                <h3 id='inscripcion'>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <h4><mark className='mark'>INSCRIPCIÓN ONLINE</mark></h4>
                <p>Los pasos para inscribirse online son:</p>
                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams), colocarlo en su casillero</li>
                    <li>Elegir la distancia y si abonás el <b>TOTAL</b> o en <b>3 PAGOS</b> por transferencia bancaria o depósito bancario</li>
                    <li>Completar los datos personales</li>
                    <li>Abonar vía transferencia o depósito bancario y compartir el comprobante. <b>(IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 7 días se elimina)</b></li>
                    <li>Si eligieron la opción de 3 pagos, los próximos serán a los 30 y 60 días (Les llegará mail avisando).</li>
                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                        <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/desafio-columbia-2023'>INSCRIBITE ACÁ</Link></Button>
                            </div>
                                </div>
                </ol>
              

                <h4><mark className='mark'>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN</mark></h4>
                <p>Les llegará un mail de confirmación desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Si el mail no llega es porque indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos</p>

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
                <p><b>A PARTIR DEL 16/08/23</b></p>
                <ul>
                    <li>2 DÍAS INDIVIDUAL: <strong>$66.000</strong> pago total o 3 CUOTAS por transferencia bancaria de $22.000</li>
                    <li>2 DÍAS EQUIPO: <strong>$132.000</strong> pago total por dos corredores o 3 CUOTAS por transferencia bancaria de $44.000</li>
                    <li>1 DÍA 21K: <strong>$24.000</strong> pago total o 3 CUOTAS por transferencia bancaria de $8.000</li>
                    <li>1 DÍA 10K: <strong>$16.500</strong> pago total o 3 CUOTAS por transferencia bancaria de $5.500</li>
                    <li>KIDS: <strong>$6.000</strong> pago total</li>

                    <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                        <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/desafio-columbia-2023'>INSCRIBITE ACÁ</Link></Button>
                            </div>
                                </div>
                </ul>
                

                <h3 id='cronograma'>CRONOGRAMA GENERAL DEL EVENTO</h3>
               <h4><strong><mark className='mark'>VIERNES 27/10</mark></strong></h4>
               <ul>
                <li><strong>16 a 19 hs:</strong> Acreditación y entrega de kits. Hotel Provincial de Sierra de la Ventana, ubicado en Drago 130.</li>
               </ul>

               <h4><strong><mark className='mark'>SÁBADO 28/10</mark></strong></h4>
               <ul>
                <li><strong>10 a 17 hs:</strong> Acreditación y entrega de kits. Hotel Provincial de Sierra de la Ventana, ubicada en Drago 130.</li>
                <li><strong>14:45 hs:</strong> Charla técnica dos días. Hotel Provincial de Sierra de la Ventana, ubicado en Drago 130.</li>
                <li><strong>15 hs:</strong> Largada de la modalidad de 2 días: 21k. Hotel Provincial de Sierra de la Ventana, ubicado en Drago 130.</li>
                <li><strong>20 a 21:30 hs:</strong> Cena en el camping. Camping Fortín Pavón, Saldungaray.</li>
               </ul>

               <h4><strong><mark className='mark'>DOMINGO 29/10</mark></strong></h4>
               <ul>
                <li><strong>7 a 8:30 hs:</strong> Desayuno en el Camping Fortín Pavón</li>
                <li><strong>7:30 a 9:30 hs:</strong> Entrega de Kits (modalidad un día) a 100 metros del arco de salida, en el "Centro de Interpretación de la obra de Francisco Salamone", Av. Corrales 202, predio del Camping Fortín Pavón.</li>
                <li><strong>9:45 hs:</strong> Charla técnica previa largada. Camping Fortín Pavón, Saldungaray.</li>
                <li><strong>10 hs:</strong> Largada 2 días + 1 día: 21K y 10K. Camping Fortín Pavón, Saldungaray.</li>
                <li><strong>13 / 13:30  hs:</strong> Largada Kids (horario aproximado). Camping Fortín Pavón, Saldungaray.</li>
                <li><strong>14 / 14:30 hs:</strong> Premiación (horario aproximado). Camping Fortín Pavón, Saldungaray.</li>
               </ul>

               <h3 id='reglamento'>REGLAMENTO DESAFÍO COLUMBIA</h3>
               <p>La organización controlará el cumplimiento del reglamento por parte de los competidores y decidirá sobre cualquier tema que tenga que ver con la carrera. Los corredores deberán remitirse al mismo ante cualquier duda sobre temas técnicos, de circuito, competencia, clasificaciones y demás.</p>
               <ul>
                <li>La participación en la carrera implica su responsabilidad por los datos suministrados en la ficha de inscripción, su aceptación plena del reglamento, bases y condiciones del evento, y el pago de la inscripción.</li>
                <li>La Organización podrá impedir que un participante continúe interviniendo en la competencia, en caso de que el staff médico lo aconseje. La Organización podrá también realizar modificaciones de distancias, recorridos y horarios por factores climáticos, de seguridad y/u otros motivos. Tales decisiones no darán derecho a reclamo alguno hacia la Organización, sponsors y/o staff médico.</li>
               </ul>

               <h4><mark className='mark'>ABANDONO</mark></h4>
               <p>En caso de abandono, el competidor tiene la obligación indelegable de avisar a la Organización. El aviso deberá ser realizado únicamente en los Puestos de Asistencia, en la Largada o Meta. Los banderilleros o personal fuera de estos lugares no están autorizados a registrar el aviso de abandono. Es muy importante dar aviso de abandono, pues de lo contrario el participante se presumirá extraviado y generará inconvenientes evitables.</p>

                <h4><mark className='mark'>RECLAMOS</mark></h4>
                <p>Todos los reclamos deberán ser presentados por escrito a la organización luego del evento. Las resoluciones que determine el director serán comunicadas a los competidores, no existiendo posibilidad de reclamo alguno al respecto.</p>

                <h4><mark className='mark'>CERTIFICADO MÉDICO</mark></h4>
                <p>El certificado médico que se debe presentar tendrá que ser de no más de un año de vigencia. Si el corredor no va a dejar el original (porque lo necesita) es obligatorio traer una copia del mismo, de lo contrario la organización se quedará con el certificado original sin excepción.</p>
                <p>La organización se reserva el derecho, bajo la consulta previa al staff médico, de prohibir a un competidor de realizar y/o continuar la competencia si a criterio de la organización existe riesgo para la salud del mismo.</p>


            <h3>ELEMENTOS OBLIGATORIOS PARA LA CARRERA</h3>
               <ul>
                <li><strong>NÚMERO DE CORREDOR con CHIP incluido</strong>.<br></br>
                Será provisto por la organización y deberá estar visible en todo momento.</li>
                <li><strong>APTO MÉDICO</strong></li>
                <li><strong>REMERA OFICIAL DE CORREDOR</strong> <br></br>
                Será provista por la organización.</li>
               </ul>

               <h3>ELEMENTOS OBLIGATORIOS PARA EL CAMPAMENTO</h3>
                <ul>
                    <li><strong>APTO MÉDICO</strong><br></br>Entregar en acreditación</li>
                    <li><strong>REMERA</strong><br></br>Provista por la organización</li>
                    <li><strong>NÚMERO DE CORREDOR</strong><br></br>Con CHIP incluido. Debe estar visible en todo momento. Provisto por la organización.</li>
                    <li><strong>RECIPIENTE PARA 1 LITRO DE AGUA</strong></li>
                </ul>


               <h3>ELEMENTOS RECOMENDADOS</h3>
               <ul>
                <li>Bastones</li>
                <li>Ojotas: fundamental para tener los pies al aire libre después de cada etapa</li>
                <li>Sombrero o gorra</li>
                <li>Campera de lluvia</li>
                <li>2 pares de zapatillas con buen uso previo, ya que se mojarán en la primera y segunda etapa</li>
                <li>Protector solar</li>
                <li>Toalla</li>
                <li>Moleskin o similar para las ampollas en los pies</li>
                <li>Silbato</li>
                <li>Mochila con reservorio de agua o Gatorade</li>
                <li>Kit de primeros auxilios</li>
                <li>Toallitas higiénicas</li>
               </ul>

                
                <h3>ELEMENTOS OBLIGATORIOS PARA EL CAMPAMENTO</h3>
                <ul>
                    <li>Carpa</li>
                    <li>Bolsa de dormir</li>
                    <li>Platos, cubiertos y vaso térmico</li>
                </ul>

                <h3>POLÍTICA DE DEVOLUCIÓN DE INSCRIPCIONES</h3>
                <p>Las inscripciones NO tienen devolución.</p>
               
              
                <h4><mark className='mark'>TRANSFERENCIA A OTRO CORREDOR</mark></h4>
                <p>Hasta el viernes 13/9, inclusive, podrá transferir el 100% de lo abonado a otro corredor para la misma edición. Deberá tener en cuenta que: solo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 15 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
                <p>En caso de no avisar con ese tiempo de anticipación se pierde la inscripción, ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</p>

                <h4><mark className='mark'>TRANSFERENCIA POR NO PODER PARTICIPAR</mark></h4>
                <p>Hasta el viernes 13/9, inclusive, podrá transferir el 100% de lo abonado a cuenta de la inscripción únicamente de la edición del año siguiente de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
              
    
               <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
               <p>Para los corredores que se hayan inscripto, en caso de querer cambiar de distancia, tener en cuenta que:</p>
               <ol>
                <li>Solo se considerarán aquellos casos en que se solicite al mail de la organización: <b>info@fcproducciones.com.ar</b></li>
                <li>A partir del lunes 16/9 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</li>
                <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción.</li>
                <li>Si el cambio es a una distancia menor, NO se le devolverá dinero</li>
               </ol>

                <h4><mark className='mark'>NÚMERO DE CORREDOR</mark></h4>
                <p>Disponible una semana antes del evento desde su inscripción.</p>

                <h4><mark className='mark'>DERECHOS</mark></h4>
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
                <p>Los auspiciantes pueden disponer de premios especiales a los participantes, sin que esto implique responsabilidad alguna de la organización. </p>
                <p>Los premios no tienen cambio.</p>

                <h4><mark className='mark'>ENVÍO DE PREMIOS</mark></h4>
                <p>Toda persona que no se encuentre presente al momento de la premiación y le corresponda premio, podrá solicitarlo vía mail y se le enviará por terminal de micros, Oca o Correo Argentino. El COSTO de ENVÍO corre por cuenta del corredor, sin excepción.</p>

                <h3>TOMA DE TIEMPO Y CLASIFICACIONES</h3>
                <p>La toma de tiempo y clasificación será electrónica con chip. Los participantes deberán retirar el chip en la acreditación y utilizarlo obligatoriamente en la carrera, a fin de poder ser clasificados. El chip deberá ser utilizado de forma VISIBLE.</p>
                <p>El tiempo de los cronómetros comienza con la largada de la competencia y se detiene una vez cruzada la meta.</p>
                <p>Los resultados se publicarán en esta página el mismo día a la noche o el día posterior al evento.</p>

                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso:</p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares. Lo que llevás a la montaña, vuelve con vos</li>
                    <li>Respetar la flora y fauna</li>
                    <li>Solo dejar la huella de tu calzado y no de tu basura</li>
                </ul>

                <div className='contenedorBoton'>
                        <div className='botonIntermedio'>
                        <Button variant="success" size='lg' className='boton'><Link target='_blank' rel="noopener noreferrer" to='https://eventols.com/e/desafio-columbia-2023'>INSCRIBITE ACÁ</Link></Button>
                            </div>
                                </div>
        </section>
    );
}

export default ElDesafio;