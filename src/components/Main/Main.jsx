import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import axios from "axios";

import { MainDiv, SearchDiv, FlexContainerStyled } from "./StylesMain";
import { InputStyled } from "./StylesMain";
import { CardPerson } from "../CardPerson/CardPerson";
import { useCallback } from "react";

export function Main({ title }) {
  const { t: translate } = useTranslation();

  const { isLoading, error, data } = useQuery("repoData", () => {
    return axios.get(`https://swapi.dev/api/people`);
  });

  const getId = useCallback((url = "") => {
    const params = new URL(url).pathname.split("/").filter((e) => !!e);

    return params[params.length - 1];
  }, []);

  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred: " + error.message;

  const people = data.data.results.map((person) => {
    return {
      id: getId(person.url),
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
      <FlexContainerStyled>
        {people.map((people) => {
          return <CardPerson data={people} key={people.name} title={title} />;
        })}
      </FlexContainerStyled>
    </MainDiv>
  );
}
