import React from "react";
import Carousel from 'react-bootstrap/Carousel';

/* img */
import Banner2 from '../../Img/index/banner2.webp'
import Banner3 from '../../Img/index/banner3.webp' 
import Banner4 from '../../Img/index/banner4.webp' 

import '../Banner/banner.css'

function Banner() {
  return (
    <section>
    <Carousel fade className='carruselMobile'>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/banner1.webp"}
          alt="First slide"
        />
      </Carousel.Item>
 
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner4}
          alt="Third slide"
        />
      </Carousel.Item>   

    </Carousel>
    </section>
  );
}

export default Banner;