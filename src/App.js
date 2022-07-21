import React,{ useState } from 'react';

import { Routes, Route} from "react-router-dom";
import './App.css';
import Cart from './Components/Cart';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import products from "./Data"

function App() {
  const list = products["product"];
  const [addCart, setAddCart] = useState([]);
  const [amount,setAmount] = useState(0)
  const [number,setNumber] = useState(0)

  
  return (
    <div className="App">
      <Nav number = {number}/>
      <Routes>
        <Route path="/" element={<Header number = {number} setNumber = {setNumber} list = {list} addCart = {addCart} setAddCart = {setAddCart}/>}/>

        <Route path='/Cart' element={<Cart number = {number} setNumber = {setNumber} addCart = {addCart} setAddCart = {setAddCart} amount = {amount} setAmount = {setAmount}/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
