// src/api/products.js
const productService = {
    getProducts: () => {
      // Implement logic to fetch product list from the mock API
      return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
        response.json()
      );
    },
    getProductById: (id) => {
      // Implement logic to fetch product details by ID from the mock API
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) =>
        response.json()
      );
    },
  };
  
  export default productService;
  