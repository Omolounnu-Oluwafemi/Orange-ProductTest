import React from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto ;
column-gap: 24px;
justify-content: center;
align-items: center;
margin: 10px auto;


@media (max-width: 768px) {
  grid-template-columns: auto auto;
}

@media (max-width: 576px) {
  grid-template-columns: auto;
}
`;

const Store = styled.h1`
font-size: 40px;
font-weight: 700;
margin-bottom: 50px;
text-align: center;

@media (max-width: 768px) {
  font-size: 32px;
}

@media (max-width: 576px) {
  font-size: 24px;
}
`;

const ProductHolder = styled.div`
border: 1px solid #ced4da;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding: 40px;  
gap: 20px;
border: 1px solid orange;
color: orange;

&:hover {
  background-color: #eda20b;
  color: #ffffff !important;
}
`;

const ProductName = styled.h4`
font-size: 15px;
font-weight: 500;
color: #212529;
`
const ProductIcon = styled.img`
width: 50px;
height: 50px;
opacity: 1; 
  mix-blend-mode: multiply; 
`
const ProductDetails = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const ProductPrice = styled.h1`
}
`

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







