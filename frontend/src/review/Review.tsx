import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './review.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa6';

import { Avatar } from 'flowbite-react';


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-boldl'>Our Customers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className='text-amber-500 flex gap-2'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div>

              <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>

            </div>

          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Review
