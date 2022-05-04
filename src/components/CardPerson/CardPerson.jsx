import { CardPersonBirth } from "./CardPersonBirth";
import { CardPersonBody } from "./CardPersonBody";
import { FlexStyled } from "./CardPersonStyles";
import { CardPersonVehicles } from "./CardPersonVehicles";

export function CardPerson({ data }) {
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
    >
      <CardPersonBirth data={data} />
      <CardPersonBody data={data} />
      <CardPersonVehicles data={data} />
    </FlexStyled>
  );
}
