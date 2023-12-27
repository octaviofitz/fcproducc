import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Img/index/BannerDesktop/banner1.webp';
import Banner2 from '../../Img/index/BannerDesktop/banner2.webp'; 
import Banner4 from '../../Img/index/BannerDesktop/banner4.webp'; 

import '../BannerDesktop/bannerDesktop.css';

function BannerDesktop() {
    return (
      <section>
    <Carousel fade className='carruselDesktop'>

    <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerDesktop/banner1.webp"}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>
 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerDesktop/banner2.webp"}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerDesktop/banner3.webp"}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "bannerDesktop/banner4.webp"}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>
    

    </Carousel>
    </section>
    );
}

export default BannerDesktop;