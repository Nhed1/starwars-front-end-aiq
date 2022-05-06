import { CardPersonBirth } from "./CardPersonBirth";
import { CardPersonBody } from "./CardPersonBody";
import { CardPersonVehicles } from "./CardPersonVehicles";

import { FlexStyled } from "./CardPersonStyles";
import { ButtonStyled } from "./CardPersonStyles";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CardPerson({ data, title }) {
  const route = title === "personagens" ? "person" : "movie";
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
      <CardPersonBirth data={data} />
      <CardPersonBody data={data} />
      <CardPersonVehicles data={data} />
      <Link to={`/${route}/${data.id}`}>
        <ButtonStyled> {translate("card:button:title")}</ButtonStyled>
      </Link>
    </FlexStyled>
  );
}
