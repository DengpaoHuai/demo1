import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [planets, setPlanets] = useState([]);

  const [refetch, setRefetch] = useState(false);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
      });
  }, [refetch]);

  return (
    <div>
      <button onClick={handleRefetch}>Refetch</button>
      {planets.map((planet) => (
        <div>{planet.name}</div>
      ))}
    </div>
  );
}

export default App;
