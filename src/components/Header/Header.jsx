import { HeaderDiv, SelectButton, RegisterButton } from "./StylesHeader";

export function Header() {
  return (
    <HeaderDiv>
      <div>
        <h1>
          START <br /> WARS
        </h1>
        <h2>CASTING</h2>
      </div>
      <SelectButton>PERSONAGENS</SelectButton>
      <SelectButton>FILMES</SelectButton>
      <RegisterButton>CADASTRAR - SE</RegisterButton>
    </HeaderDiv>
  );
}
