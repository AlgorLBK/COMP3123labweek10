// DisplayData.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayData = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div>
      <h2>Submitted Data:</h2>
        <p>Email: {formData.email}</p>
        <p>Name: {formData.name}</p>
        <p>Address: {formData.address}</p>
        <p>Address 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>Province: {formData.province}</p>
        <p>Postal Code: {formData.pcode}</p>
    </div>
  );
};

export default DisplayData;
