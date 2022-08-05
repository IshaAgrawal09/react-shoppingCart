import React from "react";
import Category from "./Category";
import Product from "./Product";
import CartContext from "./Context";
import { useContext } from "react";
const Header = () => {
  const { inputs, setInputs, selectedList, isSubmit, setIsSubmit, addCart } =
    useContext(CartContext);
  console.log(addCart);
  return (
    <>
      {selectedList.length ? (
        <>
          {!isSubmit ? (
            <>
              <div className="header">
                <div className="content">
                  <p>SPRING / SUMMER COLLECTION 2022</p>
                  <h2>Get Up to 30% OFF</h2>
                  <h2>New Arrivals</h2>
                  <button>Shop Now</button>
                </div>
              </div>
              <Category />
              <Product />
            </>
          ) : isSubmit && inputs !== "" ? (
            <>
              <Product />
              {setIsSubmit(false)}
            </>
          ) : (
            <>
              <div className="header">
                <div className="content">
                  <p>SPRING / SUMMER COLLECTION 2022</p>
                  <h2>Get Up to 30% OFF</h2>
                  <h2>New Arrivals</h2>
                  <button>Shop Now</button>
                </div>
              </div>
              <Category />
              <Product />
              {setIsSubmit(false)}
            </>
          )}
        </>
      ) : (
        <div className="no-item">
          <h3>No MATCHING ITEMS</h3>
          <p>
            Please check the spelling or try again with a less specific term.
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
