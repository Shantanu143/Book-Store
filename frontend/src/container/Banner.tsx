import React from 'react'
import BannerCard from '../bannerCard/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-122 py-40' >

        <div className='md:w-1/2 space-y-8 h-full' >
          <h2 className='text-5xl font-bold leading-snug text-black' >Buy and sell your book
            <span className='text-blue-700'> for the best prices</span>
          </h2>
          <p className='md:w-4/5' >Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          <div>
            <input type='search' name='search' id='search' placeholder='Search a book..' className='py-2 px-2 rounded-s-sm outline-none' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        <div> <BannerCard /> </div>
      </div>
    </div>
  )
}

export default Banner
