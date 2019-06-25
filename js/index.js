function deleteItem(event) {
  const deleteAction = document.querySelector(".button");
  const deletedItem = deleteAction.parentNode;
  deleteAction.parentNode.parentNode.removeChild(deletedItem);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let result = 0;
  let arrayPriceProducts = [];

  const products = document.querySelectorAll(".line2");
  let totalProducts = document.querySelector(".total-of-products");

  //console.log(totalProducts);

  products.forEach(function(product) {
    // console.log(product);
    // console.log(parseFloat(product.querySelector(".qty").value));
    const priceProduct = parseFloat(
      product.querySelector(".pricePerUnit").innerHTML
    );
    const qty = parseFloat(product.querySelector(".qty").value);
    result = priceProduct * qty;
    // console.log(result);
    product.querySelector(".total-price-for-this-product").innerHTML = result;
    arrayPriceProducts.push(result);
    //console.log(arrayPriceProducts);
  });

  let totalResult = 0;
  totalResult = arrayPriceProducts.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  //console.log(totalResult);

  totalProducts.innerHTML = totalResult;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {
  let newRow = document.createElement("div");
  let parent = document.querySelector(".wrapper");
  let rowThatCreatesRow = document.querySelector(".create-line");
  newRow.setAttribute("class", "line2");
  parent.insertBefore(newRow, rowThatCreatesRow);
  //console.log(parent);

  createNewItem(itemName);

  itemName = document.querySelector(".new-name").value;
  let resetValue1 = document.querySelector(".new-name");
  resetValue1.value = "";

  itemUnitPrice = document.querySelector(".new-price").value;
  let resetValue2 = document.querySelector(".new-price");
  resetValue2.value = "";
}

function createNewItem(itemName) {
  let newRow = document.createElement("div");
  newRow.setAttribute("class", "product-name");
  let spanItem = document.createElement("span");
  newRow.appendChild(spanItem);
  spanItem.innerHTML = itemName;

  let parent = document.querySelector(".wrapper");

  parent.appendChild(newRow);
  console.log(newRow);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  if (!getTotalPrice) {
    calculatePriceButton.onclick = getTotalPrice;
    createItemButton.onclick = createNewItem;
  }

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
