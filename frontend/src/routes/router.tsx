import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../shop/Shop";
import Blog from "../blog/Blog";
import About from "../about/About";
import Home from "../home/Home";
import AdminDashbord from "../dashbord/AdminDashbord";
import DashbordLyout from "../dashbord/DashbordLyout";
import UploadBook from "../dashbord/UploadBook";
import ManageBooks from "../dashbord/ManageBooks";
import EditBooks from "../dashbord/EditBooks";
import SingleBook from "../container/SingleBook";
import SingUp from "../signUp/SignUp";



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
      element: <Shop />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blog',
      element: <Blog />
    }, {
      path: "book/:id",
      element: <SingleBook />,
      loader: ({ params }) => fetch(`http://localhost:5000/api/${params.id}`)
    }
  ]

},
{
  path: '/admin/dashbord',
  element: <DashbordLyout />,
  children: [
    {
      path: "/admin/dashbord",
      element: <AdminDashbord />
    },
    {
      path: "/admin/dashbord/upload",
      element: <UploadBook />
    },
    {
      path: "/admin/dashbord/manage",
      element: <ManageBooks />
    }, {
      path: "/admin/dashbord/edit-books/:id",
      element: <EditBooks />,
      loader: ({ params }) => fetch(`http://localhost:5000/api/book/${params.id}`)
    },
  ]
},
{
  path: "sign-up",
  element: <SingUp />
},

])

export default router;
