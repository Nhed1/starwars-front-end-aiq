import { Header } from "./components/Header/Header";
import { People } from "./components/People/People";
import { GlobalStyle } from "./styles/globalStyles";
import { useState } from "react";
import { Provider } from "./providers";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import PersonDetails from "./components/PersonDetails/[id]";
import MovieDetails from "./components/MovieDetails/[id]";
import { Movies } from "./components/Movies/Movies";

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
