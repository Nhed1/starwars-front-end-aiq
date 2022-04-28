import { swapi } from "../../api/swapi";
import { useQuery } from "react-query";
import { MainDiv, GridDiv } from "./StylesMain";
import { Input } from "aiq-design-system";

export function Main({ title }) {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return swapi.get("/people");
  });

  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred: " + error.message;
  const people = data.data.results.map((person) => {
    return {
      name: person.name,
      height: person.height,
    };
  });

  return (
    <MainDiv>
      <div>
        <h1>{title}</h1>
        <Input type="text" />
      </div>
      <GridDiv>
        {people.map((person) => {
          return <p>{person.name}</p>;
        })}
      </GridDiv>
    </MainDiv>
  );
}
