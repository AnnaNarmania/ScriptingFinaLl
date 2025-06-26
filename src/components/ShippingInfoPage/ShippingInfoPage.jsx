import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './ShippingInfoPage.css';
import { useForm } from '../../contexts/FormContext';

const ShippingInfoPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const {formData, setFormData, setSavedFormData, savedFormData} = useForm();
  const [erroMessage, setErroMessage] = useState("")

  const [saveInfo, setSaveInfo] = useState(false);


  useEffect(() => {
    setFormData(savedFormData)
  }, [])


  const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const validatePhone = (phone) => {
      const re = /^[0-9\-\+\s\(\)]{10,15}$/;
      return re.test(phone);
    };
  
    const validatePostalCode = (postalCode) => {
      const re = /^[A-Za-z0-9][A-Za-z0-9\s-]{2,10}$/;
      return re.test(postalCode);
    };
  
  
const validateData = (data) => {
  if (!data.contact) return "Contact information can't be blank";

  const isEmail = validateEmail(data.contact);
  const isPhone = validatePhone(data.contact);

  if (!isEmail && !isPhone)
    return "Please enter a valid email or phone number";

  if (!data.firstName || !data.lastName)
    return "Name fields can't be blank";

  if (!data.address) return "Address can't be blank";

  if (!data.city) return "City can't be blank";

  if (!data.postalCode) return "Postal code can't be blank";
  if (!validatePostalCode(data.postalCode))
    return "Please enter a valid postal code";

  if (!data.province) return "Province can't be blank";

  if (!data.country) return "Please select a country";

  return "";
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (saveInfo) 
        setSavedFormData(formData);

    const error  = validateData(formData)
    if (error) setErroMessage(error)
    else
        navigate('/shipping-method');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="shipping-container">
        
        <div className='shipping-form'>
            <div className="progress-steps">
        Cart &gt; Details &gt; <span className="current-step">Shipping</span> &gt; Payment
        </div>
        <form onSubmit={handleSubmit}  >
          <h2 className="section-title">Contact</h2>
          <input
            type="text"
            name="contact"
            placeholder="Email or mobile phone number"
            value={formData.contact}
            onChange={(e) => handleChange(e)}
            required
            className="contactinputfield"
          />
          
          <div className="divider"></div>

          <h2 className="section-title">Shipping Address</h2>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
              required
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Second Name"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
              required
              className="input-field"
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address and number"
            value={formData.address}
            onChange={(e) => handleChange(e)}
            required
            className="input-field"
          />

          <input
            type="text"
            name="shippingNote"
            placeholder="Shipping note (optional)"
            value={formData.shippingNote}
            className="input-field"
            onChange={(e) => handleChange(e)}
          />

          <div className="location-fields">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange(e)}
              required
              className="input-field"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={(e) => handleChange(e)}
              required
              className="input-field"
            />
            <input
              type="text"
              name="province"
              placeholder="Province"
              value={formData.province}
              onChange={(e) => handleChange(e)}
              required
              className="input-field"
            />
          </div>

          <div className="country-select-wrapper">
  <label htmlFor="country" className="floating-label">Country/Region</label>
  <select
    id="country"
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
    className="styled-select"
  >
    <option value="">Select a country</option>
    <option value="Italy">Italy</option>
    <option value="United States">United States</option>
    <option value="Canada">Canada</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
  </select>
</div>


          <div className="save-info">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
              className="save-checkbox"
            />
            <label htmlFor="saveInfo" className="save-label">
              Save this information for a future fast checkout
            </label>
          </div>
        </form>


        <div className="button-group">
            <button 
                type="button" 
                className="back-button"
                onClick={() => navigate(-1)}
            >
                Back to cart
            </button>

            <button 
                type="submit" 
                className="continue-button"
                onClick={handleSubmit}
            >
                Go to shipping
            </button>
           
        </div>
         {erroMessage && (
            <p className="error-message">{erroMessage}</p>
            )}
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
            <span>Calculated at the next step</span>
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


export default ShippingInfoPage;