import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import UpdateProfile from "../Pages/UpdateUser/UpdateProfile";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
          path: '/updateProfile',
          element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>
        }
      ]
    },
  ]);

export default Router;