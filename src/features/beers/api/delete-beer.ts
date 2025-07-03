import { useMutation, useQueryClient } from "@tanstack/react-query"
import httpClient from "../../../libs/http-client";
import type { Beer } from "../../../schemas/beer.schema";
import { toast } from "react-toastify";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const deleteBeer = async (id: string) => {
    await wait(3000);
    throw new Error("");

    await httpClient.delete(`/beers/${id}`);
    return true;
};

const useDeleteBeer = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => deleteBeer(id),
        onMutate: (variables) => {
            console.log(variables)

            const oldData = queryClient.getQueryData(["beers"])

            queryClient.setQueryData(["beers"], (state: Beer[]) => {
                return state.filter(beer => beer._id != variables)
            })

            return oldData
        },
        onError: (err, id, context) => {
            console.log(context)
            toast(":'(");
            queryClient.setQueryData(["beers"], context)
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey: ['beers'] }),
    })

}

export default useDeleteBeer