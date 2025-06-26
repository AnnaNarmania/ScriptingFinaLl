import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; // Correct import path
import './ShippingMethodPage.css';
import { useForm } from '../../contexts/FormContext';

const ShippingMethodPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const {
    selectedMethod, 
    setSelectedMethod,
    formData: { contact, address, postalCode, city, province, country },
    } = useForm();
//   const [selectedMethod, setSelectedMethod] = useState('standard');

  

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 0, delivery: 'Free' },
    { id: 'express', name: 'Express Shipping', price: 4.99, delivery: '$4.99' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/payment');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = selectedMethod === 'express' ? 4.99 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="shipping-method-container">
<div className="progress-steps">
  Cart &gt; Details &gt; <span className="current-step">Shipping</span> &gt; Payment
</div>


      <div className="shipping-method-content">
        <div className="shipping-method-form">
          <p>contact {contact}</p>
          
          <div className="divider"></div>
          {/* concatenacia addressic daamate */}
          <p> ship to {`${address}, ${postalCode}, ${city} ${province}, ${country}`}</p>
          
          <div className="divider"></div>
          
          <h2>Shipping method</h2>
          
          <form onSubmit={handleSubmit}>
            {shippingOptions.map(option => (
              <div 
                key={option.id} 
                className={`shipping-option ${selectedMethod === option.id ? 'selected' : ''}`}
                onClick={() => setSelectedMethod(option.id)}
              >
                <input
                  type="radio"
                  id={option.id}
                  name="shippingMethod"
                  checked={selectedMethod === option.id}
                  onChange={() => {}}
                />
                <label htmlFor={option.id}>
                  <span>{option.name}</span>
                  <span>{option.delivery}</span>
                </label>
              </div>
            ))}
            
            <div className="button-group">
              <button type="button" onClick={() => navigate(-1)}>
                Back to details
              </button>
              <button type="submit">
                Go to payment
              </button>
            </div>
          </form>
        </div>
        
   <div className="ordersummary">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <img 
                src={item.images[0]} 
                alt={item.name} 
                className="product-image"
              />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          
          
          <div className="divider"></div>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? 'Free Shipping' : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          
          <div className="divider"></div>
          
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethodPage;