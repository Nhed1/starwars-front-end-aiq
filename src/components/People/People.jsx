import { useQuery } from "react-query";
import axios from "axios";
import { getId } from "../../util/getId";
import { FlexContainerStyled, MainDiv } from "../../styles/ContainerStyles";
import { CardPerson } from "./CardPerson/CardPerson";

import { SearchInput } from "../SearchInput/SearchInput";
export function People({ title }) {
  let URL = `https://swapi.dev/api/people`;

  const { isLoading, isFetching, error, data } = useQuery("repoPeople", () => {
    return axios.get(URL).then((data) => data?.data);
  });

  if (isLoading || !data) return <h1> "Loading..."</h1>;
  if (error) return <h1>"an error has ocurred: " + {error.message}</h1>;

  const people = data?.results?.map((person) => {
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
      <SearchInput title={title} />
      <FlexContainerStyled>
        {people.map((people) => {
          return <CardPerson data={people} key={people.name} title={title} />;
        })}
      </FlexContainerStyled>
    </MainDiv>
  );
}
