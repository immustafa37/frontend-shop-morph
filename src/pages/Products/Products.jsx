import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products';

const Products = () => {
  return (
    <div className="products-page">
      <h1>All Products</h1>
      <div className="products-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;