import { useEffect, useState } from "react";
import { swapi } from "../../api/swapi";
import { useQuery } from "react-query";

export function Main() {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return swapi.get("/people");
  });

  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred: " + error.message;
  const personagens = data.data.results.map((each) => {
    return {
      name: each.name,
      height: each.height,
    };
  });

  return (
    <div>
      <div>
        <h1>(SELECT BUTTON TEXT)</h1>
        <input type="text" />
      </div>
      <div>
        {personagens.map((personagem) => {
          return <p>{personagem.name}</p>;
        })}
      </div>
    </div>
  );
}
