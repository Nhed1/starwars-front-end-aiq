import { Flex, Text } from "aiq-design-system";
import { FlexCard } from "../../styles/DetailsCardStyle";

export default function MovieCharacters() {
  return (
    <FlexCard flexDirection="column" width="70%">
      <Flex>
        <Flex flexDirection="column">
          <Text>Personagens</Text>
          <Text>Personagem 1</Text>
          <Text>Personagem 2</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text>Especies</Text>
          <Text>Especie 1</Text>
          <Text>Especie 2</Text>
        </Flex>
      </Flex>

      <Flex>
        <Flex flexDirection="column">
          <Text>Veiculos</Text>
          <Text>Veiculo 1</Text>
          <Text>Veiculo 2</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text>NAves</Text>
          <Text>nave 1</Text>
          <Text>nave 2</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text>Planetas</Text>
          <Text>planeta 1</Text>
          <Text>planeta 2</Text>
        </Flex>
      </Flex>
    </FlexCard>
  );
}
