import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonStyled, FlexStyled } from "../../../styles/CardStyles";
import { Movies } from "../Movies";
import { Text, Flex } from "aiq-design-system";
import { TextInfo } from "../../TextInfo";

export function CardMovie({ data, title }) {
  const { t: translate } = useTranslation();
  return (
    <FlexStyled
      width={{
        _: "100%",
        hd: "25%",
        web: "33%",
        tablet: "50%",
        fullhd: "20%",
      }}
      flexDirection={"column"}
      justifyContent="space-between"
      height="300px"
    >
      <Flex flexDirection="column">
        <Text fontSize="xxlarge" color="primary">
          {data.title}
        </Text>
        <Flex alignItems="center">
          <TextInfo mr="10px">{translate("card:film:episode")}</TextInfo>
          <TextInfo>{data.episode_id}</TextInfo>
        </Flex>
      </Flex>

      <Text>{translate("card:film:info")}</Text>

      <Flex alignItems="center" gap="20px">
        <TextInfo mr="10px">{translate("card:film:release_date")}</TextInfo>
        <TextInfo>{data.release_date}</TextInfo>
      </Flex>
      <TextInfo>
        {translate("card:film:director")} {data.director}
      </TextInfo>
      <Link to={`/movies/${data.id}`}>
        <ButtonStyled> {translate("card:button:title")}</ButtonStyled>
      </Link>
    </FlexStyled>
  );
}
