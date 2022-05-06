import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonStyled, FlexStyled } from "../../../styles/CardStyles";

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
    >
      <h1>{data.title}</h1>
      <Link to={`/movies/${data.id}`}>
        <ButtonStyled> {translate("card:button:title")}</ButtonStyled>
      </Link>
    </FlexStyled>
  );
}
