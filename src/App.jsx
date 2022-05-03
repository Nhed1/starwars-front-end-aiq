import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";
import { useState } from "react";
import { Provider } from "./providers";

export function App() {
  const [title, setTitle] = useState("personagens");

  return (
    <Provider>
      <GlobalStyle />
      <Header setTitle={setTitle} />
      <Main title={title} />
    </Provider>
  );
}

export default App;
