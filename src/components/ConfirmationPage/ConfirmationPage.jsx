import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useForm } from '../../contexts/FormContext';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css';

const ConfirmationPage = () => {
  const { cartItems } = useCart();
  const {
    formData: { contact, address, postalCode, city, province, country },
    selectedMethod,
  } = useForm();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = selectedMethod === 'express' ? 4.99 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="confirmation-page-container">
      {/* Left side: message */}
      <div className="confirmation-left">
        <div className="progress-steps">
          Cart &gt; Details &gt; Shipping &gt; <span className="current-step">Payment</span>
        </div>

        <div className="confirmation-message">
          <div className="checkmark-circle">
            <span>&#10003;</span>
          </div>
          <h1>Payment Confirmed</h1>
          <p className="order-id">ORDER #2039</p>
          <p className="thanks-msg">We’ve received your order, {contact}.</p>
          <p>Your items will be shipped to:</p>
          <p>{`${address}, ${postalCode}, ${city}, ${province}, ${country}`}</p>

          <button className="back-button" onClick={() => navigate('/')}>
            Back to shopping
          </button>
        </div>
      </div>

      {/* Right side: summary */}
      <div className="confirmation-right">
        {cartItems.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.images[0]} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)} × {item.quantity}</p>
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
          <span>Paid</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
