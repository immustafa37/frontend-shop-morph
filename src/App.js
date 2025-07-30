import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/glassmorphism.css';
import './styles/neumorphism.css';
import './styles/animations.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;