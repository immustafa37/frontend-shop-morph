import React from 'react';
import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';

const Products = () => {
  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;