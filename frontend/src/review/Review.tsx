// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa6';

import { Avatar } from 'flowbite-react';
import profileImg from '../assets/profile.jpg'

const reviewData = [
  {
    id: 1,

  }, {
    id: 2,

  }, {
    id: 3,

  }, {
    id: 4,

  }, {
    id: 5,

  },
]

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
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
          {reviewData.map((data) => {
            return (
              <SwiperSlide key={data.id} className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border' >
                <div className='space-y-6 '>
                  <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='mt-7 text-left'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                    <Avatar img={profileImg} className='w-10 mb-4' rounded bordered />
                    <h5 className='text-lg font-medium'>Mark Ping </h5>
                    <p className='text-base'>CEO , ABC Company</p>
                  </div>
                </div>
              </SwiperSlide>

            );
          })}
        </Swiper>

      </div>
    </div >
  )
}

export default Review
