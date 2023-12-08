import React from 'react';
import { 
  Container,
  ProductHolder,
  ProductIcon,
  ProductDetails,
  ProductName,
  ProductPrice,
  Store
 } from '../styles/ProductListStyles';
import { Link } from 'react-router-dom';


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <Store>Orange Fashion Store</Store>
      <Container>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} style={{textDecoration: "none"}} key={product.id}>
            <ProductHolder key={product.id} >
              <ProductIcon src={product.image} alt={product.title} />
              <ProductDetails>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductDetails>
            </ProductHolder>
          </Link>
        ))}
      </Container>
    </>
  );
}

export default ProductList;







