import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shope from "../shop/Shope";
import Blog from "../blog/Blog";
import About from "../about/About";
import Home from "../home/Home";
import AdminDashbord from "../dashbord/AdminDashbord";




const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop',
      element: <Shope />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blog',
      element: <Blog />
    }, {
      path: '/admin/dashbord',
      element: <AdminDashbord />
    },
  ]
}])

export default router;
