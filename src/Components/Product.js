import React from "react";

import "./Product.css";

const Product = (props) => {
  

//   ADDTOCART FUNCTION 
  const addToCart = (event) => {
    let count = 0;
    props.addCart.map((item) => {
      if(event.target.className == item.id) {
        count = count + 1;
      }
    });
    if (count === 0) {
      props.setAddCart([...props.addCart, props.list[event.target.id]]);
    }
   };
//    ADDTOCART BADGE QUANTITY 
  props.setNumber(props.addCart.length);

  console.log(props.addCart)

  return (
    <div className="product">
      {props.list.map((item, index) => {
        return (
          <>
            <div className="singleProduct" key={item.id}>
              <img src={item.image} alt="" />
              <h5>{item.name}</h5>
              <p id="price">${item.Price}.00</p>
              <p id="delievery">2-Day Delievery</p>
              <button id={index} className={item.id} onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
