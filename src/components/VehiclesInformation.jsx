import { Flex, Text } from "aiq-design-system";
import { APIData } from "./ApiData";
import { TextInfo } from "./TextInfo";
import styled from "styled-components";

export function VehiclesInformation({ data }) {
  return (
    <FlexCardVehicle flexDirection="column">
      <Text size="xxlarge" color="primary">
        veículos e naves utilizados
      </Text>

      <Flex>
        <Flex flexDirection="column">
          <Text>veiculos</Text>
          {data.vehicles?.length > 0 ? (
            data.vehicles.map((vehicle) => {
              return (
                <TextInfo key={vehicle.url}>
                  <APIData url={vehicle} field="name" />
                </TextInfo>
              );
            })
          ) : (
            <TextInfo>Não possui veículos</TextInfo>
          )}
        </Flex>
        <Flex flexDirection="column">
          <Text>naves</Text>
          <TextInfo>NOME DE UMA NAVE</TextInfo>
        </Flex>
      </Flex>
    </FlexCardVehicle>
  );
}

const FlexCardVehicle = styled(Flex)`
  justify-content: space-between;
  height: fit-content;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;
`;
