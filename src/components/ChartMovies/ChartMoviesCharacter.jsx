import { Flex, Text } from "aiq-design-system";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { APIData } from "../ApiData";
import { TextInfo } from "../TextInfo";
import { ChartMoviesComponent } from "./ChartMoviesComponent";

export default function ChartMoviesCharacter({ data }) {
  const { t: translate } = useTranslation();

  return (
    <FlexChartPerson flexDirection="column">
      <Text>{translate("characters_details:show_up")}</Text>
      <ChartMoviesComponent data={data} />
      <Text>{translate("characters_details:show_up_2")}</Text>
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
  width: 50%;
  height: 500px;
  border: 2px var(--gray-200) solid;
  background-color: var(--gray-500);
  padding: 20px;
  margin: 20px 0;
`;
