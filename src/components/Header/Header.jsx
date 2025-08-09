import React from 'react';
import logo from '../../assets/LOGOBRANCA.webp';
import NavBar from './NavBar'; // Importe a NavBar
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <img src={logo} alt="Planeta Moto Peças" className={styles.logo} />
      </a>
      <NavBar /> {/* Use o componente NavBar aqui */}
    </header>
  );
};

export default Header;