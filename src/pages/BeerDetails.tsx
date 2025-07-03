import { useParams, useNavigate } from "react-router";
import { getBeerById } from "../services/beers";
import { useEffect, useState } from "react";
import type { Beer } from "../schemas/beer.schema";

const BeerDetails = () => {
  const [beer, setBeer] = useState<Beer | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(-1);
      return;
    }
    getBeerById(id)
      .then((beer) => {
        setBeer(beer);
      })
      .catch((error) => {
        navigate(-1);
      });
  }, [id]);
  return (
    <div>
      <h1>Beer Details</h1>
      {beer && (
        <div>
          <h2> title : {beer.name}</h2>
          <p> brasserie : {beer.brasserie}</p>
          <p> prix : {beer.price}</p>
          <p> degré : {beer.degree}</p>
        </div>
      )}
    </div>
  );
};

export default BeerDetails;
