import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const beerSchema = z.object({
  name: z.string().min(3, 'trop court').max(50 , '500 caractères jamais je ne teste ça')
})

type Beer = z.infer<typeof beerSchema>

const BeerForm = () => {
  const {register, handleSubmit, formState : { errors }} = useForm({
    resolver : zodResolver(beerSchema)
  });

  console.log(register('name'))

  const onSubmit = (values : Beer) => {
    console.log(values)
  }

  return <div>
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name")} />
{errors.name &&   <p>{errors.name.message}</p>}
  <button>ok</button>
</form>

  </div>;
};

export default BeerForm;
