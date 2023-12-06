// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productService from "../api/Products.js";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the mock API
    productService.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
