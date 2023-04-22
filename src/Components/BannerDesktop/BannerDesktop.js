import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Img/index/BannerDesktop/banner.jpg';
import Banner2 from '../../Img/index/BannerDesktop/banner2.jpg';
import Banner3 from '../../Img/index/BannerDesktop/banner3.jpg';

import '../BannerDesktop/bannerDesktop.css';

function BannerDesktop() {
    return (
      <section>
    <Carousel fade className='carruselDesktop'>

    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Thirst slide"
          id='img'
        />
      </Carousel.Item>

    </Carousel>
    </section>
    );
}

export default BannerDesktop;