// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../api/Products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details from the mock API based on the ID
    productService.getProductById(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetail;
