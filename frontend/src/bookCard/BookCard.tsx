import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './bookCard.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6';
const BookCard = ({ headline, books }: { headline: any, books: any }) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h1 className='text-5xl text-center font-bold text-black my-5 ' >{headline}</h1>

      <div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book: any) => {
            const { _id, authorName, bookTitle, imageURL, bookDescription, bookPDFURL } = book;
            return (


              <SwiperSlide key={_id}>
                <Link to='/'>
                  <div>
                    <img src={imageURL} alt='book img' />

                    <div className='absolute  top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>

                      <FaCartShopping className='w-4 h-4 text-white' />
                    </div>
                  </div>

                  <div>
                    <h3>{bookTitle}</h3>

                    <p>{authorName}</p>
                    <p>100$</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>


      </div>


    </div>
  )
}

export default BookCard
