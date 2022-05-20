import { Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { FlexCard } from "../../styles/DetailsCardStyle";
import { TextInfo } from "../TextInfo";

export default function Synopsis({ openingCrawl }) {
  const { t: translate } = useTranslation();

  return (
    <FlexCard flexDirection="column">
      <Text>{translate("movies_details:synopsis")}</Text>
      <TextInfo>{openingCrawl}</TextInfo>
    </FlexCard>
  );
}
