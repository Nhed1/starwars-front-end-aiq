import { Flex, Input } from "aiq-design-system";
import React from "react";
import styled from "styled-components";
import { TextInfo } from "../../components/TextInfo";

export default function RegisterInput({ label, placeholder }) {
  return (
    <Flex flexDirection="column" width="45%" mt="10px">
      <TextInfo>{label}</TextInfo>
      <InputStyled mt="5px" placeholder={placeholder}></InputStyled>
    </Flex>
  );
}

const InputStyled = styled(Input)`
  background-color: var(--gray-500);
  border: 1px var(--gray-200) solid;
  color: var(--white);
`;
