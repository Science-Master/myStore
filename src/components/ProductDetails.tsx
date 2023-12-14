// ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch more details for the specific product if needed

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Additional details can be added here */}
    </div>
  );
};

export default ProductDetails;
