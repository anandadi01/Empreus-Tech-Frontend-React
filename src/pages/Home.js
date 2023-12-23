// frontend/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles.css';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);  // Track the current page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/?page=${page}`); // Update with your actual backend API endpoint
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, [page]);  // Fetch data whenever the page changes

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="home">
      <h1>Product Catalog</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)} disabled={!products.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
