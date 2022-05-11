import styled from "styled-components";
import { css } from "styled-components";

export const HeaderDiv = styled.div`
  position: sticky;
  top: 0;

  height: 100px;
  padding: 0 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: var(--gray-900) 0% 0% no-repeat padding-box;

  div {
    display: flex;
    align-items: center;
    width: 210px;
    justify-content: space-between;
  }
  h1,
  h2 {
    line-height: 20px;
    color: var(--primary);
    font-size: 25px;
  }

  button {
    height: 40px;
    width: 270px;
    color: var(--white-800);
    background: none;
    font-weight: 400;
    font-size: 18px;
    font-family: "StarJedi";
  }
`;

export const SelectButton = styled.button`
  border-radius: 40px;
  border: none;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: var(--gray-500);
  }
  ${({ selected }) =>
    !!selected &&
    css`
      background-color: var(--gray-500) !important;
    `}
`;
export const RegisterButton = styled.button`
  border: 2px solid var(--primary);

  transition: all 0.2s linear;
  &:hover {
    background-color: var(--primary);
    color: var(--gray-900);
  }
`;
