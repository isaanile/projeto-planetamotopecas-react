// src/Rotas.js

import React from "react";
import { Routes, Route } from "react-router-dom";

// Importa os componentes das páginas que você criou
import Home from "./pages/Home";
import Sobrenos from "./pages/Sobrenos";
import Contato from "./pages/Contato";

const Rotas = () => {
  return (
    <Routes>
      {/* A rota para a página inicial */}
      <Route path="/" element={<Home />} />

      {/* A rota para a página "Sobre nós" */}
      <Route path="/sobre" element={<Sobrenos />} />

      {/* A rota para a página de contato */}
      <Route path="/contato" element={<Contato />} />

      {/* Rota para páginas não encontradas (opcional) */}
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
};

export default Rotas;
