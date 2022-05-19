import { Text } from "aiq-design-system";
import { FlexCard } from "../../styles/DetailsCardStyle";
import { TextInfo } from "../TextInfo";

export default function Synopsis() {
  return (
    <FlexCard flexDirection="column">
      <Text>title</Text>
      <TextInfo>synopsis</TextInfo>
    </FlexCard>
  );
}
