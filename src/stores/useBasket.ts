import { create } from "zustand";
import type { Beer } from "../schemas/beer.schema";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type BasketStore = {
  products: Beer[];
  addProduct: (product: Beer) => void;
  removeProduct: (product: Beer) => void;
  clearBasket: () => void;
};

const useBasket = create(
  devtools(
    persist<BasketStore>(
      (set) => ({
        products: [],
        addProduct: (product: Beer) =>
          set((state) => ({ products: [...state.products, product] })),
        removeProduct: (product: Beer) =>
          set((state) => ({
            products: state.products.filter((p) => p._id !== product._id),
          })),
        clearBasket: () => set({ products: [] }),
      }),
      { name: "basket", storage: createJSONStorage(() => localStorage) }
    )
  )
);

export default useBasket;
