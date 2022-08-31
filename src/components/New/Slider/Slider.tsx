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
      spaceBetween={20}
      slidesPerGroup={1}
      // loop={true}
      navigation={true}
      modules={[Navigation]}
      className="swiper-container"
      breakpoints={{
        1300: {
          // width: 768,
          slidesPerView: 5,
        },
        840: {
          // width: 768,
          slidesPerView: 4,
          spaceBetween: 10,
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
