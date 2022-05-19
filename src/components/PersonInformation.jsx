import { Flex, Text } from "aiq-design-system";
import styled from "styled-components";
import { TextInfo } from "./TextInfo";

export function PersonInformation({ data }) {
  return (
    <FlexCardPerson flexDirection="column">
      <Text size="xxlarge" color="primary">
        informações físicas
      </Text>

      <Flex>
        {console.log(data.species)}
        <TextInfo>ESPÉCIE: {data.species[0]}</TextInfo>
        <TextInfo>ALTURA {data.height}</TextInfo>
        <TextInfo>PESO {data.mass}</TextInfo>
        <TextInfo>COR DO CABELO {data.hair_color}</TextInfo>
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
