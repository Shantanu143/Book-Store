import Banner from '../container/Banner'
import BestSellBook from '../bestSellBook/BestSellBook'
import FevBook from '../fevBook/FevBook'
import PromoBanner from '../promoBanner/PromoBanner'
import OtherBooks from '../otherBooks/OtherBooks'
import Review from '../review/Review'
const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellBook />
      <FevBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  )
}

export default Home
