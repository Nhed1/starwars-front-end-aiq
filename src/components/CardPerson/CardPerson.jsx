import { Flex, Text } from "aiq-design-system";

export function CardPerson({ data }) {
  return (
    <Flex
      width={{
        _: "100%",
        hd: "25%",
        web: "33%",
        tablet: "50%",
        fullhd: "20%",
      }}
      flexDirection={"column"}
    >
      <Text fontSize={"xxlarge"} color={"primary"}>
        {data.name}
      </Text>
      <div>
        <strong>NASCIMENTO</strong>
        <Text fontSize={"medium"}>DATA: {data.birthYear}</Text>
        <Text fontSize={"medium"}>PLANETA: {data.homeworld}</Text>
      </div>

      <div>
        <Text fontSize={"large"}>DESCRIÇÃO FÍSICA</Text>
        <Text fontSize={"medium"}>ESPÉCIE: </Text>
        {data.species[0] ? (
          data.species.map((specie) => <Text>{specie}</Text>)
        ) : (
          <Text fontSize={"medium"}>Não possui</Text>
        )}
        <Text fontSize={"medium"}>ALTURA: {data.height}</Text>
      </div>

      <div>
        <Text fontSize={"large"}>VEICULOS USADOS</Text>
        {data.vehicle ? (
          data.vehicles.map((vehicle) => <Text>{vehicle}</Text>)
        ) : (
          <Text>Não possui veiculos</Text>
        )}
      </div>
    </Flex>
  );
}
