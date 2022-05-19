import { Flex } from "aiq-design-system";
import styled from "styled-components";

export const FlexCard = styled(Flex)`
  justify-content: space-between;
  height: fit-content;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;

  span {
    margin: 10px;
  }
`;
