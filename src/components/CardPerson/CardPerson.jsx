import styled from "styled-components";
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
        <p>DATA: {data.birthYear}</p>
        <p>PLANETA: {data.homeworld}</p>
      </div>

      <div>
        <strong>DESCRIÇÃO FÍSICA</strong>
        <strong>ESPÉCIE: </strong>
        {data.species[0]
          ? data.species.map((specie) => <p>{specie}</p>)
          : "Não possui"}
        <p>ALTURA: {data.height}</p>
      </div>

      <div>
        <strong>VEÍCULOS USADOS</strong>
        {data.vehicle ? (
          data.vehicles.map((vehicle) => <p>{vehicle}</p>)
        ) : (
          <p>nao tem veiculo</p>
        )}
      </div>
    </Flex>
  );
}

const CardDiv = styled.div`
  strong {
    display: block;
  }
  h2 {
    color: #ffe81f;
  }
  p {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;
