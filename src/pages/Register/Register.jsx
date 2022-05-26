import { Flex, Text } from "aiq-design-system";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { TextInfo } from "../../components/TextInfo";
import { RegisterButton } from "./RegisterButton";
import RegisterInput from "./RegisterInput";
import RegisterMovieInformation from "./RegisterMovieInformation";

export default function Register() {
  return (
    <RegisterContainer flexDirection="column">
      <Text textAlign="center" color="primary" fontSize="xxlarge">
        Participe do próximo filme
      </Text>
      <RegisterForm marginY="30px">
        <Flex flexDirection="column">
          <Text color="primary" mb="10px" fontSize="xlarge">
            Digite suas informações
          </Text>
          <Text>informações gerais</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <RegisterInput label="NOME" placeholder="Digite seu nome" />
          <RegisterInput
            label="DATA DE NASCIMENTO"
            placeholder="Digite sua data de nascimento"
          />
        </Flex>
        <Flex justifyContent="space-between">
          <RegisterInput label="EMAIL" placeholder="Digite seu email" />
          <RegisterInput
            label="TELEFONE"
            placeholder="Digite seu numero de telefone"
          />
        </Flex>
        <Flex justifyContent="space-between">
          <RegisterInput
            label="CRIE SUA SENHA"
            placeholder="Digite sua senha"
          />
          <RegisterInput
            label="CONFIRME SUA SENHA"
            placeholder="Digite sua senha"
          />
        </Flex>
        <RegisterMovieInformation />
        <RegisterButton text="Enviar" />
      </RegisterForm>
    </RegisterContainer>
  );
}

const RegisterContainer = styled(Flex)`
  margin-top: 20px;
  padding: 0 100px;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.form`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background-color: var(--gray-500);
  border: 1px var(--gray-200) solid;
`;
