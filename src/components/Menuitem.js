import React, { useState, useEffect, useCallback } from "react";
import { incrementQuantity, decrementQuantity,addToCart }from "./menuItemUtils";


export default function Menuitem(props) {
  const [menuData, setMenuData] = useState([]);

  const handleTabClick = useCallback(async () => {
    try {
      let api = `/data/${props.cardName}.json`;
      let response = await fetch(api);
      let data = await response.json();
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  }, [props.cardName]);

  useEffect(() => {
    handleTabClick();
  }, [handleTabClick]);

  return menuData.map((currEle) => {
    return (
      <div
        className="menu-item"
        key={currEle.id}
        id={currEle.id}
        data-category={currEle.category}
      >
        <img src={currEle.image} alt="" />
        <div className="item-details">
          <h2 className="name">{currEle.name}</h2>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="description">{currEle.description}</p>
          <p className="price">{currEle.price} &#8377;</p>
          <div className="quantity">
            <button
              className="quantity-decrement"
              onClick={(evt) => {
                decrementQuantity(evt, currEle.id);
              }}
            >
              -
            </button>
            <span className="quantity-value">1</span>
            <button
              className="quantity-increment"
              onClick={(evt) => {
                incrementQuantity(evt, currEle.id);
              }}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart"
            onClick={(evt) => {
              addToCart(evt, currEle.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
}
