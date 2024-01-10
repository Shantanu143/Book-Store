import React from 'react'
import Banner from '../container/Banner'
import BestSellBook from '../bestSellBook/BestSellBook'
import FevBook from '../fevBook/FevBook'
import PromoBanner from '../promoBanner/PromoBanner'
import OtherBooks from '../otherBooks/OtherBooks'
const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellBook />
      <FevBook />
      <PromoBanner />
      <OtherBooks />
    </div>
  )
}

export default Home
