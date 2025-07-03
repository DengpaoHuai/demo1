import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContextProvider";

const BasketDetails = () => {
  const { beers } = useContext(BasketContext);

  return (
    <div>
      <h1>BasketDetails</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasketDetails;
