import { useQuery } from "react-query";
import axios from "axios";
import moment from "moment";

import { FlexContainerStyled, MainDiv } from "../../styles/ContainerStyles";
import { CardMovie } from "../../components/CardMovie/CardMovie";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";

import { getId } from "../../util/getId";
import { useEffect, useState } from "react";
import { Pagination } from "aiq-design-system";

export function Movies({ title }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchDelay, setSearchDelay] = useState("");
  const url = "https://swapi.dev/api/films/";

  useEffect(() => {
    const timeOut = setTimeout(() => setSearchDelay(search), 600);
    return () => clearTimeout(timeOut);
  }, [search]);

  const { isLoading, error, data } = useQuery(
    ["repoPeople", searchDelay],
    () => {
      if (search === "") {
        return axios.get(`${url}?page=${page}`).then((data) => data?.data);
      }
      return axios.get(`${url}?search=${search}`).then((data) => data?.data);
    }
  );

  if (isLoading || !data) return <LoadingScreen />;

  if (error) return <ErrorScreen error={error} />;
  const movies = data?.results?.map((movie) => {
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
      <SearchInput title={title} setSearch={setSearch} search={search} />
      <FlexContainerStyled>
        {movies.map((movies) => {
          return <CardMovie data={movies} key={movies.title} />;
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
