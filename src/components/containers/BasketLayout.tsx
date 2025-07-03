import { useContext, type ReactNode } from "react";
import { Link, Outlet } from "react-router";
import useBasket from "../../stores/useBasket";

const BasketLayout = () => {
  const { products } = useBasket();

  return (
    <div>
      <p>nombre d'articles : {products.length}</p>
      <Link to="/basket">Basket</Link>
      <Outlet />
    </div>
  );
};

export default BasketLayout;
