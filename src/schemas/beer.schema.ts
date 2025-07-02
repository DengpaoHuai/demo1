import { z } from "zod";

const beerSchema = z.object({
  name: z.string().min(3, "trop court").max(50, "trop long"),
  price: z.coerce.number().min(1, "trop cher").max(100, "trop cher"),
  degree: z.coerce.number().min(1, "trop faible").max(100, "trop élevé"),
  brasserie: z.string().min(3, "trop court").max(50, "trop long"),
});

//export type Beer = z.infer<typeof beerSchema>;

export type Beer = z.infer<typeof beerSchema> & { _id: string }


export default beerSchema;
