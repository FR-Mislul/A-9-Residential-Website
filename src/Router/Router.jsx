import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import UpdateProfile from "../Pages/UpdateUser/UpdateProfile";
import StateDetails from "../Pages/StateDetails/StateDetails";
import State from "../Pages/State/State";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";

// import State from "../Pages/State/State";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/state',
          element: <PrivetRoute><State></State></PrivetRoute>,
        },
        {
          path: '/state/:id',
          element: <PrivetRoute><StateDetails></StateDetails></PrivetRoute>,
          loader: () => fetch('Residential.json')
          
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/contactMe',
          element: <Contact></Contact>
        },
        {
          path: '/updateProfile',
          element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
        }
      ]
    },
  ]);

export default Router;