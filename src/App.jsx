import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "aiq-design-system";
import theme from "./theme/aiqfome";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header />
        <Main />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
