import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { APIData } from "../ApiData";

export function CardPersonBirth({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection={"column"}>
      <Text fontSize="xxlarge" color="primary">
        {data.name}
      </Text>
      <Text fontSize="xlarge">{translate("card:birth:title")}</Text>
      <Text fontSize={"medium"}>
        {translate("card:birth:birthYear")} {data.birthYear}
      </Text>
      <Text fontSize={"medium"}>
        {translate("card:birth:homeworld")}{" "}
        {<APIData url={data.homeworld} field="name" />}
      </Text>
    </Flex>
  );
}
