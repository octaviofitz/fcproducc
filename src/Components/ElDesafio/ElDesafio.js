import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import elDesafio from '../../Img/elDesafio/elDesafio.webp';
import '../ElDesafio/elDesafio.css'

function ElDesafio() {
    return (
        <section className='elDesafio'>
            <h2 className='titulo'>EL DESAFÍO</h2>
            <img src={elDesafio} alt='Maratón El Desafío' className='flyer' />
            <p className='descripcion'>El Desafío es una carrera que te enfrenta como corredor no solo con tus ganas de vivir la naturaleza desde el deporte sino de ser parte de ella al 100%, realizando un recorrido único y la experiencia de acampar y vivir el clima de camaradería entre deportistas que buscan lo mismo que vos, disfrutar la Aventura.</p>

            <div className='botones'>
                <Button variant="success" size='lg' className='boton'><Link to='#cartas'>Cartas</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/m42/resultados2022'>Resultados 2022</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/m42/alojamientos'>Alojamientos</Link></Button>
                <Button variant="success" size='lg' className='boton'><Link to='/m42/fotos2022'>Fotos 2022</Link></Button>
                </div>

                <h3 id='cartas'>Cartas</h3>

                <h4>DATOS GENERALES</h4>
                <p><strong>Carrera:</strong> El Desafío Columbia</p>
                <p><strong>Fecha:</strong> 28 y 29 de octubre 2023</p>
                <p><strong>Lugar:</strong> Sierra de La Ventana a Saldungaray, comarca de Tornquist, provincia de Buenos Aires.</p>
                <p><strong>Concepto:</strong> Carrera de trail running</p>

                <h3>Modalidad</h3>
                <h4>DOS MODALIDADES EN UN MISMO FIN DE SEMANA ¡VOS ELEGÍS CUÁL!</h4>
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
                <p><b>*La edad mínima para poder correr El Desafío Columbia es a partir de los 16 años.</b></p>
                <p><b>*Los menores de 18 años tendrán que llevar una autorización firmada por los padres para poder correr. De lo contrario, no podrá participar. (BOTÓN DE DESCARGA)</b></p>

                <h3>DESCUENTO PARA TEAMS DE ENTRENAMIENTO</h3>
                <p>Otorgamos un 10% de descuento en cada inscripción y liberamos únicamente a 1 profesor/a. La condición para obtenerlo es ser 10 corredores o más. La forma de inscripción es primero consultando a nuestro mail <b>info@fcproducciones.com.ar</b>, así les enviamos el CÓDIGO DE INSCRIPCIÓN el cual habilita el descuento. Si se anotan sin pedirlo o sin ingresarlo, no obtendrán el descuento y no podrá aplicarse luego.</p>

                <h3>REMERAS</h3>
                <p>Los talles de adultos van del XS al XXL. La de niños de 6 a 12. El talle de remera elegido al momento de inscribirse <b>no tiene cambio</b>.</p>

                <h3>LA INSCRIPCIÓN A EL DESAFÍO COLUMBIA INCLUYE</h3>
                <ul>
                    <li>Derecho a participación</li>
                    <li>Estadía para quienes corren 2 días en el camping desde el sábado (la carpa corre por cuenta del corredor).</li>
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

                <h3>IMPORTANTE: ¿CÓMO ME INSCRIBO?</h3>
                <h4>INSCRIPCIÓN ONLINE</h4>
                <p>Los pasos para inscribirse online son:</p>
                <ol>
                    <li>En caso de tener un código de descuento por ser 10 o más en un running team (leer apartado de teams), colocarlo en su casillero</li>
                    <li>Elegir la distancia y si abonás el TOTAL o en 3 pagos por transferencia bancaria o depósito*</li>
                    <li>Completar los datos personales</li>
                    <li>Abonar vía transferencia o depósito y compartir el comprobante. <b>(IMPORTANTE: si no lo comparten la inscripción queda pendiente y a los 7 días se elimina)</b></li>
                </ol>
                <p>*Quienes abonen en 3 pagos, serán los próximos dos a 30 y 60 días. Por mail les avisará el momento en el que esté disponible. Si no abonan en fecha cada pago, el costo se actualizará al precio vigente</p>

                <h4>CÓMO SABER SI REALIZAMOS BIEN EL PROCEDIMIENTO DE INSCRIPCIÓN:</h4>
                <p><b>Les llegará un mail de confirmación desde Eventols, donde pueden ver el estado de su inscripción, y por ese mismo mail, la clasificación cuando esté disponible. Si el mail no llega es porque indicaron mal su correo o porque está en correo no deseado. Si eso sucede, marcalo como correo deseado y agreganos a tu lista de contactos</b></p>

                <h3>INSCRIPCIÓN PRESENCIAL</h3>
                <p>Se abona el <b>TOTAL</b> de la carrera únicamente en <b>EFECTIVO</b> en los centros de inscripción.</p>
                <h4>CENTROS DE INSCRIPCIÓN:</h4>
                <ul>
                    <li>Aerorunners: Av. Córdoba 1360, CABA. Tel: 011-5811-1043</li>
                    <li>TriSport Necochea: Calle 57, 3043. Tel: 2262-52-6684</li>
                    <li>BicyShop Mar del Plata: Av. Independencia 3565. Tel: 0223-474-9816</li>
                    <li>La Fe Deportes: Loria 193, Lomas de Zamora. Tel: 11-6069-3133</li>
                    <li>Adrogué Outdoors: Av. Mitre 1110, Adrogué. Tel: 4293-6350</li>
                </ul>

                <h3>ACREDITACIÓN Y ENTREGA DE KITS</h3>

                <h4>- VIERNES 27/10 de 16 a 19hs</h4>
                <p>Hotel Provincial de Sierra de la Ventana (Drago 130)</p>

                <h4>- SÁBADO 28/10 de 10 a 17hs</h4>
                <p>Hotel Provincial de Sierra de la Ventana (Drago 130)</p>
                <p>(Habrá prioridad hasta las 14 hs para quienes corren los dos días)</p>

                <h4>- DOMINGO 29/10 de 7:30 a 9:30 am</h4>
                <p>Centro de Interpretación de la obra de Francisco Salamone (300, Av. Corrales 202) (Predio del camping Fortin Pavón).</p>

                <p>Por razones operativas, <b>recomendamos no venir el último día</b>. El kit puede retirarlo otra persona llevando los papeles firmados por el titular (ver apartado siguiente).</p>


                <h3>PAPELES A PRESENTAR EN ACREDITACIÓN</h3>
                <p>Los inscriptos deberán acreditarse y retirar su kit con la siguiente documentación:</p>
                <ol>
                    <li>DNI</li>
                    <li>CERTIFICADO MÉDICO. No aceptamos foto del celular. La organización se quedará con el certificado, por lo que si lo necesitan, traigan copia. (BOTÓN DE DESCARGA)</li>
                    <li>DESLINDE DE RESPONSABILIDAD COMPLETO Y FIRMADO.(BOTÓN DE DESCARGA)</li>
                    <li>AUTORIZACIÓN MENOR DE EDAD. En caso de ser necesario.(BOTÓN DE DESCARGA)</li>
                </ol>

                <h3>LUGAR Y HORARIOS DE LARGADA</h3>

                <h4>MODALIDAD 2 DÍAS:</h4>
                <p><strong>- DÍA:</strong> SÁBADO 28/10</p>
                <p><strong>- LUGAR DE SALIDA:</strong> Hotel Provincial, Drago 130, Sierra de la Ventana</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 15 horas</p>
                <p>-<strong>- LUGAR DE LLEGADA:</strong> Camping Fortín Pavón, Saldungaray.</p>

                <h4>MODALIDAD 2 DÍAS Y TAMBIÉN 1 DÍA: </h4>
                <p><strong>- DÍA:</strong> DOMINGO 29/10</p>
                <p><strong>- LUGAR DE SALIDA:</strong> Camping Fortín Pavón, Saldungaray</p>
                <p><strong>- HORARIO DE SALIDA:</strong> 10 horas</p>
                <p><strong>- LUGAR DE LLEGADA:</strong> Camping Fortín Pavón, Saldungaray</p>

                
                <h3>CAMPAMENTO OBLIGATORIO</h3>
                <ul>
                    <li>El campamento es <b>OBLIGATORIO</b> para aquellos que participen de la modalidad de <b>dos días</b> de carrera. <b>LA CARPA CORRE POR CUENTA DEL CORREDOR</b>.</li>
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
                <h4>SI SOS UN ACOMPAÑANTE, O UN CORREDOR DE UN DÍA Y QUERÉS ACAMPAR, PODÉS</h4>
                <p>Todos los <b>corredores de un día o acompañantes</b> que quieran <b>participar del campamento</b>, podrán. Se les cobrará un adicional que incluye alojamiento en camping desde el sábado, cena y desayuno.</p>
                <p>Deberán solicitar la estadía y costo en <b>info@fcproducciones.com.ar</b> y deberán retirar el voucher en la acreditación.</p>
                
                <h3>ELEMENTOS OBLIGATORIOS PARA EL CAMPAMENTO</h3>
                <ul>
                    <li>CARPA</li>
                    <li>BOLSA DE DORMIR</li>
                    <li>PLATOS, CUBIERTOS Y VASO TÉRMICO</li>
                </ul>

                <h3>ELEMENTO RECOMENDADO PARA EL CAMPAMENTO</h3>
                <ul>
                    <li>LINTERNA FRONTAL</li>
                </ul>
               
               <h3>ELEMENTOS OBLIGATORIOS PARA LA CARRERA</h3>
               <ul>
                <li><strong>NÚMERO DE CORREDOR con CHIP incluido</strong>.<br></br>
                Será provisto por la organización y deberá estar visible en todo momento.</li>
                <li><strong>APTO MÉDICO</strong></li>
                <li><strong>REMERA OFICIAL DE CORREDOR</strong> <br></br>
                Será provista por la organización.</li>
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

               <h3>CRONOGRAMA</h3>
               <h4><strong>VIERNES 27/10</strong></h4>
               <ul>
                <li>16 a 19 hs: Acreditación y entrega de kits</li>
               </ul>
               <h4><strong>SÁBADO 28/10</strong></h4>
               <ul>
                <li>10 a 17 hs: Acreditación y entrega de kits</li>
                <li>14:45 hs: Charla técnica dos días</li>
                <li>15 hs: Largada de la modalidad de 2 días: 21k </li>
                <li>20 a 21:30 hs: Cena en el camping.</li>
               </ul>
               <h4><strong>DOMINGO 29/10</strong></h4>
               <ul>
                <li>7 a 8:30 hs: Desayuno en el camping</li>
                <li>7:30 a 9:30 hs: Entrega de Kits (modalidad un día)</li>
                <li>9:45 hs: Charla técnica</li>
                <li>10 hs: Largada 2 días + 1 día: 21K y 10K</li>
                <li>13 / 13:30  hs: Largada Kids (horario aproximado)</li>
                <li>14 / 14:30 hs: Premiación (horario aproximado)</li>
               </ul>

               <h3>CAMBIO DE DISTANCIA O DE OTRO TIPO</h3>
               <p>Aquellos corredores inscriptos que se quieran cambiar de distancia, tengan en cuenta lo siguiente:</p>
               <ol>
                <li>Solo se considerarán aquellos casos en que se solicite al mail de la organización: <b>info@fcproducciones.com.ar</b></li>
                <li>Solo hasta el séptimo día antes de la fecha de la carrera podrán cambiar</li>
                <li>Si el cambio es a una distancia mayor, abona la diferencia del monto de inscripción</li>
                <li>Si el cambio es a una distancia menor, NO se le devolverá dinero</li>
               </ol>
                <p>Dentro de los 6 días previos a la carrera NO podrán cambiar de distancia. A partir del lunes 16/10 NO se aceptarán más modificaciones en las inscripciones realizadas, ya sea de talle de remera, cambio de distancia o similar.</p>

                <h3>RECORRIDOS</h3>
                <p>(PRÓXIMAMENTE)</p>

                <h3>ALTIMETRÍA</h3>
                <p>(PRÓXIMAMENTE)</p>

                <h3>RUNNING KIDS</h3>
                <p>Tiene como objetivo ofrecer a los más chicos la oportunidad de disfrutar de la aventura de forma sana y no competitiva, siendo protagonistas de un gran evento junto a sus padres o familiares. La distancia kids no será competitiva por lo que no tendrá premiación ni clasificación. Sí contará con remera de corredor, hidratación y medalla finisher.</p>

                <h3>MEDIO AMBIENTE</h3>
                <p>Es importante que entre todos preservemos y cuidemos la naturaleza, es nuestro principal requisito. Por eso:</p>
                <ul>
                    <li>No se deben dejar residuos durante el recorrido y resto de lugares. Lo que llevás a la montaña, vuelve con vos. </li>
                    <li>Respetar la flora y fauna</li>
                    <li>Solo dejar la huella de tu calzado y no de tu basura</li>
                </ul>

                <h3>REGLAMENTO</h3>
                <h4>TRANSFERENCIA A OTRO CORREDOR</h4>
                <p>Hasta 2 semanas antes de la fecha de la carrera, podrá transferir el 100% de lo abonado a otro corredor. Deberá tener en cuenta que: sólo se considerarán aquellos casos en que se solicite a la organización por mail y que solamente hasta 7 días antes de la fecha de la carrera podrá transferir su inscripción a otro corredor.</p>
              <p> <b>En caso de no avisar con ese tiempo de anticipación se pierde la inscripción ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</b></p>

                <h4>TRANSFERENCIA POR NO PODER PARTICIPAR</h4>
                <p>Hasta 2 semanas antes de la fecha de la carrera, podrá transferir el 100% de lo abonado a cuenta de la inscripción de la edición de próximas carreras de la organización. De optar por esta opción, la inscripción próxima será intransferible para otra edición o participante y sin devolución total o parcial.</p>
               <p><b> En caso de no avisar con ese tiempo de anticipación se pierde la inscripción ya que damos por válida la asistencia y reservamos su remera, dorsal, hidratación, seguro y más.</b></p>
        </section>
    );
}

export default ElDesafio;