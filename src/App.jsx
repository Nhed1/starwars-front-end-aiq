import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "aiq-design-system";
import theme from "./theme/aiqfome";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";
import { useState } from "react";
const queryClient = new QueryClient();

function App() {
  const [title, setTitle] = useState("PERSONAGENS");

  return (
    <ThemeProvider defaultTheme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header setTitle={setTitle} />
        <Main title={title} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
