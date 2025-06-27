import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; 
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


  

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', price: 0, delivery: 'Free' },
    { id: 'express', name: 'Express Shipping', price: 4.99, delivery: '$4.99' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (total === 0) return alert("Your cart is empty. Please add items to your cart before proceeding to checkout.");
    else
        navigate('/payment');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = selectedMethod === 'express' ? 4.99 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="shippingmethodcontainer">

      <div className="shippingmethodcontent">
        <div className="progresssteps">
  <p className="progressstepsprevious">Cart </p> 
  <p className="progressstepsprevious"> &gt;   Details </p> 
  <p className="progressstep"> &gt;   <span className="current-step">Shipping</span> </p>
  <p className="progressstepNext"> &gt;   Payment </p>
</div>
        <div className="shippingmethodform1">
          <div>Contact {contact}</div>   
                    <div className="divider"></div> 
          <div> Ship to {`${address}, ${postalCode}, ${city} ${province}, ${country}`}</div>
          </div>
          
          <h3>Shipping method</h3>
          
          <form className='shippingmethodform' onSubmit={handleSubmit}>
            {shippingOptions.map(option => (
              <div 
                key={option.id} 
                className={`shippingoption ${selectedMethod === option.id ? 'selected' : ''}`}
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
            
            <div className="buttongroup">
              <button type="button" onClick={() => navigate(-1)}>
                Back to details
              </button>
              <button type="submit">
                Go to payment
              </button>
            </div>
          </form>
        </div>
     
          
          <div className="rigthside">
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
          <div className="summaryrow">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="shippingsum">
            <span>Shipping</span>
            <span className='shippingmethod'>{shippingCost === 0 ? 'Free Shipping' : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          <div className="divider"></div>
          <div className="summarytotal">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
</div>
  );
};

export default ShippingMethodPage;