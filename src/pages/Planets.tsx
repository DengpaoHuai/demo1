import useFetch from "../hooks/useFetch";

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
  const { data, loading, error } = useFetch<PlanetsResponse>(
    `https://www.swapi.tech/api/planets?page=1&limit=10`
  );

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data?.results.map((planet) => (
        <div>{planet.name}</div>
      ))}
    </div>
  );
}

export default Planets;
