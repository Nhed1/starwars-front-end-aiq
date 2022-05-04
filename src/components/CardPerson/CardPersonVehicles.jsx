import { Flex, Text } from "aiq-design-system";
import { useTranslation } from "react-i18next";

export function CardPersonVehicles({ data }) {
  const { t: translate } = useTranslation();

  return (
    <Flex flexDirection="column">
      <Text fontSize="xlarge">{translate("card:vehicles:title")}</Text>
      {data.vehicle ? (
        data.vehicles.map((vehicle) => <Text>{vehicle}</Text>)
      ) : (
        <Text>{translate("card:errorMessages.1")}</Text>
      )}
    </Flex>
  );
}
