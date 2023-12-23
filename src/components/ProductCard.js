// frontend/src/components/ProductCard.js
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const { name, companyName, id, is_authenticated } = product;

  const handleBuyClick = async () => {
    if (is_authenticated) {
      // Implement buy functionality for authenticated users
      try {
        await axios.post('http://localhost:8000/api/buy-product/', { product: id, quantity: 1 });
        console.log('Product purchased successfully!');
      } catch (error) {
        console.error('Error purchasing product:', error);
      }
      // console.log(`Buy clicked for product ${id}`);
    } else {
      // Optionally, redirect to the login page or show a message
      console.log('User is not authenticated. Redirect to login page or show a message.');
    }
  };

  const handleAddToCartClick = async() => {
    if (is_authenticated) {
      // Implement add to cart functionality for authenticated users
      try {
        await axios.post('http://localhost:8000/api/add-to-cart/', { product: id, quantity: 1 });
        console.log('Product added to cart successfully!');
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
      // console.log(`Add to cart clicked for product ${id}`);
    } else {
      // Optionally, redirect to the login page or show a message
      console.log('User is not authenticated. Redirect to login page or show a message.');
    }
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Company: {companyName}</p>
      <button onClick={handleBuyClick} disabled={!is_authenticated}>
        Buy
      </button>
      <button onClick={handleAddToCartClick} disabled={!is_authenticated}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
