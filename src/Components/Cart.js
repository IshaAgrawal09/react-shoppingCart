import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  let navigate = useNavigate();
  const { number, setNumber, addCart, setAddCart, amount, setAmount } =
    useContext(CartContext);

  // CHECKOUT PAGE
  const checkout = () => {
    navigate("/checkout");
  };

  // TOTAL AMOUNT FUNCTION
  setAmount(
    addCart.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0)
  );

  // INCREASE QUANTITY FUNCTION
  const increase = (event) => {
    setAddCart(
      addCart.map((item, index) => {
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
    console.log(addCart[event.currentTarget.id]["quantity"]);

    if (addCart[event.currentTarget.id]["quantity"] == 1) {
      setAddCart(
        addCart.filter((item, index) => {
          return index != event.currentTarget.id;
        })
      );
      setNumber(number - 1);
    } else {
      setAddCart(
        addCart.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.quantity = item.quantity - 1;
            return item;
          }
          return item;
        })
      );
    }
  };

  console.log("Add Cart Array");
  console.log(addCart);
  return (
    <>
      {addCart.length == 0 ? (
        <div id="emptyCart">
          <span>Cart is Empty &#128546;</span>
        </div>
      ) : (
        <>
          <div className="cartPage">
            {addCart.map((item, index) => {
              return (
                <>
                  <div className="singleCart">
                    <div id="cartImage">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="data">
                      <h5>{item.name}</h5>
                      <p>&#x20B9;{item.Price * item.quantity}.00</p>

                      <div className="increase">
                        <button
                          className="quantity"
                          id={index}
                          onClick={increase}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        {item.quantity}
                        <button
                          className="quantity"
                          id={index}
                          onClick={decrease}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            <hr id="line" />
            <div className="amount">
              <div id="totalAmount">Total Amount:</div>
              <div>&#8377;{amount}.00</div>
            </div>
          </div>
          <button className="emptyButton" onClick={checkout}>
            CHECKOUT
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
