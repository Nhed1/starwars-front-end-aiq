import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import axios from "axios";
import { getId } from "../../util/getId";
import {
  FlexContainerStyled,
  InputStyled,
  MainDiv,
  SearchDiv,
} from "../../styles/ContainerStyles";
import { CardPerson } from "./CardPerson/CardPerson";
export function People({ title }) {
  const { t: translate } = useTranslation();
  let URL = `https://swapi.dev/api/people`;

  const { isLoading, error, data } = useQuery("repoData", () => {
    return axios.get(URL);
  });

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
