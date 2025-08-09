// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import Rotas from "./Rotas"; // Importa o arquivo que contém as rotas
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      {/* A Navbar é renderizada em todas as páginas */}
      <Navbar />

      {/* O componente Rotas renderizará a página correta aqui */}
      <main>
        <Rotas />
      </main>

      {/* Você pode adicionar um Footer aqui, se quiser */}
    </div>
  );
};

export default App;
