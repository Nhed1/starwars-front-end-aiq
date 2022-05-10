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
import { CardMovie } from "./CardMovie/CardMovie";
import { Flex, Text } from "aiq-design-system";
import moment from "moment";

export function Movies({ title }) {
  const { t: translate } = useTranslation();
  let URL = `https://swapi.dev/api/films`;

  const { isLoading, error, data } = useQuery("repoData", () => {
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

  const now = moment();
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
