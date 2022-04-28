import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 20px;
  column-gap: 30px;
  margin-top: 30px;
`;
