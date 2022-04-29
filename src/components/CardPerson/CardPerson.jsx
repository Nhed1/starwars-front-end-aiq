import styled from "styled-components";

export function CardPerson({ data }) {
  return (
    <CardDiv>
      <h2>{data.name}</h2>
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
    </CardDiv>
  );
}

const CardDiv = styled.div`
  /* width: 400px; */
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
