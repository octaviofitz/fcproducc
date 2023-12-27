import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import '../Banner/banner.css'

function Banner() {
  return (
    <section>
    <Carousel fade className='carruselMobile'>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner1.webp"}
          alt="First slide"
        />
      </Carousel.Item>
 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner2.webp"}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner3.webp"}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner4.webp"}
          alt="For slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner5.webp"}
          alt="Five slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner6.webp"}
          alt="Six slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner7.webp"}
          alt="Seven slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner8.webp"}
          alt="Eight slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner9.webp"}
          alt="Nine slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner10.webp"}
          alt="Ten slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner11.webp"}
          alt="Eleven slide"
        />
      </Carousel.Item>

       <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerMobile/banner12.webp"}
          alt="Twelve slide"
        />
      </Carousel.Item>

    </Carousel>
    </section>
  );
}

export default Banner;