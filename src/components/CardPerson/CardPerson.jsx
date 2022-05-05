import { CardPersonBirth } from "./CardPersonBirth";
import { CardPersonBody } from "./CardPersonBody";
import { CardPersonVehicles } from "./CardPersonVehicles";

import { FlexStyled } from "./CardPersonStyles";
import { ButtonStyled } from "./CardPersonStyles";
import { useTranslation } from "react-i18next";

export function CardPerson({ data }) {
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
      <ButtonStyled> {translate("card:button:title")}</ButtonStyled>
    </FlexStyled>
  );
}
