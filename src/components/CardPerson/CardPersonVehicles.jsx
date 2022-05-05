import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";

export function CardPersonVehicles({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Text fontSize="xlarge">{translate("card:vehicles:title")}</Text>
      {data.vehicles?.length > 0 ? (
        data.vehicles.map((vehicle) => (
          <TextInfo>
            <APIData url={vehicle} field="name" />
          </TextInfo>
        ))
      ) : (
        <TextInfo>{translate("card:errorMessages.1")}</TextInfo>
      )}
    </Flex>
  );
}
