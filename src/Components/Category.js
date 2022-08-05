import React from "react";
import "./Category.css";
const Category = () => {
  return (
    <div className="category">
      <h1>Shop by Category</h1>
      <div className="category-item">
        <div className="single-category">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/xcat1.jpg.pagespeed.ic.fHyE_8RHVV.webp"
            alt=""
          />
          <div className="category-content">
            <h2>Women's</h2>
            <button>Best New Deals</button>
            <p className="collection">NEW COLLECTION</p>
          </div>
        </div>
        <div className="single-category">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/xcat2.jpg.pagespeed.ic.Y9XV67bWs0.webp"
            alt=""
          />
          <div className="category-content">
            <p className="collection">DISCOUNT</p>
            <h2>Winter Cloths</h2>
            <p id="short">NEW COLLECTION</p>
          </div>
        </div>
        <div className="single-category">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/xcat3.jpg.pagespeed.ic.2LQT-LNfhJ.webp"
            alt=""
          />
          <div className="category-content">
            <h2>Men's Cloths</h2>
            <button>Best New Deals</button>
            <p className="collection">NEW COLLECTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
