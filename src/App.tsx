// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ListProducts} />
        <Route path="/product/:id" element={ProductDetails} />
        <Route path="/checkout" element={Checkout} />
        <Route path="/checkout-success" element={CheckoutSuccess} />
      </Routes>
    </Router>
  );
}

export default App;
