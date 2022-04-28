import { QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
