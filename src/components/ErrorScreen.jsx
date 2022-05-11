import { Flex, Text } from "aiq-design-system";
export function ErrorScreen({ error }) {
  return (
    <Flex
      height="calc(100vh - 100px)"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="primary" fontSize="xlarge">
        {error.message}
      </Text>
    </Flex>
  );
}
