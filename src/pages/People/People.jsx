import { useQuery } from "react-query";
import axios from "axios";
import { getId } from "../../util/getId";

import { FlexContainerStyled, MainDiv } from "../../styles/ContainerStyles";
import { Pagination } from "aiq-design-system";

import { CardPerson } from "../../components/CardPerson/CardPerson";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { useState } from "react";

export function People({ title }) {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery(["repoPeople", page], () => {
    return axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((data) => data?.data);
  });

  if (isLoading || !data) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

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
      <Pagination
        defaultPage={page}
        variant="noCount"
        nextPage={data.next}
        prevPage={data.previous}
        onChange={(page) => setPage(page)}
      />
    </MainDiv>
  );
}
