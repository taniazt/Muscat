import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import './Slider.scss';

import { Navigation } from 'swiper';

import { cards } from '../../../mock-api/index';
import { NewCard } from '../NewCard';

const slides = cards;

export const Slider = () => (
  <div className="slider-wrapper">
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      slidesPerGroup={1}
      navigation={true}
      modules={[Navigation]}
      className="swiper-container"
      breakpoints={{
        1350: {
          slidesPerView: 5,
        },

        960: {
          slidesPerView: 4,
        },

        630: {
          slidesPerView: 3,
        },

        450: {
          slidesPerView: 2,
        },

        340: {
          slidesPerView: 1,
        },
      }}
    >
      {slides.map((item) => (
        <SwiperSlide>
          <NewCard
            key={item.name}
            imageSrc={item.imageSrc}
            category={item.category}
            name={item.name}
            price={item.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
