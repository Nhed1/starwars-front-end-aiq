import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";

export function CardPersonBirth({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Text fontSize="xxlarge" color="primary">
        {data.name}
      </Text>

      <Text fontSize="xlarge">{translate("card:birth:title")}</Text>
      <Flex alignItems="center">
        <TextInfo fontSize="medium">
          {translate("card:birth:birthYear")}
        </TextInfo>
        <TextInfo fontSize="medium">{data.birthYear}</TextInfo>
      </Flex>

      <Flex alignItems="center">
        <TextInfo fontSize={"medium"}>
          {translate("card:birth:homeworld")}
        </TextInfo>
        <TextInfo>{<APIData url={data.homeworld} field="name" />}</TextInfo>
      </Flex>
    </Flex>
  );
}
