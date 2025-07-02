import { useEffect } from "react";
import { useState } from "react";
import { getBeers } from "../services/beers";
import type { Beer } from "../schemas/beer.schema";
import { Link } from "react-router";

const BeersList = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    getBeers().then((beers) => {
      setBeers(beers);
    });
  }, []);

const deleteItem = (id : string) => {

}

  return (
    <div>
      <h1>Liste des bières</h1>
      <Link to="/beers/create">Ajouter une bière</Link>
      {beers.map((beer) => (
        <div key={beer._id}>
          <p>{beer.name}</p>
          <button onClick={() => deleteItem(beer._id)}>supprimer</button>

        </div>
      ))}
    </div>
  );
};

export default BeersList;
