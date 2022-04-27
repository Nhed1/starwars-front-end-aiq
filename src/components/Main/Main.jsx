import { Input } from "aiq-design-system";
import { useEffect, useState } from "react";
import { swapi } from "../../api/swapi";
export function Main() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getPeople() {
      const people = await swapi.get("/people");
      setResults(people);
    }

    getPeople();
  }, []);
  return (
    <div>
      <div>
        <h1>(SELECT BUTTON TEXT)</h1>
        <input type="text" />
      </div>
      <div></div>
    </div>
  );
}
