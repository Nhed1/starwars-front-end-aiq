import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { APIData } from "./ApiData";
import { TextInfo } from "./TextInfo";

export function PersonInformation({ data }) {
  const { t: translate } = useTranslation();

  return (
    <FlexCardPerson flexDirection="column">
      <Text size="xxlarge" color="primary">
        {translate("characters_details:title_character")}
      </Text>

      <Flex>
        {data.species > 0 ? (
          data.species.map((specie) => {
            return (
              <TextInfo>
                {translate("characters_details:specie")}
                <APIData url={specie} field="name" />
              </TextInfo>
            );
          })
        ) : (
          <TextInfo>{translate("characters_details:specie_error")}</TextInfo>
        )}
        <TextInfo>
          {translate("characters_details:height")}

          {data.height}
        </TextInfo>
        <TextInfo>
          {translate("characters_details:weight")}
          {data.mass}
        </TextInfo>
        <TextInfo>
          {translate("characters_details:hair_color")}
          {data.hair_color}
        </TextInfo>
      </Flex>
    </FlexCardPerson>
  );
}

const FlexCardPerson = styled(Flex)`
  justify-content: space-between;
  height: fit-content;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;

  span {
    margin: 10px;
  }
`;
