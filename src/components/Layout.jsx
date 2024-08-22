// src/components/Layout/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
