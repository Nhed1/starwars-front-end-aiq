import { Flex, Text } from "aiq-design-system";
import { APIData } from "./ApiData";
import { TextInfo } from "./TextInfo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export function VehiclesInformation({ data }) {
  const { t: translate } = useTranslation();

  return (
    <FlexCardVehicle flexDirection="column">
      <Text size="xxlarge" color="primary">
        {translate("characters_details:title_vehicles")}
      </Text>

      <Flex justifyContent="space-between">
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
            <TextInfo>
              {translate("characters_details:vehicles_error")}
            </TextInfo>
          )}
        </Flex>
        <Flex flexDirection="column">
          <Text>{translate("characters_details:starships")}</Text>
          {data.starships?.length > 0 ? (
            data.starships.map((starship) => {
              return (
                <TextInfo key={starship.url}>
                  <APIData url={starship} field="name" />
                </TextInfo>
              );
            })
          ) : (
            <TextInfo>
              {translate("characters_details:vehicles_error")}
            </TextInfo>
          )}
        </Flex>
      </Flex>
    </FlexCardVehicle>
  );
}

const FlexCardVehicle = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;
`;
