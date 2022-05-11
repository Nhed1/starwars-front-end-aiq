import { Flex, Loading } from "aiq-design-system";
export function LoadingScreen() {
  return (
    <Flex
      height="calc(100vh - 100px)"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Loading color="primary" fontSize="xlarge" />
    </Flex>
  );
}
