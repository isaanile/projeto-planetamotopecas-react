import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Categorias from '../../components/Categorias/Categorias';
import ProdutosDestaque from '../../components/ProdutosDestaque/ProdutosDestaque';
import QuemSomos from '../../components/QuemSomos/QuemSomos';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <Hero />
        <Categorias id="categorias" /> {/* Adicione o ID aqui */}
        <ProdutosDestaque id="produtos" /> {/* Adicione o ID aqui */}
        <QuemSomos id="quemsomos" /> {/* Adicione o ID aqui */}
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;