import { ThemeProvider } from "aiq-design-system";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
