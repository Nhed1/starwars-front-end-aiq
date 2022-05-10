import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";

import { Flex, Text } from "aiq-design-system";
import { CardMovie } from "./CardMovie/CardMovie";
import { SearchInput } from "../SearchInput/SearchInput";
import { FlexContainerStyled, MainDiv } from "../../styles/ContainerStyles";

import { getId } from "../../util/getId";

export function Movies({ title }) {
  const { t: translate } = useTranslation();
  let URL = `https://swapi.dev/api/films`;

  const { isLoading, error, data } = useQuery("repoMovies", () => {
    return axios.get(URL);
  });

  if (isLoading)
    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Carregando</Text>
      </Flex>
    );
  if (error)
    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Aconteceu um erro: ${error.message}</Text>
      </Flex>
    );

  const movies = data.data.results.map((movie) => {
    return {
      id: getId(movie.url),
      title: movie.title,
      episode_id: movie.episode_id,
      director: movie.director,

      release_date: moment(movie.release_date).format("DD/MM/YYYY"),
    };
  });
  return (
    <MainDiv>
      <SearchInput />
      <FlexContainerStyled>
        {movies.map((movies) => {
          {
            console.log(movies);
          }
          return <CardMovie data={movies} key={movies.title} />;
        })}
      </FlexContainerStyled>
    </MainDiv>
  );
}
