import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Beer } from "../schemas/beer.schema";

type BasketContextType = {
    beers: Beer[]
    addUnBonneBinouze: (beer: Beer) => void
}

export const BasketContext = createContext({} as BasketContextType)

type BasketContextProviderProps = {
    children: ReactNode;
};

const BasketContextProvider = ({ children }: BasketContextProviderProps) => {
    const [beers, setBeers] = useState<Beer[]>([])

    const addUnBonneBinouze = (beer: Beer) => {
        setBeers([beer, ...beers])
    }

    useEffect(() => {
        if (beers.length) {
            localStorage.setItem('binouzes', JSON.stringify(beers))
        } else {
            const binouzes = localStorage.getItem('binouzes')
            if (!binouzes) return
            setBeers(JSON.parse(binouzes))
        }
    }, [beers])


    return (
        <BasketContext.Provider value={{ beers, addUnBonneBinouze }}>
            {children}
        </BasketContext.Provider>
    )

}

export default BasketContextProvider