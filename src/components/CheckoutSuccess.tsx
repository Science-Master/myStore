// src/components/CheckoutSuccess.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link, Navigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const selectedProduct = useSelector((state: RootState) => state.selectedProduct);

  if (!selectedProduct) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto p-8">
      {selectedProduct && (
        <div className="bg-white p-4 rounded shadow">
          <h1 className="text-2xl font-semibold mb-4">Checkout Success</h1>
          <p>Your checkout was successful! Thank you for your purchase.</p>
          {/* Selected product details display */}
          {/* ... (other details) */}
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutSuccess;
