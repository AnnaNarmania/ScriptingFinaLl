import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useForm } from '../../contexts/FormContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const { cartItems } = useCart();
  const {
    formData: { contact, address, postalCode, city, province, country },
    selectedMethod,
  } = useForm();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = selectedMethod === 'express' ? 4.99 : 0;
  const total = subtotal + shippingCost;

  const validate = () => {
    const newErrors = {};
    if (!/^[0-9]{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^[a-zA-Z ]+$/.test(holderName)) {
      newErrors.holderName = 'Name must contain only letters';
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Expiry must be MM/YY';
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate('/confirmation');
    }
  };

  return (
    <div className="payment-page-container">
      <div className="checkout-left">
        <div className="progress-steps">
          Cart &gt; Details &gt; Shipping &gt; <span className="current-step">Payment</span>
        </div>

        <div className="payment-summary-header">
          <p><strong>Contact</strong> {contact}</p>
          <p><strong>Ship to</strong> {`${address}, ${postalCode}, ${city}, ${province}, ${country}`}</p>
          <p><strong>Method</strong> {selectedMethod === 'express' ? 'Express Shipping - $4.99' : 'Standard Shipping - FREE'}</p>
        </div>

        <h3>Payment method</h3>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="card-box">
            <div className="card-header">Credit Card</div>
            <div className="card-body">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  autoComplete="cc-number"
                />
                {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Holder Name"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                  autoComplete="cc-name"
                />
                {errors.holderName && <div className="error">{errors.holderName}</div>}
              </div>

              <div className="row">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Expiration (MM/YY)"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    autoComplete="cc-exp"
                  />
                  {errors.expiry && <div className="error">{errors.expiry}</div>}
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    autoComplete="cc-csc"
                  />
                  {errors.cvv && <div className="error">{errors.cvv}</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="payment-buttons">
            <button type="button" className="link" onClick={() => navigate(-1)}>
              Back to shipping
            </button>
            <button type="submit" className="primary">
              Pay now
            </button>
          </div>
        </form>
      </div>

      <div className="checkout-right">
        {cartItems.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.images[0]} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
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
  );
};

export default PaymentPage;
