import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";

import { FlexContainerStyled, MainDiv } from "../../styles/ContainerStyles";
import { CardMovie } from "../../components/CardMovie/CardMovie";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";

import { getId } from "../../util/getId";

export function Movies({ title }) {
  let URL = `https://swapi.dev/api/films`;

  const { isLoading, error, data } = useQuery("repoMovies", () => {
    return axios.get(URL);
  });
  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  const movies = data.data.results.map((movie) => {
    return {
      id: getId(movie.url),
      title: movie.title,
      episode_id: movie.episode_id,
      director: movie.director,

      release_date: moment(movie.release_date).format("DD/MM/YYYY"),
    };
  });

  console.log(movies);

  return (
    <MainDiv>
      <SearchInput title={title} />
      <FlexContainerStyled>
        {movies.map((movies) => {
          return <CardMovie data={movies} key={movies.title} />;
        })}
      </FlexContainerStyled>
    </MainDiv>
  );
}
