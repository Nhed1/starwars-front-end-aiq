import { Flex, Text } from "aiq-design-system";
import React from "react";
import styled from "styled-components";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";
import { ChartMoviesComponent } from "./ChartMoviesComponent";

export default function ChartMoviesCharacter({ data }) {
  return (
    <FlexChartPerson flexDirection="column">
      <Text>Aparições em filmes</Text>
      <ChartMoviesComponent data={data} />
      <Text>Aparece em</Text>
      <Flex flexDirection="column">
        {data.films.map((film) => {
          return (
            <TextInfo>
              <APIData url={film} field="title" />
            </TextInfo>
          );
        })}
      </Flex>
    </FlexChartPerson>
  );
}

const FlexChartPerson = styled(Flex)`
  justify-content: space-between;
  height: fit-content;
  width: 400px;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;
`;
