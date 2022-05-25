import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderDiv, SelectButton, RegisterButton } from "./StylesHeader";
export function Header({ setTitle }) {
  const navigate = useNavigate();
  const { pathname } = useLocation() || {};
  const { t: translate } = useTranslation();

  function onPageChange(key) {
    if (key === "personagens") {
      navigate("/people");
    } else {
      navigate("/movies");
    }
  }

  return (
    <HeaderDiv>
      <div style={{ cursor: "pointer" }}>
        <h1>
          {translate("header:logo.0")} <br /> {translate("header:logo.1")}
        </h1>
        <h2>{translate("header:logo.2")}</h2>
      </div>
      <SelectButton
        selected={pathname.includes("/people")}
        onClick={() => onPageChange("personagens")}
      >
        {translate("header:button.0")}
      </SelectButton>
      <SelectButton
        selected={pathname.includes("/movies")}
        onClick={() => onPageChange("filmes")}
      >
        {translate("header:button.1")}
      </SelectButton>
      <RegisterButton onClick={() => navigate("/register")}>
        {translate("header:button.2")}
      </RegisterButton>
    </HeaderDiv>
  );
}
