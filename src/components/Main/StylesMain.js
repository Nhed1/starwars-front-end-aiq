import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchDiv = styled.div`
  max-width: 570px;
  width: 100%;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin: 30px 0;
  }
`;

export const FlexStyled = styled.div`
  width: 100vw;
  display: flex;
  margin: 20px -8px 0;
  flex-wrap: wrap;

  & > * {
    padding: 8px;
  }
`;

// export const GridDiv = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   row-gap: 20px;
//   column-gap: 30px;
//   margin-top: 30px;
// `;
