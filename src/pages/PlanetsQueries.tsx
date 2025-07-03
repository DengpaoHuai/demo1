import { useQuery } from "@tanstack/react-query";
import useFetch from "../hooks/useFetch";
import { getPlanets } from "../services/planet";
import { useState } from "react";

type Planet = {
  name: string;
  uid: string;
  url: string;
};

type PlanetsResponse = {
  results: Array<Planet>;
  next: string;
  previous: string;
};

function Planets() {
  /* const { data, loading, error } = useFetch<PlanetsResponse>(
      `https://www.swapi.tech/api/planets?page=1&limit=10`
    );
  */
  const [currentPage, setCurrentPage] = useState(
    `https://www.swapi.tech/api/planets?page=1&limit=10`
  );
  const { data } = useQuery<PlanetsResponse>({
    queryKey: ["planets", currentPage],
    queryFn: () => getPlanets(currentPage),
    refetchOnWindowFocus: true
  });

  return (
    <div>
      {data?.results.map((planet) => (
        <div>{planet.name}</div>
      ))}
      <button
        disabled={!data?.previous}
        onClick={() => setCurrentPage(data?.previous!)}
      >
        previous
      </button>
      <button
        disabled={!data?.next}
        onClick={() => setCurrentPage(data?.next!)}
      >
        next
      </button>
    </div>
  );
}

export default Planets;
