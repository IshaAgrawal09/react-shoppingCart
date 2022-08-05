import React, { useState } from "react";
import "./Nav.css";
import CartContext from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const {
    inputs,
    setInputs,
    search,
    list,
    number,
    selectedList,
    setSelectedList,
  } = useContext(CartContext);

  // const [inputs, setInputs] = useState("");

  // const search = (event) => {
  //   if (event.key === "Enter") {
  //     if (inputs == "") {
  //       setSelectedList(list);
  //     } else {
  //       setSelectedList(
  //         list.filter(
  //           (item) =>
  //             item.name.toLowerCase().includes(inputs) ||
  //             item.brand.toLowerCase().includes(inputs)
  //         )
  //       );
  //     }
  //   }
  // };
  return (
    <div className="nav">
      <div className="first">
        <div>Order Tracking</div>
        <div>English</div>
        <div>USd</div>
      </div>
      <hr />
      <div className="NavItem">
        <div className="logo">
          <Link to="/">
            <img
              src="https://klbtheme.com/machic/wp-content/uploads/2021/08/logo-dark.png"
              alt=""
            />
          </Link>
        </div>

        <div id="input-search">
          <form onSubmit={search}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Here.."
              value={inputs}
              onChange={(event) => setInputs(event.target.value)}
              // onKeyPress={search}
            />
          </form>
        </div>

        <div className="cart">
          <Link to="/Cart">
            <i className="fa-solid fa-cart-shopping">
              <span id="num">{number}</span>
            </i>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
