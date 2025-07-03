import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Planets from "../pages/Planets";
import beerRouter from "./beer.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  beerRouter,
]);

export default router;
