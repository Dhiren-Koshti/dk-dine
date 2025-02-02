import { displayCart } from "./cartUtils";

export function incrementQuantity(evt, id) {
  let card = document.getElementById(id);
  let quantity = card.querySelector(".quantity-value");
  quantity.innerText++;
}

export function decrementQuantity(evt, id) {
  let card = document.getElementById(id);
  let quantity = card.querySelector(".quantity-value");
  if (quantity.innerText !== "1") {
    quantity.innerText--;
  }
}

function addLSData(data) {
  if (!localStorage.getItem("foodLS")) {
    localStorage.setItem("foodLS", JSON.stringify([data]));
    displayCart();
  } else {
    let getData = JSON.parse(localStorage.getItem("foodLS"));
    let check = true;
    getData = getData.map((currEle, index) => {
      if (currEle.id === data.id && currEle.category === data.category) {
        currEle.quantity += data.quantity;
        currEle.price += data.price;
        check = false;
      }

      return currEle;
    });

    if (check) {
      getData.push(data);
    }

    localStorage.setItem("foodLS", JSON.stringify(getData));
    displayCart();
  }
}

export function addToCart(evt, id) {
  let card = document.getElementById(id);
  let category = card.getAttribute("data-category");
  let quantity = card.querySelector(".quantity-value").innerText;
  quantity = parseInt(quantity);
  let price = parseInt(card.querySelector(".price").innerText) * quantity;
  let lsData = { id, category, quantity, price };
  addLSData(lsData);
}

