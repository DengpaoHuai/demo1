import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getData(url);
    }, []);

    const getData = (url: string) => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((results) => {
                setData(results);
            })
            //narrowing
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    console.error(error.message);
                    setError(error.message);
                } else if (typeof error === "string") {
                    console.error(error);
                    setError(error);
                } else {
                    console.error("Une erreur est survenue");
                }


            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        data,
        loading,
        error
    }
}

export default useFetch