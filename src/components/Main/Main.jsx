import { useQuery } from "react-query";
import axios from "axios";

import { MainDiv, GridDiv, SearchDiv, FlexStyled } from "./StylesMain";
import { Input } from "aiq-design-system";
import { CardPerson } from "../CardPerson/CardPerson";

export function Main({ title }) {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return axios.get(`https://swapi.dev/api/people`);
  });

  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred: " + error.message;

  const people = data.data.results.map((person) => {
    return {
      name: person.name,
      birthYear: person.birth_year,
      homeworld: person.homeworld,
      gender: person.gender,
      height: person.height,
      species: person.species,
      vehicles: person.vehicles,
    };
  });

  return (
    <MainDiv>
      <SearchDiv>
        <h1>{title}</h1>
        <Input
          type="text"
          width="100%"
          placeholder={`Buscar por ${title.toLowerCase()}`}
        />
      </SearchDiv>
      <FlexStyled>
        {people.map((people) => {
          return <CardPerson data={people} />;
        })}
      </FlexStyled>
    </MainDiv>
  );
}
