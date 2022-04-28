export function CardPerson({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        <strong>NASCIMENTO</strong>
        <p>DATA: {data.birthYear}</p>
        <p>PLANETA: {data.homeworld}</p>
      </div>

      <div>
        <strong>DESCRIÇÃO FÍSICA</strong>
        <p>ESPÉCIE: {data.species ? data.species[0] : "not found"}</p>
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
    </div>
  );
}
