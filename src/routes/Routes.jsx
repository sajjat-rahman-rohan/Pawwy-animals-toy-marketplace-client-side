import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blogs/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import AddaToy from "../pages/AddaToy/AddaToy";
import SingleToy from "../pages/SingleToy/SingleToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy"
          ),
      },
      {
        path: "/alltoys/",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "https://b7-a11-toy-marketplace-server-side-two.vercel.app/totalToys"
          ),
      },
      {
        path: "/mytoys/",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy"
          ),
      },
      {
        path: "/addatoy/",
        element: (
          <PrivateRoute>
            <AddaToy></AddaToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/singletoy/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy/${params.id}`
          ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
