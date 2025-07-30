import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <div className="home">
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to GlassShop
        </motion.h1>
        <p>Discover our unique glassmorphism products</p>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;