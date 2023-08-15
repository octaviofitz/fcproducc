import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

/* img */
import BannerTabletIMG from '../../Img/index/BannerDesktop/banner1.webp'

import './bannerTablet.css'

function BannerTablet() {
    return (
        <section>
            <Carousel fade className='CarruselTablet'>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={BannerTabletIMG}
                alt="First slide"
            />
            </Carousel.Item>
            </Carousel>

        </section>
    );
}

export default BannerTablet;