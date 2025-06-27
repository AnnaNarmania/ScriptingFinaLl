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
    } else if(total===0){
      alert("Your cart is empty. Please add items to your cart before proceeding.");
    }
    else {
      navigate('/confirmation');
    }
  };

  return (
    <div className="payment-page-container">
      <div className="checkout-left">
       <div className="progresssteps">
<div className="progresssteps">
  <p className="progressstepsprevious">Cart </p> 
  <p className="progressstep"> &gt; Details </p> 
  <p className="progressstep"> &gt; Shipping</p>
  <p className="progressstep"> &gt;   <span className="current-step">Payment</span></p>
</div>
</div>

        <div className="paymentSumm">
          <div><strong>Contact</strong> {contact}</div>   
          <div className="divider"></div> 
          <div><strong>Ship to</strong> {`${address}, ${postalCode}, ${city} ${province}, ${country}`}</div>
          <div className="divider"></div> 
          <div><strong>Method</strong>{selectedMethod === 'express' ? 'Express Shipping - $4.99' : 'Standard Shipping - FREE'}</div>
          </div> 

        <h3>Payment method</h3>
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="card-box">
            <div className="card-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <path d="M0 7.75C0 6.72229 0.408258 5.73666 1.13496 5.00996C1.86166 4.28326 2.84729 3.875 3.875 3.875H27.125C28.1527 3.875 29.1383 4.28326 29.865 5.00996C30.5917 5.73666 31 6.72229 31 7.75V9.6875H0V7.75Z" fill="#56B280"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.5625V23.25C0 24.2777 0.408258 25.2633 1.13496 25.99C1.86166 26.7167 2.84729 27.125 3.875 27.125H27.125C28.1527 27.125 29.1383 26.7167 29.865 25.99C30.5917 25.2633 31 24.2777 31 23.25V13.5625H0ZM5.8125 17.4375C5.29864 17.4375 4.80583 17.6416 4.44248 18.005C4.07913 18.3683 3.875 18.8611 3.875 19.375V21.3125C3.875 21.8264 4.07913 22.3192 4.44248 22.6825C4.80583 23.0459 5.29864 23.25 5.8125 23.25H7.75C8.26386 23.25 8.75667 23.0459 9.12002 22.6825C9.48337 22.3192 9.6875 21.8264 9.6875 21.3125V19.375C9.6875 18.8611 9.48337 18.3683 9.12002 18.005C8.75667 17.6416 8.26386 17.4375 7.75 17.4375H5.8125Z" fill="#56B280"/>
</svg>Credit Card</div>
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

          <div className="buttons">
            <button type="button" className="back" onClick={() => navigate(-1)}>
              Back to shipping
            </button>
            <button type="submit" className="pay">
              Pay now
            </button>
          </div>
        </form>
      </div>

      <div className="checkout-right">
         <div className="scroll">
    {cartItems.map(item => (
      <div key={item.id} className="order-item">
        <img 
          src={item.images[0]} 
          alt={item.name} 
          className="productimage"
        />
        <div className="itemdetails">
          <p className="itemname">{item.name}</p>
          <p className="itemprice">${item.price.toFixed(2)}</p>
        </div>
      </div>
    ))}
  </div>  

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
