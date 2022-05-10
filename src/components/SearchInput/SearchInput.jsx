import { SearchDiv, InputStyled } from "./SearchStyles";
import { useTranslation } from "react-i18next";

export function SearchInput({ title }) {
  const { t: translate } = useTranslation();
  return (
    <SearchDiv>
      <h1>{title}</h1>
      <InputStyled
        type="text"
        width="100%"
        placeholder={`${translate(
          "main:inputPlaceholder"
        )} ${title.toUpperCase()}`}
        backgroundColor={"gray-900"}
        border={"1px solid"}
        borderColor={"gray-200"}
      />
    </SearchDiv>
  );
}
