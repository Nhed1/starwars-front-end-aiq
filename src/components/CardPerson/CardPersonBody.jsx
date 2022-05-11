import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";

export function CardPersonBody({ data }) {
  const { t: translate } = useTranslation();
  return (
    <Flex flexDirection={"column"}>
      <Text fontSize="xlarge">{translate("card:body:title")}</Text>

      <Flex>
        <TextInfo>{translate("card:body:specie")}</TextInfo>
        {data.species.length > 0 ? (
          data.species.map((specieUrl) => (
            <TextInfo>
              <APIData url={specieUrl} key={specieUrl} field="name" />
            </TextInfo>
          ))
        ) : (
          <TextInfo>{translate("card:errorMessages.0")}</TextInfo>
        )}
      </Flex>

      <Flex>
        <TextInfo> {translate("card:body:height")}</TextInfo>
        <TextInfo>{data.height}</TextInfo>
      </Flex>
    </Flex>
  );
}
