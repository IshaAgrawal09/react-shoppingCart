import React from "react";
import { CartProvider } from "./Components/Context";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Checkout from "./Components/Checkout";
import Placeorder from "./Components/Placeorder";

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Nav />
       
        <Routes>
          
          <Route path="/" element={<Header />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path='/placeOrder' element={<Placeorder />}/>
        </Routes>
        <Footer />
   
      </CartProvider>
    </div>
  );
}

export default App;
