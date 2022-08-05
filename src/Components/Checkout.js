import React, { useEffect } from "react";
import "./Checkout.css";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const {
    list,
    setAddCart,
    addCart,
    amount,
    setAmount,
    setNumber,
    setSelectedList,
    setIsSubmit,
  } = useContext(CartContext);

  // PLACE ORDER PAGE
  const placeOrder = () => {
    setAddCart([]);
    setAmount(0);
    setNumber(0);
    setSelectedList(list);
    setIsSubmit(false);
    navigate("/placeOrder");
  };
  console.log(addCart);
  // TOTAL AMOUNT FUNCTION
  setAmount(
    addCart.reduce((total, item) => {
      return total + item.Price * item.quantity;
    }, 0)
  );

  console.log(addCart);
  return (
    <div className="checkout">
      <h1>CHECKOUT</h1>
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Billing Details</h2>
          <div className="billing">
            <div className="form-div">
              <div className="form-item">
                <p>First Name</p>
                <input type="text" id="text" />
              </div>
              <div className="form-item">
                <p>Last Name</p>
                <input type="text" id="text" />
              </div>
            </div>
            <div className="form-div">
              <div className="form-item address-input">
                <p>Address</p>
                <input type="text" id="text" placeholder="Street Address" />
                <br />
                <input
                  type="text"
                  id="text"
                  placeholder="Apartment,suite etc(optional)"
                />
              </div>
            </div>
            <div className="form-div">
              <div className="form-item">
                <p>State/Country</p>
                <input type="text" id="text" />
              </div>
              <div className="form-item">
                <p>Post/ZIP</p>
                <input type="text" id="text" />
              </div>
            </div>
            <div className="form-div">
              <div className="form-item">
                <p>Email Address</p>
                <input type="email" id="text" />
              </div>
              <div className="form-item">
                <p>Phone Number</p>
                <input type="text" id="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <h2>Coupon Code</h2>
          <div className="coupon">
            <p>Enter your coupon code if you have one</p>
            <input type="text" placeholder="Coupon Code" />
            <button>APPLY</button>
          </div>
          <h2>Your Order</h2>
          <div className="order-details">
            {addCart.map((item) => {
              return (
                <>
                  <div className="single-detail">
                    <div className="single-detail-name">
                      <p>
                        {item.name} x {item.quantity}
                      </p>
                    </div>
                    <div className="single-detail-amount">
                      <p>&#x20B9;{item.Price * item.quantity}.00</p>
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
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button id="placeOrder" onClick={placeOrder}>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Checkout;
