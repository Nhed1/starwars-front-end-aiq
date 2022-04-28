import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background: #0f0f0f 0% 0% no-repeat padding-box;

  div {
    display: flex;
    align-items: center;
    width: 210px;
    justify-content: space-between;
  }
  h1,
  h2 {
    letter-spacing: 1.28px;
    color: #ffe81f;
    font-size: 1.5rem;
    font-family: "Star Jedi", arial;
  }

  button {
    height: 40px;
    width: 270px;
    color: #fafafa;
    background: none;
  }
`;

export const SelectButton = styled.button`
  border-radius: 10px;
  border: none;
`;
export const RegisterButton = styled.button`
  border: 2px solid #ffe81f;
`;
