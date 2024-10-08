import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Img/bannerMobile/banner1.jpg';
import Banner2 from '../../Img/bannerMobile/banner2.jpg';

/* import Banner5 from '../../Img/bannerMobile/banner5.jpg';
import Banner6 from '../../Img/bannerMobile/banner6.jpg'; */

import '../Banner/banner.css'

function Banner() {
  return (
    <section>
    <Carousel fade className='carruselMobile'>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
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

     {/*  <Carousel.Item>
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
          alt="For slide"
        />
      </Carousel.Item> */}

     {/*  <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner5}
          alt="Five slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner6}
          alt="Six slide"
        />
      </Carousel.Item> */}

    </Carousel>
    </section>
  );
}

export default Banner;