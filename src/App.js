import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;