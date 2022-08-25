import React from 'react';
import classes from './Find.module.css';
import Card from './Card';
import dressOne from '../../Images/dress1.jpg';
import dressTwo from '../../Images/dress2.jpg';
import dressThree from '../../Images/dress3.jpg';
import dressFour from '../../Images/dress4.jpg';
import dressFive from '../../Images/dress5.jpg';
import dressSix from '../../Images/dress6.jpg';
import dressSeven from '../../Images/dress7.jpg';
import dressEight from '../../Images/dress8.jpg';
import dressNine from '../../Images/dress9.jpg';
import dressTen from '../../Images/dress10.jpg';
import dressEleven from '../../Images/happy-girls.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'

const Find = () => {
    return(
        <div className={classes.find}>
            <div className={classes.heading}>
                <h1>Find your style</h1>
                <div className={classes.text_bg}>
                 <p>
                    <span>Explore the world's largest fashion place</span>
                </p>
                </div>
                
            </div>
            <div className={classes.slider_container}>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        340: {
            width: 200,
            slidesPerView: 1,
      },
        768: {
            width: 768,
            slidesPerView: 4,
        },
    1040: {
        width: 1040,
        slidesPerView:5,
    },
}}
      pagination={{ eclickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <Card className={classes.card}>
                <img src={dressOne} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressTwo} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressThree} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressFour} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card>
                <img src={dressFive} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressSix} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressSeven} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressEight} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressNine} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressTen} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
            <SwiperSlide>
            <Card >
                <img src={dressEleven} alt='/' className={classes.image}/>
            </Card>
            </SwiperSlide>
    </Swiper>
            </div>
        </div>
    )
}

export default Find;