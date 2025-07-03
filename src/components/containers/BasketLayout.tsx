import { useContext, type ReactNode } from "react";
import { BasketContext } from "../../contexts/BasketContextProvider";
import { Link, Outlet } from "react-router";

const BasketLayout = () => {
  const { beers } = useContext(BasketContext);

  return (
    <div>
      <p>nombre d'articles : {beers.length}</p>
      <Link to="/basket">Basket</Link>
      <Outlet />
    </div>
  );
};

export default BasketLayout;
