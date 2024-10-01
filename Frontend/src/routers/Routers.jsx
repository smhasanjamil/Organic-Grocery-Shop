import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Shop from "../components/shop/Shop";
import Blog from "../components/blog/Blog";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import ViewProduct from "../components/shop/product/ViewProduct";
import Dashboard from "../layout/Dashboard";
import Cart from "../components/shop/cart/Cart";
import Payment from "../payment/Payment";
import MyOrder from "../layout/dashboard/MyOrder";
import DashboardHome from "../layout/dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/view-product/:id",
        element: <ViewProduct />,
        loader: ({ params }) =>
          fetch(
            `https://organic-grocery-shop-backend.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "my-order",
        element: <MyOrder />,
      },
    ],
  },
]);
