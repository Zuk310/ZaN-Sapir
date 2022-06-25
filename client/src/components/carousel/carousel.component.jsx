import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


import { Autoplay, Pagination, Navigation, EffectFade  } from 'swiper';

import SliderItem from '../slider-item/slider-item.component';
import { SwiperContainer } from './carousel.styles';
import { getCarouselCards } from '../../redux/server-functions/server-functions';
import { useState } from 'react';


const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(()=>{
    getCarouselCards().then(res=>res.data).then(data => setCarouselData(data))
  },[])

  return (

    <SwiperContainer
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
          {carouselData.map(item=>{
            return (
            <SwiperSlide key={item._id}>
              <SliderItem item={item}/>
            </SwiperSlide>)
          })}
      </SwiperContainer>

  );
}


export default Carousel;