import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Planets from "../pages/Planets";
import beerRouter from "./beer.router";
import BasketLayout from "../components/containers/BasketLayout";
import BasketDetails from "../pages/BasketDetails";
import PlanetsQueries from "../pages/PlanetsQueries";
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
        path: "query",
        element: <PlanetsQueries />,
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
