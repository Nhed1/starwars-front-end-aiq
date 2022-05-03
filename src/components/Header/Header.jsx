import { HeaderDiv, SelectButton, RegisterButton } from "./StylesHeader";
export function Header({ setTitle }) {
  return (
    <HeaderDiv>
      <div style={{ cursor: "pointer" }}>
        <h1>
          START <br /> WARS
        </h1>
        <h2>CASTING</h2>
      </div>
      <SelectButton onClick={() => setTitle("personagens")}>
        personagens
      </SelectButton>
      <SelectButton onClick={() => setTitle("filmes")}>filmes</SelectButton>
      <RegisterButton>cadastrar - se</RegisterButton>
    </HeaderDiv>
  );
}
