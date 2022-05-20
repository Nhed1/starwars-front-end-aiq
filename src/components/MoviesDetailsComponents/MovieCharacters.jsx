import { Flex } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { FlexCard } from "../../styles/DetailsCardStyle";
import { Title } from "../../styles/Title";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";

export default function MovieCharacters({ data }) {
  const { t: translate } = useTranslation();

  return (
    <FlexCard flexDirection="column" width="60%">
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Title
            marginBottom="20px"
            textAlign="center"
            display="block"
            width="200px"
          >
            {translate("movies_details:characters")}
          </Title>
          <Flex flexDirection="column" height="400px" flexWrap="wrap">
            {data.characters.map((character) => {
              return (
                <TextInfo>
                  <APIData url={character} field="name" />
                </TextInfo>
              );
            })}
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Title>{translate("movies_details:species")}</Title>
          {data.species.map((specie) => {
            return (
              <TextInfo>
                <APIData url={specie} field="name" />
              </TextInfo>
            );
          })}
        </Flex>
      </Flex>

      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Title>{translate("movies_details:vehicles")}</Title>
          {data.vehicles.map((vehicle) => {
            return (
              <TextInfo>
                <APIData url={vehicle} field="name" />
              </TextInfo>
            );
          })}
        </Flex>
        <Flex flexDirection="column">
          <Title>{translate("movies_details:starships")}</Title>
          {data.starships.map((starship) => {
            return (
              <TextInfo>
                <APIData url={starship} field="name" />
              </TextInfo>
            );
          })}
        </Flex>
        <Flex flexDirection="column">
          <Title>{translate("movies_details:planets")}</Title>
          {data.planets.map((planet) => {
            return (
              <TextInfo>
                <APIData url={planet} field="name" />
              </TextInfo>
            );
          })}
        </Flex>
      </Flex>
    </FlexCard>
  );
}
