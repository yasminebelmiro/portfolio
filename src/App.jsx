import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import About from "./pages/About/about";
import Cv from "./pages/Cv/cv";
import Projects from "./pages/Projects/projects";
import Contacts from "./pages/Contacts/contacts";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/curriculo" element={<Cv />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/projetos/aplicacoes/" element={<Projects />} />
        <Route path="/projetos/protitipagem/" element={<Projects />} />
        <Route path="/contatos" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
