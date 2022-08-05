import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import "./Product.css";

const Product = () => {
  const { setNumber, selectedList, addCart, setAddCart, list } =
    useContext(CartContext);

  //   ADDTOCART FUNCTION
  const addToCart = (event) => {
    let count = 0;
    setAddCart(
      addCart.map((item) => {
        if (event.target.className == item.id) {
          count = count + 1;
        }
      })
    );
    if (count === 0) {
      setAddCart([...addCart, { ...selectedList[event.target.id] }]);
    }
  };
  console.log("List");
  console.log(selectedList);
  //ADDTOCART BADGE QUANTITY
  setNumber(addCart.length);

  console.log(addCart);

  return (
    <>
      <div className="product-head">
        <h3>Shopping Now</h3>
        <h1>Top Trending</h1>
        <img
          src="http://blance.jwsuperthemes.com/wp-content/uploads/2017/08/icon-heading.png"
          alt=""
        />
      </div>
      <div className="product">
        {selectedList.length ? (
          selectedList.map((item, index) => {
            return (
              <>
                <div className="singleProduct" key={item.id}>
                  <div className="container">
                    <div className="image-card">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <h4 id="brand">{item.brand}</h4>
                  <p id="name">{item.name}</p>
                  <p id="price">&#x20B9;{item.Price}.00</p>
                  <p id="delievery">2-Day Delievery</p>
                  <button id={index} className={item.id} onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <>
            <div className="no-item">
              <h3>No MATCHING ITEMS</h3>
              <p>
                Please check the spelling or try again with a less specific
                term.
              </p>
            </div>
          </>
        )}
      </div>
      <div id="sale">
        <img
          src="http://blance.jwsthemeswp.com/wp-content/uploads/2017/08/image-banner2-1024x173.jpg"
          alt=""
        />
      </div>
      <div className="new">
        <div className="new-item">
          <img
            src="http://blance.jwsthemeswp.com/wp-content/uploads/2017/08/banner-h12.png"
            alt=""
          />
        </div>
        <div className="new-item">
          <img
            src="http://blance.jwsthemeswp.com/wp-content/uploads/2017/08/banner-h1-4.png"
            alt=""
          />
        </div>
      </div>

      <div className="info">
        <div className="info-item">
          <div className="info-item-icon">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className="info-item-content">
            <p className="info-head">FREE SHIPPING</p>
            <p className="info-para">No Shipping Charges</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item-icon">
            <i class="fa-solid fa-money-bill-1"></i>
          </div>
          <div className="info-item-content">
            <p className="info-head">CASH ON DELIVERY</p>
            <p className="info-para">COD available</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item-icon">
            <i class="fa-solid fa-rotate-left"></i>
          </div>
          <div className="info-item-content">
            <p className="info-head">45 DAYS RETURN</p>
            <p className="info-para">Easy Returnable Policy</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item-icon">
            <i class="fa-solid fa-clock"></i>
          </div>
          <div className="info-item-content">
            <p className="info-head">OPENING ALL WEEK</p>
            <p className="info-para">08AM-09PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
