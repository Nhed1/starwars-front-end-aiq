import { ThemeProvider } from "aiq-design-system";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
