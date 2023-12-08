import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 80vh;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 10px;
  margin-left: 5%;
  margin-top: 6%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 0%;
    justify-content: none;
    align-items: none;
    margin-left: 0;
  }
`;

const ImageContainer = styled.div`
display: flex;
// flex-direction: column;
justify-content: center;
align-items: center;
width: 60%; 
height: 90vh;
background-color: lightgrey;
border-radius: 10px 0 0 10px;

@media (max-width: 768px) {
  width: 100%;
  height: 40vh;
  border-radius: 10px 0 0 10px;
}
`

const CloseButton = styled.h1`
  position: absolute;
  z-index: 1;
  margin-top: -320px;
  margin-left: -120px;
  font-size: 50px;
  font-weight: 900;

`

const ProductImage = styled.img`
  max-width: 350px;
  object-fit: cover;
  opacity: 1; 
  mix-blend-mode: multiply; 
  justify-content: center;
  transform: rotate(-10deg); 

  @media (max-width: 768px) {
    width: 50%;
    transform: none; 
  }
`;

const ProductDetails = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductName = styled.h2`
font-size: 22px;
font-weight: 900;
width: 100%;
color: #212529;
text-transform: uppercase;
`

const ProductDescription = styled.p`
font-size: 18px;
// font-weight: 900;
width: 100%;
color: #212529;
line-height: 1.2;
`
const ProductPrice = styled.h1`
font-size: 40px;
font-weight: 900;
width: 100%;
color: #212529;
margin-top: 20px;
`
const ProductCategory = styled.p`
font-size: 18px;
// font-weight: 900;
width: 100%;
color: #212529;
line-height: 1.2;
text-transform: uppercase;
color: orange;
`

export default function ProductDetail({products}){
  const { id } = useParams();
const product = products.find(p => p.id === Number(id));

  return product ? (
    <Container className="item">
      <ImageContainer>
        <Link to={`/`} style={{textDecoration: "none"}} >
        <CloseButton>X</CloseButton>
        </Link>
      <ProductImage src={product.image} alt={product.title} />
      </ImageContainer>
    
      <ProductDetails>
      <i><ProductCategory>{product.category}</ProductCategory></i>
        <ProductName>{product.title}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
      </ProductDetails>
    </Container>
  ): (
    <div>Product not found</div>
  );
}