import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

/* Imágenes */
import Banner1 from '../../Img/index/BannerDesktop/banner1.JPG';
import Banner2 from '../../Img/index/BannerDesktop/banner2.JPG';

import '../BannerDesktop/bannerDesktop.css'

function BannerDesktop() {
    return (
        <section className='carruseldesktop'>
    <Carousel fade >

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
          id='prueba'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
          id='prueba'
        />
      </Carousel.Item>

    </Carousel>
    </section>
    );
}

export default BannerDesktop;