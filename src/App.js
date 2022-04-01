import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/header/Header';
import { ProductListing } from './components/productList/ProductListing';
import { ProductDetail } from './components/productDetail/ProductDetail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
