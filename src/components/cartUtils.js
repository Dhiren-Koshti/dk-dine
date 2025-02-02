export function displayCart() {
  let data = JSON.parse(localStorage.getItem("foodLS"));
  let count = document.getElementsByClassName("cart-count");

  if (data) {
    let num = data.length;
    if (num) {
      count[0].innerText = num;
      count[0].style.display = "block";
      count[1].innerText = num;
      count[1].style.display = "block";
    } else {
      count[0].style.display = "none";
      count[1].style.display = "none";
    }
  }
}

function addLSData(data) {
  let getData = JSON.parse(localStorage.getItem("foodLS"));
  getData = getData.map((currEle, index) => {
    if (currEle.id === data.id && currEle.category === data.category) {
      currEle.quantity = data.quantity;
      currEle.price = data.newPrice;
    }

    return currEle;
  });

  localStorage.setItem("foodLS", JSON.stringify(getData));
  bill();
}

export function addToCart(evt, id, category, orignalPrice, operator) {
  let card = document.getElementById(`${category}${id}`);
  let quantity = card.querySelector(".productQuantity").innerText;
  let productPriceText = card.querySelector(".productPrice").innerText;
  let productPrice = parseInt(productPriceText.replace(/[^0-9.-]+/g, ""));
  quantity = parseInt(quantity);
  let newPrice;

  if (operator === "+") {
    newPrice = productPrice + orignalPrice;
  } else {
    newPrice = productPrice - orignalPrice;
  }
  card.querySelector(".productPrice").innerText = newPrice;
  let lsData = { id, category, quantity, newPrice };
  addLSData(lsData);
}

export function bill() {
  let data = JSON.parse(localStorage.getItem("foodLS"));
  let subTotal = 0;

  for (let currEle of data) {
    subTotal += currEle.price;
  }

  document.querySelector(".productSubTotal").innerText = subTotal;
  document.querySelector(".productFinalTotal").innerText = subTotal + 50;

  if (subTotal === 0) {
    document.querySelector(".productFinalTotal").innerText = 0;
  }
}

export function removeCart(evt, id, category) {
  let card = document.getElementById(`${category}${id}`);
  let getData = JSON.parse(localStorage.getItem("foodLS"));

  let newData = getData.filter((currEle) => {
    return currEle.id !== id || currEle.category !== category; // Ensure a boolean is returned
  });

  localStorage.setItem("foodLS", JSON.stringify(newData));
  card.remove();
  displayCart();
  bill();
}

export function increment(evt, id, category) {
  let card = document.getElementById(`${category}${id}`);
  let quantity = card.querySelector(".productQuantity");
  quantity.innerText++;
}

export function decrement(evt, id, category, price, operator) {
  let card = document.getElementById(`${category}${id}`);
  let quantity = card.querySelector(".productQuantity");
  if (quantity.innerText > 1) {
    quantity.innerText--;
    addToCart(evt, id, category, price, operator);
  }
}
