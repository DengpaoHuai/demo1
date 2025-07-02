import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import beerSchema, { type Beer } from "../schemas/beer.schema";
import { createBeer } from "../services/beers";
import { useNavigate } from "react-router";

const BeerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(beerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (values: Omit<Beer, '_id'>) => {
    console.log(values);
    createBeer(values).then(() => {
      navigate("/beers");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nom</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="price">Prix</label>
        <input {...register("price")} />
        {errors.price && <p>{errors.price.message}</p>}
        <label htmlFor="degree">Degré</label>
        <input {...register("degree")} />
        {errors.degree && <p>{errors.degree.message}</p>}
        <label htmlFor="brasserie">Brasserie</label>
        <input {...register("brasserie")} />
        {errors.brasserie && <p>{errors.brasserie.message}</p>}
        <button>ok</button>
      </form>
    </div>
  );
};

export default BeerForm;
