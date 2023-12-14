// src/components/Checkout.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Link, Navigate } from 'react-router-dom';
import { clearProduct } from '../store/actions'; // Replace with your action creator

const Checkout = () => {
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  if (!selectedProduct) {
    return <Navigate to="/" />;
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission and clear selected product
    if (selectedProduct) {
      dispatch(clearProduct());
    }
    // Handle form submission and redirect to success page
  };

  return (
    <div className="container mx-auto p-8">
      {selectedProduct && (
        <div className="bg-white p-4 rounded shadow">
          {/* Selected product details display */}
          {/* ... (other details) */}
          <form onSubmit={handleFormSubmit}>
            <label className="block mb-2">Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
