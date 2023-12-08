import React from 'react';
import { 
  Container,
  ImageContainer,
  CloseButton,
  ProductImage,
  ProductDetails,
  ProductCategory,
  ProductName,
  ProductDescription,
  ProductPrice
} from '../styles/ProductDetailsStyles';
import { Link, useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductDetailProps {
  products: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({products}) =>{
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

export default ProductDetail;