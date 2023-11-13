// Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ];

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    pcode: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use navigate to change the route
    navigate('/display-data', { state: { formData } });
  };

  const block = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const blocks = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    margin: '15px',
  };

  const element = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const input = {
    width: 700,
    height: 35,
    borderRadius: 5,
  };

  const inputs = {
    width: 450,
    height: 35,
    borderRadius: 5,
  };

  return (
    <div>
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={block}>
          <div style={element}>
            <label htmlFor='email'>Email</label>
            <input
              style={input}
              type='email'
              id='email'
              name='email'
              placeholder='Enter email'
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={element}>
            <label htmlFor='name'>Name</label>
            <input
              style={input}
              type='text'
              id='name'
              name='name'
              placeholder='Full name'
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div style={blocks}>
          <label htmlFor='address'>Address</label>
          <input
            style={input}
            type='text'
            id='address'
            name='address'
            placeholder='1234 Main St'
            required
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div style={blocks}>
          <label htmlFor='address2'>Address 2</label>
          <input
            style={input}
            type='text'
            id='address2'
            name='address2'
            placeholder='Apartment, studio, or floor'
            required
            value={formData.address2}
            onChange={handleInputChange}
          />
        </div>
        <div style={block}>
          <div style={blocks}>
            <label htmlFor='city'>City</label>
            <input
              style={inputs}
              type='text'
              id='city'
              name='city'
              placeholder='City'
              required
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div style={blocks}>
            <label htmlFor='province'>Province</label>
            <select
              style={inputs}
              name='province'
              value={formData.province}
              onChange={handleInputChange}
            >
              <option value=''>Select Province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div style={blocks}>
            <label htmlFor='pcode'>Postal Code</label>
            <input
              style={inputs}
              type='text'
              id='pcode'
              name='pcode'
              placeholder='Postal Code'
              required
              value={formData.pcode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
