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
import ChartMoviesCharacter from "../../components/ChartMoviesCharacter";

export default function PersonDetails() {
  let { id } = useParams();
  const { isLoading, error, data } = useQuery(["repoPerson", id], () => {
    return axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((data) => data?.data);
  });
  if (isLoading || !data) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;
  console.log(data);

  return (
    <FlexDiv flexDirection="column">
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex>
          <Text fontSize="xxlarge" color="primary">
            {data.name}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <TextInfo>atualizada em {data.edited}</TextInfo>
          <TextInfo>criada em {data.created}</TextInfo>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <PersonInformation data={data} />
          <VehiclesInformation data={data} />
        </Flex>
        <ChartMoviesCharacter />
      </Flex>
    </FlexDiv>
  );
}

const FlexDiv = styled(Flex)`
  padding: 40px;
  width: 100%;
  height: calc(100vh - 100px);
`;
