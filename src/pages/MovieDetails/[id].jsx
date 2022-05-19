import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorScreen } from "../ErrorScreen";
import { LoadingScreen } from "../LoadingScreen";
import { Flex, Text } from "aiq-design-system";
import styled from "styled-components";
import ProductionInformation from "../../components/MoviesDetailsComponents/ProductionInformation";
import Synopsis from "../../components/MoviesDetailsComponents/Synopsis";
import MovieCharacters from "../../components/MoviesDetailsComponents/MovieCharacters";

export default function MovieDetails() {
  let { id } = useParams();

  const { isLoading, error, data } = useQuery(["repoMovie", id], () => {
    return axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then((data) => data?.data);
  });
  if (isLoading || !data) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  return (
    <FlexDiv flexDirection="column">
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Text>{data.title}</Text>
          <Text>{data.episode_id}</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text>{data.edited}</Text>
          <Text>{data.created}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Synopsis />
          <ProductionInformation />
        </Flex>
        <MovieCharacters />
      </Flex>
    </FlexDiv>
  );
}
const FlexDiv = styled(Flex)`
  padding: 40px;
  width: 100%;
  height: calc(100vh - 100px);
`;
