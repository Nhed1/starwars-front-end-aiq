import { Input } from "aiq-design-system";
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
    font-size: 25px;
    text-align: center;
    margin: 30px 0;
    color: var(--primary);
  }
`;

export const InputStyled = styled(Input)`
  &::placeholder {
    color: var(--white);
  }

  & {
    color: white;
    font-size: 18px;
  }
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
