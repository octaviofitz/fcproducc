import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import m42General from '../../Img/m42/flyerM42.webp'
import '../M42/m42.css'

function M42() {
    return (
        <section className='m42' id='m42'>

            <h2 className='titulo'>M42 MARATÓN DE MONTAÑA LOS ALERCES</h2>
            <img src={m42General} alt='Maratón M42' className='flyer' />
            <p className='descripcion'>AÑO TRAS AÑO SE CONSOLIDA ESTE EVENTO CONVIRTIÉNDOSE EN EL CLÁSICO DE TRAIL Y ULTRA DE LA COMARCA DESDE HACE 11 AÑOS <br></br> UNA CARRERA COMPETITIVA Y SOCIAL A LA VEZ EN UN MARCO DE PAISAJES INCREÍBLES Y CON MÁS DE 2.000 CORREDORES.<br></br> PLANTEAMOS CARRERAS COMPETITIVAS DE 50, 42, 25 Y 10 KM, REALIZANDO UNO DE LOS RECORRIDOS MÁS EXIGENTES DEL TRAIL RUNNING<br></br>.EL M42 LOS ALERCES ES UNA CARRERA QUE TE INVITA A VIVIR UNA MARAVILLOSA EXPERIENCIA CON AMIGOS Y FAMILIA. DISFRUTANDO DEL PAISAJE CON SIERRAS, ARROYOS, SENDEROS Y BOSQUES CON GRAN VARIEDAD DE PINOS, CEDROS, ÁLAMOS, AROMOS Y OLMOS.</p>

                <div className='botones'>
                <Button variant="warning" size='lg' className='boton'><Link to='#cartas'>Cartas</Link></Button>
                <Button variant="warning" size='lg' className='boton'><Link to='/m42/resultados2022'>Resultados 2022</Link></Button>
                <Button variant="warning" size='lg' className='boton'><Link to='/m42/alojamientos'>Alojamientos</Link></Button>
                <Button variant="warning" size='lg' className='boton'><Link to='/m42/fotos2022'>Fotos 2022</Link></Button>

                </div>
                <h3 id='cartas'>Cartas</h3>

                <h4>DATOS GENERALES</h4>
                <p>Fechas: 27 Y 28 DE MAYO 2023</p>
                <p>Fecha y lugar largada 50 y 42k: Sábado 27 de mayo (Los Alerces, Gnena Kena s/n y Grindella (ex Melicca), San Andrés de la Sierra. Tornquist, Buenos Aires).Lugar llegada 50 y 42k: Delegación municipal Villa Ventana (Plaza Salerno).</p>
                <p>Fecha y lugar largada y llegada 25k,10k y Kids: Domingo 28 de mayo (Estancia Las Vertientes, Ruta 76, Km 221, Villa Ventana, Tornquist, Buenos Aires).</p>
                <p>Concepto: Carrera de Ultra trail - trail - aventura.</p>
                <p>Distancias: 50K, 42K, 25K, 10K, KIDS.</p>
                <p>Modalidad: Individual</p>

                <h4>CATEGORÍAS</h4>
                <p>INDIVIDUAL: Damas y caballeros *</p>
                <p>(Hasta 25 años/ 26 a 35/ 36 a 45 años / 46 a 55 años / 56 a 65 años/ +66 años)</p>
                <p>LAS EDADES SERÁN COMPUTADAS AL 28/05/2023.</p>
                <p>*La edad para poder correr el M42 es a partir de los 16 años.</p>
                <p>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr el M42. De lo contrario, no podrá participar. (BOTÓN DE DESCARGA)</p>

                <h4>LA INSCRIPCIÓN INCLUYE</h4>
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
                    <li>Premiación ganadores categoría</li>
                    <li>Premiación ganadores general</li>
                </ul>

                <h4>TEAMS DE ENTRENAMIENTO</h4>
                <p>Otorgamos un 10% de descuento en cada inscripción y liberamos únicamente a 1 profesor/a. La condición para obtenerlo es ser 10 corredores o más. La forma de inscripción es primero consultando a nuestro mail info@fcproducciones.com.ar, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento. Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p>
                
                <h4>REMERAS</h4>
                <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 12. El talle de remera elegido al momento de inscribirse no tiene cambio.</p>

                <h3>INSCRIPCIÓN ONLINE</h3>
                <p>Los pasos para inscribirse online son:</p>

                <ul>
                    <li>Elegir la distancia y abonar el TOTAL de la inscripción o la SEÑA del 50% por transferencia o depósito bancario.</li>
                    <li>Completar los datos personales</li>
                    <li>Abonar y compartir el comprobante. (Si no lo comparten la inscripción queda pendiente y a los 5 días SE ELIMINA Y PIERDE EL BENEFICIO).</li>
                    <li>Si eligieron la opción de pago de seña,abonan lo restante en acreditación en efectivo.</li>
                </ul>

                <p>Les llegará un mail de confirmación desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Si el mail no llega es porque indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos.</p>

                <h3>INSCRIPCIÓN PRESENCIAL</h3>
                <p>Se abona el TOTAL de la carrera únicamente en EFECTIVO en los centros de inscripción.</p>
                <h5>CENTROS DE INSCRIPCIÓN:</h5>
                <ul>
                    <li>Aerorunners: Av. Córdoba 1360 CABA Tel 011 5811-1043</li>
                    <li>TriSport Necochea: Calle 57 3043. Tel 2262 52-6684</li>
                    <li>BicyShop Mar del Plata: Av. Independencia 3565. Tel 0223-474-9816. CERRADO VACACIONES DEL 10/10 AL 24/10 INCLUSIVE.</li>
                    <li>La Fe Deportes: Loria 193, Lomas de Zamora. Tel 11-6069-3133</li>
                    <li>Adrogué Outdoors: Av. Mitre 1110, Adrogué. Tel 4293-6350</li>
                </ul>

                <h4>PAPELES A PRESENTAR EN ACREDITACIÓN*:</h4>
                <p>Los inscriptos deberán acreditarse y retirar su kit con la siguiente documentación:</p>
                <ul>
                    <li>DNI</li>
                    <li>CERTIFICADO MÉDICO. (No aceptamos foto del celular). La organización se quedará con el certificado por lo que si lo necesitan, traigan copia. (BOTÓN DE DESCARGA)</li>
                    <li>3. DESLINDE DE RESPONSABILIDAD COMPLETO Y FIRMADO . (BOTÓN DE DESCARGA)</li>
                    <li>4. AUTORIZACIÓN MENOR DE EDAD (En caso de pertenecer). (BOTÓN DE DESCARGA)</li>
                </ul>

                <h4>RETIRO DE KITS POR TERCEROS</h4>
                <p>El requisito es que se acerque con los siguientes documentos:</p>
                <ul>
                    <li>FOTOCOPIA DEL DNI DEL CORREDOR</li>
                    <li>DESLINDE DE RESPONSABILIDAD DEL CORREDOR COMPLETO Y FIRMADO POR ÉL</li>
                    <li>APTO FÍSICO DEL CORREDOR</li>
                </ul>
                <p>De no contar con estos requisitos la organización NO entregará el Kit.</p>


                <h3>RECORRIDO 50 Y 42K:</h3>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=188OABtZoQmLkQDV6yr1VhjAJgQESCww&ehbc=2E312F" width="640" height="480" className='mapas'></iframe>

                <h3>RECORRIDO 25 Y 10K:</h3>
                <p>Destildar la distancia que no se quiera ver.</p>
                <iframe src="https://www.google.com/maps/d/embed?mid=1_rIxKArmPu-MzlBcFOmp6dYxsk_UN2v1&ehbc=2E312F" width="640" height="480" className='mapas'></iframe>

                <h4>ALTIMETRÍAS</h4>

                <h5>🏃50K</h5>
                <p>📈 Desnivel: + 2.200 metros</p>
                <p>🔝 Altura máxima: 944 msnm</p>
                <p>⬇ Altura mínima: 390 msnm</p>

                <br></br>

                <h5>🏃25K</h5>
                <p>📈 Desnivel: + 616 metros</p>
                <p>🔝 Altura máxima: 548 msnm</p>
                <p>⬇ Altura mínima: 369 msnm</p>

                <br></br>

                <h5>🏃10K</h5>
                <p>📈 Desnivel: + 261 metros</p>
                <p>🔝 Altura máxima: 548 msnm</p>
                <p>⬇  Altura mínima: 369 msnm</p>

                <h3>ACREDITACIÓN Y ENTREGA DE KITS DE TODAS LAS DISTANCIAS</h3>
                
                <h4>► VIERNES 26/05*</h4>
                <p>Horario: De 10 a 18hs.</p>
                <p>Lugar: Los Alerces (Gnena Kena s/n y Grindella (ex Melicca), San Andrés de la Sierra. Tornquist, Buenos Aires.</p>
                <p>*El día y horario es todas las distancias (50k,42k,25k,10k y Kids)</p>
                <p>¿CÓMO LLEGAR A LOS ALERCES?</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.399580909211!2d-62.08592658843749!3d-38.065062030645144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec61c36c812b09%3A0x129922352fe697!2sGnena-Kena%20%26%20Melica%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1680915042499!5m2!1ses-419!2sar" width="600" height="450" className='mapas'></iframe>

                <h4>►SÁBADO 27/05 de 9 a 18 hs.</h4>
                <p>ATENCIÓN: Los horarios serán respetados por distancias. No acreditaremos a nadie fuera de su horario correspondiente.</p>
                <p>Horario 50 y 42K: 6 a 7.30 AM</p>
                <p>Micros 50 y 42K: Habrá traslados desde la Plaza Salerno de Villa Ventana hasta la largada de los 50 y 42k. El último micro saldrá a las 8 am. Deben reservar su lugar en el mismo a info@fcproducciones.com.ar</p>
                <p>→ Horario 25 y 10K: 10 a 18 hs</p>
                <p>📌 Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</p>
                <p>¿CÓMO LLEGAR A LA PLAZA SALERNO?</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100532.41661521242!2d-61.93467999999999!3d-38.05552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ecf3c631137e11%3A0x652387499a504212!2sPlaza%20Salerno!5e0!3m2!1ses-419!2sar!4v1680915128426!5m2!1ses-419!2sar" width="600" height="450" className='mapas'></iframe>

                <h4>►DOMINGO 29/05</h4>
                <p>ATENCIÓN: Los horarios serán respetados por distancias. No acreditaremos a nadie fuera de su horario correspondiente.</p>
                <p>Horario 25K: 8 a 9 am</p>
                <p>Horario 10K: 9 a 10 am</p>
                <p>📌 Lugar: Estancia Las Vertientes</p>
                <h4>Por razones operativas, recomendamos no venir el último día. El kit puede retirarlo otra persona llevando los papeles firmados por el titular (Ver "Retiro de Kits por terceros").</h4>
                <p>¿CÓMO LLEGAR A LA ESTANCIA LAS VERTIENTES?</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6281.567071671955!2d-61.943919!3d-38.075422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ec8cd2287f4b2d%3A0xffaacc594c32d622!2sEstancia%20Las%20Vertientes!5e0!3m2!1ses!2sus!4v1680915183851!5m2!1ses!2sus" width="600" height="450" className='mapas'></iframe>

                <h3>CRONOGRAMA DE SALIDAS</h3>
                <h4>► LUGAR Y HORARIOS DE LARGADA</h4>
                <p>⌚ HORARIOS DE LARGADAS POR DÍA Y DISTANCIA:</p>

                <h4>• SÁBADO 27 DE MAYO 2023</h4>
                <p>LARGADA: Los Alerces (Gnena Kena s/n y Grindella (ex Melicca), San Andrés de la Sierra. Tornquist, Buenos Aires.</p>
                <p>→ 50K y 42K: 9 am</p>
                <p>LLEGADA: Delegación municipal Villa Ventana (Plaza Salerno).</p>
                <p>Micros 50 y 42K: Habrá traslados desde la Plaza Salerno de Villa Ventana hasta la largada de los 50 y 42k. El ultimo micro saldrá a las 8 am. Deben reservar su lugar en el mismo a info@fcproducciones.com.ar</p>

                <h4>• DOMINGO 28 DE MAYO 2023</h4>
                <h4>LARGADA Y LLEGADA: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana)</h4>
                <p>→ 25K: 10 am</p>
                <p>→ 10K: 11 am</p>
                <p>→ KIDS: 13:00 hs</p>

                <h3>CRONOGRAMA CARRERA:</h3>
                <h4>VIERNES 26 DE MAYO:</h4>
                <p>Los Alerces (Gnena Kena s/n y Grindella (ex Melicca), San Andrés de la Sierra. Tornquist, Buenos Aires.</p>
                <p>De 10 a 18hs: ACREDITACIÓN TODAS LA DISTANCIAS</p>
                
                <h4>SÁBADO 27 DE MAYO:</h4>
                <ul>
                    <li>De 6.00 a 7.30 am ACREDITACIÓN 50 Y 42K Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</li>
                    <li>9 am LARGADA 50 Y 42K Lugar: Los Alerces, San Andrés de la Sierra.</li>
                    <li>De 10 a 19 hs ACREDITACIÓN 25 Y 10K Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</li>
                    <li>17 hs PREMIACIÓN 50 Y 42K Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</li>
                    <li>18 hs CHARLA TÉCNICA 25 Y 10K Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</li>
                    <li>18.30 BAILE DE TEAMS Lugar: Delegación municipal Villa Ventana (Plaza Salerno)</li>
                </ul>

                <h4>DOMINGO 28 DE MAYO: Estancia Las Vertientes (Ruta 76, Km 221, Villa Ventana).</h4>
                <ul>
                    <li>De 8 a 9 am ACREDITACIÓN 25K</li>
                    <li>De 9 a 10 am ACREDITACIÓN 10K</li>
                    <li>10 am LARGADA 25K</li>
                    <li>11 am LARGADA 10K</li>
                    <li>13 hs LARGADA KIDS</li>
                    <li>14 hs PREMIACIÓN</li>
                </ul>

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres.</p>
                <p>La carrera tendrá dos distancias:</p>
                <p>1K para niños de hasta 9 años: incluye remera - medalla e hidratación en largada.</p>
                <p>3K para niños de 10 a 15 años: incluye remera - medalla e hidratación en recorrido y largada.</p>
                <p>La distancia kids no será competitiva por lo que no tendrá premiación ni clasificación.</p>

                <h3>ELEMENTOS OBLIGATORIOS</h3>
                <ul>
                    <li>REMERA (provista por la organizacion)</li>
                    <li>NÚMERO DE CORREDOR con CHIP inclldo. El mismo debe estar visible en todo momento. (provisto por la organizacion)</li>
                    <li>APTO MÉDICO</li>
                </ul>
                <p>Llevar consigo en todas las etapas de la carrera los elementos obligatorios.</p>

                <h3>ELEMENTOS RECOMENDADOS</h3>
                <ul>
                    <li>HIDRATACIÓN PROPIA (Más allá de la provista por la organización en el recorrido de la carrera).</li>
                    <li>Casco</li>
                    <li>Anteojos para sol</li>
                    <li>Remera térmica</li>
                    <li>Calza larga</li>
                    <li>Silbato</li>
                    <li>Campera rompeviento</li>
                    <li>Mochila</li>
                </ul>

                <h3>DESCUENTO</h3>
                <h4>DESCUENTO ESPECIAL PARA CORREDORES DE 50 Y 42K QUE QUIERAN CORRER EL DOMINGO LOS 25K O 10K</h4>
                <p>Otorgamos un 20% de descuento en la inscripción de 25k o 10k. Deberá solicitar el código de descuento online para inscribirse en el día domingo (25 o 10k).</p>
                <p>*No acumulable con otros descuentos.</p>
                <p>*La inscripción es únicamente online y de forma previa, no se inscribirá el mismo día.</p>
                <p>*No se puede dar de baja ni modificar nada a partir del viernes 12/05/23.</p>
                <p>*Se inscribe en dos carreras y realiza dos acreditaciones, dos largadas, dos premiaciones, todo por separado.</p>
                <p>*No se harán devoluciones. (Ver política de devolución de inscripciones en reglamento)</p>

                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito.</p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares.</li>
                    <li>Respetar la flora y fauna.</li>
                    <li>Sólo dejar la huella de tu calzado y no de tu basura.</li>
                </ul>
        </section>
    );
}

export default M42;