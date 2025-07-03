import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import beerSchema, { type Beer } from "../schemas/beer.schema";
import { createBeer } from "../services/beers";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import "./BeerForm.css";

const BeerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(beerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (values: Omit<Beer, "_id">) => {
    console.log(values);
    createBeer(values).then(() => {
      navigate("/beers");
    });
  };


  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-header">
          <h1 className="form-title">🍺 Nouvelle Bière</h1>
          <p className="form-subtitle">
            Ajoutez une nouvelle bière à votre collection
          </p>
        </div>

        <div className="beer-form-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input
                {...register("name")}
                className="form-input"
                placeholder="Nom de la bière"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="price" className="form-label">
                Prix
              </label>
              <input
                {...register("price")}
                className="form-input"
                placeholder="Prix en euros"
                type="number"
                step="0.01"
              />
              {errors.price && (
                <p className="error-message">{errors.price.message}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="degree" className="form-label">
                Degré
              </label>
              <input
                {...register("degree")}
                className="form-input"
                placeholder="Degré d'alcool"
                type="number"
                step="0.1"
              />
              {errors.degree && (
                <p className="error-message">{errors.degree.message}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="brasserie" className="form-label">
                Brasserie
              </label>
              <input
                {...register("brasserie")}
                className="form-input"
                placeholder="Nom de la brasserie"
              />
              {errors.brasserie && (
                <p className="error-message">{errors.brasserie.message}</p>
              )}
            </div>

            <div className="form-actions">
              <Link to="/beers" className="cancel-btn">
                Annuler
              </Link>
              <button type="submit" className="submit-btn">
                ✨ Créer la bière
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeerForm;
