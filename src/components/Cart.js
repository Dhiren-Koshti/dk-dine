import React, { useState, useEffect } from "react";
import { removeCart, bill, increment, decrement, addToCart } from "./cartUtils";

export default function Cart() {
  const [allProducts, setAllProducts] = useState([]); // Single array for both Fast Food and Thalis
  const [lsArr] = useState(JSON.parse(localStorage.getItem("foodLS")) || []);

  useEffect(() => {
    // Function to fetch and process data
    async function fetchData() {
      const fastArr = lsArr.filter((item) => item.category === "Fast Food");
      const thaliArr = lsArr.filter((item) => item.category === "Thali");

      const fastFoodPromise = fastArr.length
        ? addCard("/data/fast_food.json", fastArr)
        : [];
      const thalisPromise = thaliArr.length
        ? addCard("/data/thalis.json", thaliArr)
        : [];

      // Use Promise.allSettled to handle both promises, whether they resolve or reject
      const results = await Promise.allSettled([
        fastFoodPromise,
        thalisPromise,
      ]);

      // Handle the results from all promises
      const fastFood =
        results[0].status === "fulfilled" ? results[0].value : [];
      const thalis = results[1].status === "fulfilled" ? results[1].value : [];

      // Combine the results
      setAllProducts([...fastFood, ...thalis]);
    }

    fetchData(); // Call the fetch function inside useEffect
  }, [lsArr]);

  // Function to add card data from the API and local storage array
  async function addCard(api, arr) {
    let response = await fetch(api);
    let data = await response.json();

    return arr.map(({ id, category, quantity, price }) => {
      const itemData = data.find((item) => item.id === id);
      return {
        id,
        category,
        image: itemData?.image || "", // Safe fallback if image is not present
        name: itemData?.name || "Unknown", // Safe fallback for name
        quantity,
        price,
        originPrice: itemData.price,
      };
    });
  }

  useEffect(() => {
    bill();
  }, []);

  return (
    <section className="addToCartElement">
      <div className="container">
        <section>
          <div id="productCartContainer">
            {allProducts.map((item, index) => (
              <div
                key={index}
                className="cards"
                id={`${item.category}${item.id}`}
              >
                <article className="information card">
                  <div>
                    <span className="category">{item.category}</span>
                  </div>
                  <div className="imageContainer">
                    <img
                      className="productImage"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="productName">{item.name}</h2>
                  <p className="productPrice">₹{item.price}</p>
                  <div className="stockElement">
                    <button
                      className="cartIncrement"
                      onClick={(evt) => {
                        increment(evt, item.id, item.category);
                        addToCart(
                          evt,
                          item.id,
                          item.category,
                          item.originPrice,
                          "+"
                        );
                      }}
                    >
                      +
                    </button>
                    <p className="productQuantity">{item.quantity}</p>
                    <button
                      className="cartDecrement"
                      onClick={(evt) => {
                        decrement(
                          evt,
                          item.id,
                          item.category,
                          item.originPrice,
                          "-"
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="remove-to-cart-button"
                    onClick={(evt) => {
                      removeCart(evt, item.id, item.category);
                    }}
                  >
                    Remove
                  </button>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="productCartTotalElem">
          <div className="productCartTotalElement">
            <p>Selected Offer Summary</p>
            <div className="productOrderTotal">
              <div>
                <p>Sub Total:</p>
                <p className="productSubTotal">0</p>
              </div>
              <div>
                <p>Tax:</p>
                <p className="productTax">₹50</p>
              </div>
              <hr />
              <div>
                <p>Final Total:</p>
                <p className="productFinalTotal">0</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
