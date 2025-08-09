import React from "react";
import styles from "./Header.module.css"; // Usaremos o mesmo CSS para a Navbar

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a href="#produtos">Produtos</a>
        </li>
        <li>
          <a href="#categorias">Categorias</a>
        </li>
        <li>
          <a href="#quemsomos">Quem Somos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <a href="#Nossaloc">Nossa Localização</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
