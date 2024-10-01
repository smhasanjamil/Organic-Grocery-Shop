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
import PrivateRoutes from "../providers/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <ViewProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://organic-grocery-shop-backend.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
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
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoutes>
            <DashboardHome />
          </PrivateRoutes>
        ),
      },
      {
        path: "my-order",
        element: (
          <PrivateRoutes>
            <MyOrder />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
