import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Img/bannerDesktop/banner1.webp';
import Banner2 from '../../Img/bannerDesktop/banner2.webp'; 
import Banner3 from '../../Img/bannerDesktop/banner3.webp'; 
import Banner4 from '../../Img/bannerDesktop/banner4.webp'; 


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
          alt="First slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner4}
          alt="First slide"
          id='img'
        />
      </Carousel.Item>
    

    </Carousel>
    </section>
    );
}

export default BannerDesktop;