import React, { useState } from "react";
import Menuitem from "./Menuitem";

export default function Menucard() {
 
  const [category,setcategory] = useState("fast_food");

  const setCard = (cardName) => {
    setcategory(cardName)
  }

  return (
    <section className="menu-card">
      <h1>Menu Card</h1>
      <div className="menu-tabs">
        <button
          className="tab-button active"
          data-category="fast-food"
          id="fast_food"
          onClick={() => {setCard('fast_food')}}
        >
          Fast Food
        </button>
        <button className="tab-button" data-category="thalis" id="thalis" onClick={() => {setCard('thalis')}}>
          Thalis
        </button>
      </div>
      <div className="menu-content">
        <div className="menu-items">
          <Menuitem cardName={category}/>
        </div>
      </div>
    </section>
  );
}
