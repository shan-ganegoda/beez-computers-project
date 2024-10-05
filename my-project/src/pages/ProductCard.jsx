import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';


const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const openProductDetails = () => {
    navigate(`/productdetails/${product.name}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={openProductDetails}>
      <img src={product.imageUrl} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.type}</p>
        <p className="Price-text">RS {product.price}</p>
        
        <div
          className="cart-icon-container"
          onClick={(e) => {
            e.stopPropagation();  // Prevent navigating to details when clicking the cart icon
            addToCart(product);   // Add product to cart when icon is clicked
          }}
        >
          <FaShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard