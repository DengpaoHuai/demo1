import BeerDetails from "../pages/BeerDetails";
import BeerForm from "../pages/BeerForm";
import BeersList from "../pages/BeersList";

const beerRouter = {
  path: "beers",
  children: [
    {
      path: "create",
      element: <BeerForm />,
    },
    {
      path: "",
      element: <BeersList />,
    },
    {
      path: ":id",
      element: <BeerDetails />,
    },
  ],
};

export default beerRouter;
