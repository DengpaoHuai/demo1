import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Planets from "../pages/Planets";
import beerRouter from "./beer.router";
import BasketLayout from "../components/containers/BasketLayout";
import BasketDetails from "../pages/BasketDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasketLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "planets",
        element: <Planets />,
      },
      {
        path: "basket",
        element: <BasketDetails />,
      },
      beerRouter,
    ],
  },
]);

export default router;
