import { Flex, Text } from "aiq-design-system";
import { FlexCard } from "../../styles/DetailsCardStyle";

export default function ProductionInformation() {
  return (
    <FlexCard flexDirection="column">
      <Flex>
        <Text>Diretor</Text>
        <Text>Produtores</Text>
      </Flex>
      <Text>Lançamento</Text>
    </FlexCard>
  );
}
