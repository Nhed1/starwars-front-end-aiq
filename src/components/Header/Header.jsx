import { HeaderDiv, SelectButton, RegisterButton } from "./StylesHeader";

export function Header({ setTitle }) {
  return (
    <HeaderDiv>
      <div>
        <h1>
          START <br /> WARS
        </h1>
        <h2>CASTING</h2>
      </div>
      <SelectButton onClick={() => setTitle("PERSONAGENS")}>
        PERSONAGENS
      </SelectButton>
      <SelectButton onClick={() => setTitle("FILMES")}>FILMES</SelectButton>
      <RegisterButton>CADASTRAR - SE</RegisterButton>
    </HeaderDiv>
  );
}
