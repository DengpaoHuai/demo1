import { useEffect, useState } from "react";
import "./App.css";
import { getPlanets } from "./services/planet";

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

function App() {
  const [planetsResponse, setPlanetsResponse] = useState<PlanetsResponse>({
    results: [],
    next: "",
    previous: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(`https://www.swapi.tech/api/planets?page=1&limit=10`);
  }, []);

  const getData = (url: string) => {
    setLoading(true);
    getPlanets(url)
      .then((data) => {
        setPlanetsResponse(data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {planetsResponse.results.map((planet) => (
        <div>{planet.name}</div>
      ))}
      <button onClick={() => getData(planetsResponse.previous)}>
        Previous
      </button>
      <button onClick={() => getData(planetsResponse.next)}>Next</button>
    </div>
  );
}

export default App;
