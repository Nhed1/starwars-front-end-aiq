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
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function MovieDetails() {
  const { t: translate } = useTranslation();
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
          <Text color="primary" fontSize="xxlarge">
            {data.title}
          </Text>
          <Text color="primary" fontSize="xxlarge">
            {translate("movies_details:episode")} {data.episode_id}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text>
            {translate("date:created")}
            {moment(data.edited).format("DD/MM/YYYY")}
          </Text>
          <Text>
            {translate("date:edited")}
            {moment(data.created).format("DD/MM/YYYY")}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" width="30%">
          <Synopsis openingCrawl={data.opening_crawl} />
          <ProductionInformation data={data} />
        </Flex>
        <MovieCharacters data={data} />
      </Flex>
    </FlexDiv>
  );
}
const FlexDiv = styled(Flex)`
  padding: 40px;
  width: 100%;
  height: calc(100vh - 100px);
`;
