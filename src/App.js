import React from 'react';
import './global.css'; 
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Items from './pages/items';
import Contact from './pages/contact';
import ProductGrid from './components/ProductGrid';
import AllItems from './components/Allitems';
import OrderNowPage from './pages/Ordernow';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<ProductGrid />} />
        <Route path="/allitems" element={<AllItems />} />
        <Route path="/order-now" element={<OrderNowPage />} />
      </Routes>
    </div>
  );
}

export default App;
