import styled from "styled-components";
import { Input } from "aiq-design-system";

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
