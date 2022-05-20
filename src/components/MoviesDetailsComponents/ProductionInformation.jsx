import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { FlexCard } from "../../styles/DetailsCardStyle";
import { TextInfo } from "../TextInfo";

export default function ProductionInformation({ data }) {
  const { t: translate } = useTranslation();

  return (
    <FlexCard flexDirection="column">
      <Flex>
        <Flex flexDirection="column">
          <Text>{translate("movies_details:director")}</Text>
          <TextInfo>{data.director}</TextInfo>
        </Flex>
        <Flex flexDirection="column">
          <Text>{translate("movies_details:producers")}</Text>
          <TextInfo>{data.producer}</TextInfo>
        </Flex>
      </Flex>
      <Text>{translate("movies_details:release_date")}</Text>
      <TextInfo>{data.release_date}</TextInfo>
    </FlexCard>
  );
}
