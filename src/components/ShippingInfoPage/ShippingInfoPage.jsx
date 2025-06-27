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
    else if (total === 0) setErroMessage("Your cart is empty. Please add items to your cart before proceeding to checkout.");
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
    
    <div className="shippingcontainer">
        
        <div className='shippingform'>
            <div className="progresssteps">
<div className="progresssteps">
  <p className="progressstepsprevious">Cart </p> 
  <p className="progressstep"> &gt;   <span className="current-step">Details </span> </p> 
  <p className="progressstepNext"> &gt; Shipping</p>
  <p className="progressstepNext"> &gt;   Payment </p>
</div>
</div>
        <form onSubmit={handleSubmit}  >
          <h2 className="sectiontitle">Contact</h2>
          <input
            type="text"
            name="contact"
            placeholder="Email or mobile phone number"
            value={formData.contact}
            onChange={(e) => handleChange(e)}
            required
            className="contactinputfield"
          />
        
          <h2 className="sectiontitle">Shipping Address</h2>
          <div className="namefields">
            <input
              type="text"
              name="firstName"
              placeholder="Name"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
              required
              className="inputfield"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Second Name"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
              required
              className="inputfield"
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address and number"
            value={formData.address}
            onChange={(e) => handleChange(e)}
            required
            className="inputfield"
          />

          <input
            type="text"
            name="shippingNote"
            placeholder="Shipping note (optional)"
            value={formData.shippingNote}
            className="inputfield"
            onChange={(e) => handleChange(e)}
          />

          <div className="locationfields">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleChange(e)}
              required
              className="inputfield"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={(e) => handleChange(e)}
              required
              className="inputfield"
            />
            <input
              type="text"
              name="province"
              placeholder="Province"
              value={formData.province}
              onChange={(e) => handleChange(e)}
              required
              className="inputfield"
            />
          </div>

          <div className="countryselectwrapper">
  <label htmlFor="country" className="floatinglabel">Country/Region</label>
  <select
    id="country"
    name="country"
    value={formData.country}
    onChange={handleChange}
    required
    className="styledselect"
  >
    <option value="">Select a country</option>
    <option value="Italy">Italy</option>
    <option value="United States">United States</option>
    <option value="Canada">Canada</option>
    <option value="Germany">Germany</option>
    <option value="France">France</option>
  </select>
</div>


          <div className="saveinfo">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
              className="savecheckbox"
            />
            <label htmlFor="saveInfo" className="savelabel">
              Save this information for a future fast checkout
            </label>
          </div>
        </form>


        <div className="buttongroup">
            <button 
                type="button" 
                className="backbutton"
                onClick={() => navigate(-1)}
            >
                Back to cart
            </button>

            <button 
                type="submit" 
                className="continuebutton"
                onClick={handleSubmit}
            >
                Go to shipping
            </button>
           
        </div>
         {erroMessage && (
            <p className="errormessage">{erroMessage}</p>
            )}
        </div>

        <div className="ordersummary">
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
          
          <div className="summaryrow">
            <span>Shipping</span>
            <span>Calculated at the next step</span>
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


export default ShippingInfoPage;