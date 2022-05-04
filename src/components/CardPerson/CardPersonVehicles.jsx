import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";
import { APIData } from "../ApiData";

export function CardPersonVehicles({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Text fontSize="xlarge">{translate("card:vehicles:title")}</Text>
      {data.vehicles?.length > 0 ? (
        data.vehicles.map((vehicle) => (
          <Text>
            <APIData url={vehicle} field="name" />
          </Text>
        ))
      ) : (
        <Text>{translate("card:errorMessages.1")}</Text>
      )}
    </Flex>
  );
}
