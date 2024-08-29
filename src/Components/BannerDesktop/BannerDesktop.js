import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Img/bannerDesktop/Banner1.jpg';
import Banner2 from '../../Img/bannerDesktop/Banner2.jpg'; 


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

     

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner4}
          alt="First slide"
          id='img'
        />
      </Carousel.Item> */}
    

    </Carousel>
    </section>
    );
}

export default BannerDesktop;