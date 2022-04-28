import { swapi } from "../../api/swapi";
import { useQuery } from "react-query";
import styled from "styled-components";

export function Main({ title }) {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return swapi.get("/people");
  });

  if (isLoading) return "Loading...";
  if (error) return "an error has ocurred: " + error.message;
  const people = data.data.results.map((person) => {
    return {
      name: person.name,
      height: person.height,
    };
  });

  return (
    <MainDiv>
      <div>
        <h1>{title}</h1>
        <input type="text" />
      </div>
      <GridDiv>
        {people.map((person) => {
          return <p>{person.name}</p>;
        })}
      </GridDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 20px;
  column-gap: 30px;
  margin-top: 30px;
`;
