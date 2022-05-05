import styled from "styled-components";
import { Flex } from "aiq-design-system";
import { Button } from "aiq-design-system";

export const FlexStyled = styled(Flex)`
  background-color: var(--gray-500);
  border: 1px var(--gray-200) solid;
`;

export const ButtonStyled = styled(Button)`
  align-self: center;
  margin-top: 15px;

  display: flex;
  justify-content: center;

  width: 90%;
  height: 60px;

  font-size: 25px;
  border: 1px solid var(--primary) !important;
  font-family: "StarJedi";
`;
