import { useContext, useEffect } from "react";
import { useState } from "react";
import { deleteBeer, getBeers } from "../services/beers";
import type { Beer } from "../schemas/beer.schema";
import { Link } from "react-router";
import "./BeersList.css";
import Modal from "../components/Modal";
import { BasketContext } from "../contexts/BasketContextProvider";
import useBeers from "../stores/useBeers";

const BeersList = () => {
  const { beers, setAllBeers } = useBeers()
  const [refresh, setRefresh] = useState(false);
  const { addUnBonneBinouze } = useContext(BasketContext)


  useEffect(() => {
    if (beers.length) return
    getBeers().then((beers) => {
      setAllBeers(beers);
    });
  }, [refresh]);

  const deleteItem = (id: string) => {
    deleteBeer(id).then(() => {
      setAllBeers(beers.filter((beer) => beer._id !== id));
      setRefresh(!refresh);
    });
  };

  return (
    <div className="beers-container">
      <div className="beers-content">
        <div className="beers-header">
          <h1 className="beers-title">🍺 Collection de Bières</h1>
          <p className="beers-subtitle">
            Découvrez notre sélection exceptionnelle de bières artisanales
          </p>
          <Link to="/beers/create" className="add-beer-btn">
            ✨ Ajouter une nouvelle bière
          </Link>
        </div>
        <Link to="/beers/gdfgdfgdfgdhfghfgh" className="add-beer-btn">
          {"dsfsdfsd "}
        </Link>
        {beers.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🍺</div>
            <p className="empty-text">Aucune bière pour le moment...</p>
          </div>
        ) : (
          <div className="beers-grid">
            {beers.map((beer) => (
              <div key={beer._id} className="beer-card">
                <div className="beer-image">
                  <div className="beer-icon">🍺</div>
                </div>

                <div className="beer-content">
                  <h3 className="beer-name">{beer.name}</h3>
                  <Link to={`/beers/${beer._id}`}>
                    <div className="beer-footer">
                      <span className="beer-tag">Artisanale</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      addUnBonneBinouze(beer)
                    }}
                  >
                    ajouter au panier
                  </button>
                  <button
                    onClick={() => deleteItem(beer._id)}
                    className="delete-btn"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <div className="tooltip">Supprimer</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BeersList;
