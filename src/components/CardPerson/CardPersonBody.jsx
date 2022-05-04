import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";

export function CardPersonBody({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection={"column"}>
      <Text fontSize="xlarge">{translate("card:body:title")}</Text>
      <Flex>
        <Text fontSize={"medium"}>{translate("card:body:specie")} </Text>
        {data.species[0] ? (
          data.species.map((specie) => <Text>{specie}</Text>)
        ) : (
          <Text fontSize={"medium"}>{translate("card:errorMessages.0")}</Text>
        )}
      </Flex>
      <Text fontSize={"medium"}>
        {translate("card:body:height")} {data.height}
      </Text>
    </Flex>
  );
}
