import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProducts from "../Pages/AddProduct/AddProducts";
import MyCard from "../Pages/MyCard/MyCard";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import WatchDetails from "../Pages/WatchDetails/WatchDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import UpdateWatch from "../Pages/UpdateWatch/UpdateWatch";
import AllWatches from "../Pages/AllWatches/AllWatches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watches"
          ),
      },
      {
        path: "/allWatches",
        element: <AllWatches />,
        loader: () =>
          fetch(
            "https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watches"
          ),
      },
      {
        path: "/watches/:id",
        element: (
          <PrivetRoute>
            <WatchDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watches/${params.id}`
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRoute>
            <AddProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateWatch />,
        loader: ({ params }) =>
          fetch(
            `https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watches/${params.id}`
          ),
      },
      {
        path: "/brand/:brandName",
        element: (
          <PrivetRoute>
            <BrandProducts />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/watchBrand/${params.brandName}`
          ),
      },
      {
        path: "/myCard",
        element: (
          <PrivetRoute>
            <MyCard />
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://watch-server-p2yuywbpr-md-shahadat-hosens-projects.vercel.app/card"
          ),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
