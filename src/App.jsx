import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/globalStyles";
import { useState } from "react";
import { Provider } from "./providers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PersonDetails from "./components/PersonDetails/[id]";
import MovieDetails from "./components/MovieDetails/[id]";

export function App() {
  const [title, setTitle] = useState("personagens");

  return (
    <Router>
      <Provider>
        <GlobalStyle />
        <Header setTitle={setTitle} />
        <Routes>
          <Route path="/" element={<Main title={title} />} />
          <Route path="/person/:id" element={<PersonDetails />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
