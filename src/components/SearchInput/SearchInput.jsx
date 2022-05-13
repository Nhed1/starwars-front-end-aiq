import { SearchDiv, InputStyled } from "./SearchStyles";
import { useTranslation } from "react-i18next";
import { getValue } from "@testing-library/user-event/dist/utils";

export function SearchInput({ title, search, setSearch }) {
  const { t: translate } = useTranslation();

  return (
    <SearchDiv>
      <h1>{title}</h1>
      <InputStyled
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        onChange={getValue}
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
