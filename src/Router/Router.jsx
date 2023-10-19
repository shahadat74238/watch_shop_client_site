import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProducts from "../Pages/AddProduct/AddProducts";
import MyCard from "../Pages/MyCard/MyCard";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3001/watches')
      },
      {
        path: "/addProduct",
        element: <AddProducts />
      },
      {
        path: "/brand/:brandName",
        element: <BrandProducts />,
        loader: ({params}) => fetch(`http://localhost:3001/watches/${params.brandName}`)
      },
      {
        path: "/myCard",
        element: <MyCard />
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
