import React from 'react';

import './App.css';
import Header  from './components/Header/header';
import Footer  from './components/Footer/footer';

import { Routes, Route } from "react-router-dom";
import Admin from './routes/admin';
import Cart from './routes/cart';
import Home from './routes/homepage';
import { RamenForm } from './routes/RamenForm/ramenform';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/edit/:documentId" element={<RamenForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;