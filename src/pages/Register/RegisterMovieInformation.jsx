import { Button, Select, Flex, Input, Text } from "aiq-design-system";
import React from "react";
import styled from "styled-components";
import { TextInfo } from "../../components/TextInfo";
import { RegisterButton } from "./RegisterButton";

export default function RegisterMovieInformation() {
  const itens = [
    "Luke Skywalker",
    "R2-D2",
    "Darth Vader",
    "Leia Organa",
    "Anakin Skywalker",
    "Han Solo",
  ];
  return (
    <Flex flexDirection="column" mt="20px">
      <Text>Sobre o seu contato com star wars</Text>
      <TextInfo mt="10px" mb="10px">
        Qual seu personagem favorito?
      </TextInfo>
      <SelectStyled
        items={itens}
        placeholder="escolha o personagem"
      ></SelectStyled>

      <TextInfo mt="10px">Anexe se currículo</TextInfo>
      <RegisterButton text="Escolher arquivo" />
      <TextInfo marginTop="10px">Resumo da sua carreira artística</TextInfo>
      <InputStyled
        type="textarea"
        placeholder="Escreva aqui o resumo"
      ></InputStyled>
    </Flex>
  );
}

const SelectStyled = styled(Select)`
  width: 45%;
  li {
    font-family: sans-serif;
    background: var(--gray-500);
    color: var(--white) !important;
  }
  input {
    background-color: var(--gray-500);
    color: var(--white) !important;
  }
`;

const InputStyled = styled(Input)`
  background-color: var(--gray-500);
  border: 1px solid var(--gray-200);
  /* height: 100px; */
  color: var(--white);
`;
