import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import axios from "axios";

import { MainDiv, SearchDiv, FlexStyled } from "./StylesMain";
import { InputStyled } from "./StylesMain";
import { CardPerson } from "../CardPerson/CardPerson";

export function Main({ title }) {
  const { t: translate } = useTranslation();

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
        <InputStyled
          type="text"
          width="100%"
          placeholder={`${translate(
            "main:inputPlaceholder"
          )} ${title.toUpperCase()}`}
          backgroundColor={"gray-900"}
          border={"1px solid"}
          borderColor={"gray-200"}
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
