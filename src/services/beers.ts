import httpClient from "../libs/http-client";
import type { Beer } from "../schemas/beer.schema";

export const getBeers = async () => {
  const response = await httpClient.get("/beers");
  return response.data;
};

export const createBeer = async (beer: Omit<Beer, '_id'>): Promise<Beer> => {
  const response = await httpClient.post("/beers", beer);
  return response.data
};
