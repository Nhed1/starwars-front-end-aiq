import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
`;

export const FlexContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  gap: 20px;
  margin: 30px -8px 0;
  padding: 20px;

  flex-wrap: wrap;
  & > * {
    padding: 8px;
  }
`;
