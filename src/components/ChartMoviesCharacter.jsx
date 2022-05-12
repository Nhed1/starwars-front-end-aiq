import { Flex, Text } from "aiq-design-system";
import React from "react";
import styled from "styled-components";

export default function ChartMoviesCharacter() {
  return (
    <FlexChartPerson flexDirection="column">
      <Text>Aparições em filmes</Text>
      <Text>Aparece em</Text>
    </FlexChartPerson>
  );
}

const FlexChartPerson = styled(Flex)`
  justify-content: space-between;
  height: fit-content;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;
`;
