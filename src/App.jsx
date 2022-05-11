import { Header } from "./components/Header/Header";
import { People } from "./pages/People/People";
import PersonDetails from "./pages/PersonDetails/[id]";
import MovieDetails from "./pages/MovieDetails/[id]";
import { Movies } from "./pages/Movies/Movies";

import { GlobalStyle } from "./styles/globalStyles";

import { useState } from "react";
import { Provider } from "./providers";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export function App() {
  const [title, setTitle] = useState("personagens");

  return (
    <Router>
      <Provider>
        <GlobalStyle />
        <Header setTitle={setTitle} />
        <Routes>
          <Route path="/people" element={<People title="personagens" />} />
          <Route path="/movies" element={<Movies title="filmes" />} />
          <Route path="/people/:id" element={<PersonDetails />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/people" replace />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
