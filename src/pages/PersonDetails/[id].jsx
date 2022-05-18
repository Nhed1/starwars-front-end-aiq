import { Flex, Text } from "aiq-design-system";
import { PersonInformation } from "../../components/PersonInformation";
import { VehiclesInformation } from "../../components/VehiclesInformation";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { TextInfo } from "../../components/TextInfo";
import styled from "styled-components";
import ChartMoviesCharacter from "../../components/ChartMovies/ChartMoviesCharacter";
import moment from "moment";

export default function PersonDetails() {
  let { id } = useParams();
  const { isLoading, error, data } = useQuery(["repoPerson", id], () => {
    return axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((data) => data?.data);
  });
  if (isLoading || !data) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  return (
    <FlexDiv flexDirection="column">
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex>
          <Text fontSize="xxlarge" color="primary">
            {data.name}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <TextInfo>
            atualizada em {moment(data.edited).format("DD/MM/YYYY")}
          </TextInfo>
          <TextInfo>
            criada em {moment(data.created).format("DD/MM/YYYY")}
          </TextInfo>
        </Flex>
      </Flex>
      <FlexInformation>
        <Flex flexDirection="column" width="45%">
          <PersonInformation data={data} />
          <VehiclesInformation data={data} />
        </Flex>
        <ChartMoviesCharacter data={data} />
      </FlexInformation>
    </FlexDiv>
  );
}

const FlexDiv = styled(Flex)`
  padding: 40px;
  width: 100%;
  height: calc(100vh - 100px);
`;

const FlexInformation = styled(Flex)`
  justify-content: space-between;
  width: 100%;
`;
