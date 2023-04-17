import Carousel from 'react-bootstrap/Carousel';

/* img */
import Carrusel1 from '../../Img/index/Carrusel1.webp'
import Carrusel2 from '../../Img/index/Carrusel2.webp'
import Carrusel3 from '../../Img/index/Carrusel3.webp'
import Carrusel4 from '../../Img/index/Carrusel4.webp'

import '../Banner/banner.css'

function Banner() {
  return (
    <section className='carrusel'>
    <Carousel fade >

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrusel1}
          alt="First slide"
          id='prueba'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrusel2}
          alt="Second slide"
          id='prueba'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrusel3}
          alt="Third slide"
          id='prueba'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrusel4}
          alt="Third slide"
          id='prueba'
        />
      </Carousel.Item>

    </Carousel>
    </section>
  );
}

export default Banner;