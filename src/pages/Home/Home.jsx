import React from 'react';
import './Home.css';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ShopVerse</h1>
      <p>Explore a wide range of digital & physical products!</p>
      <ThemeToggle />
      <Footer />
    </div>
  );
};

export default Home;