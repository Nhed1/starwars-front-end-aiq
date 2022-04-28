import { useQuery } from "react-query";
import axios from "axios";

import { MainDiv, GridDiv, SearchDiv } from "./StylesMain";
import { Input } from "aiq-design-system";

export function Main({ title }) {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return axios.get(`https://swapi.dev/api/people`);
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
      <SearchDiv>
        <h1>{title}</h1>
        <Input type="text" width="100%" />
      </SearchDiv>
      <GridDiv>
        {people.map((person) => {
          return <p>{person.name}</p>;
        })}
      </GridDiv>
    </MainDiv>
  );
}
