import { create } from "zustand";
import type { Beer } from "../schemas/beer.schema";


type BeerStore = {
    beers: Beer[],
    setAllBeers: (beersList: Beer[]) => void
    addBeer: (beer: Beer) => void
}

const useBeers = create<BeerStore>((set) => ({
    beers: [],
    setAllBeers: (beersList: Beer[]) => {
        set({
            beers: beersList
        })
    },
    addBeer: (beer: Beer) => {
        set((state) => ({
            beers: [...state.beers, beer]
        }))
    }
}))

export default useBeers