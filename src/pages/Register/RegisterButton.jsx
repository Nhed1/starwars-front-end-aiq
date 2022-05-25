import { Button, Flex } from "aiq-design-system";
import React from "react";
import styled from "styled-components";

export function RegisterButton({ text }) {
  return (
    <Flex
      width="180px"
      height="40px"
      border="2px solid white"
      justifyContent="center"
      alignItems="center"
      marginTop="6px"
    >
      <ButtonStyled>{text}</ButtonStyled>
    </Flex>
  );
}

const ButtonStyled = styled(Button)`
  span {
    text-align: center;
    font-family: "StarJedi";
  }
`;
