import { useQuery, type UseQueryOptions } from "@tanstack/react-query"
import httpClient from "../../../libs/http-client";
import type { z } from "zod";
import type { beerSchema } from "./create-beer";

export type Beer = z.infer<typeof beerSchema> & { _id: string }


export const getBeers = async () => {
    const response = await httpClient.get("/beers");
    return response.data;
};

export const beerQueryConfig = {
    queryKey: ["beers"],
    queryFn: getBeers,
}


const useBeers = (options: Omit<UseQueryOptions<Beer[]>, "queryKey" | "queryFn">) => {
    return useQuery<Beer[]>({ ...beerQueryConfig, ...options })
}

export default useBeers