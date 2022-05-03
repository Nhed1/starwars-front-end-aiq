import { useTranslation } from "react-i18next";
import { HeaderDiv, SelectButton, RegisterButton } from "./StylesHeader";
export function Header({ setTitle }) {
  const { t: translate } = useTranslation();

  return (
    <HeaderDiv>
      <div style={{ cursor: "pointer" }}>
        <h1>
          {translate("header:logo.0")} <br /> {translate("header:logo.1")}
        </h1>
        <h2>{translate("header:logo.2")}</h2>
      </div>
      <SelectButton onClick={() => setTitle("personagens")}>
        {translate("header:button.0")}
      </SelectButton>
      <SelectButton onClick={() => setTitle("filmes")}>
        {translate("header:button.1")}
      </SelectButton>
      <RegisterButton>{translate("header:button.2")}</RegisterButton>
    </HeaderDiv>
  );
}
