import React from "react";

import "./Cart.css";

const Cart = (props) => {

  const emptyCart = () =>{
    props.setNumber(0)
    props.setAddCart([])
  }
  
  // TOTAL AMOUNT FUNCTION 
    props.setAmount(props.addCart.reduce(
      (total,item) => {
        return total + (item.Price * item.quantity)
      },0),
    )
 

  // INCREASE QUANTITY FUNCTION 
  const increase = (event) => {
    props.setAddCart(
      props.addCart.map((item, index) => {
        if (index == event.currentTarget.id) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      })
    );
   
  };
 
// DECREASE QUANTITY FUNCTION 
  const decrease = (event) => {
    console.log(props.addCart[event.currentTarget.id]["quantity"]);
    
    if (props.addCart[event.currentTarget.id]["quantity"] == 1) {
      props.setAddCart(
        props.addCart.filter((item, index) => {
          return index != event.currentTarget.id;
        })
      )
      props.setNumber(props.number - 1)
    } else {
      props.setAddCart(
        props.addCart.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.quantity = item.quantity - 1;
            return item;
          }
          return item;
        })
      );
    }
  };

  return (
    <>
    {props.addCart.length == 0 ? <div id="emptyCart"><span>Cart is Empty &#128546;</span></div>:
    <>
      <div className="cartPage">
     
     
      {props.addCart.map((item, index) => {
        return (
          <>
            <div className="singleCart">
              <div id="cartImage">
                <img src={item.image} alt="" />
              </div>
              <div className="data">
                <h5>{item.name}</h5>
                <p>${item.Price * item.quantity}.00</p>
                
                <div className="increase">
                  <button className="quantity" id={index} onClick={increase}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  {item.quantity}
                  <button className="quantity" id={index} onClick={decrease}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>
           
          </>
           
        );
      })}

      <hr id='line'/>
      <div className="amount">
        <div id="totalAmount">
          Total Amount: 
        </div>
        <div>
          ${props.amount}.00
        </div>
      </div>
      </div>
      <button className="emptyButton" onClick={emptyCart}>Empty Cart</button>
      </>
      
    }
    
   </>
  );
};

export default Cart;
