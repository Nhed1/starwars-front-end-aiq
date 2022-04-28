import { ThemeProvider } from "aiq-design-system";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
