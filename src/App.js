import React from "react";
// ========================
// we edit that elawa 
// تم تغيير Switch إلى Routes و component إلى element لتوافق React Router v6
// ========================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ========================
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* ========================
        we edit that elawa 
        تم تحديث Routes بدلاً من Switch و element بدلاً من component
        ======================= */}
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
        {/* ======================= */}
      </Router>
    </div>
  );
}

export default App;
