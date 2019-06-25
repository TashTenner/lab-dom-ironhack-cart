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
  itemName = document.querySelector(".new-name").value;
  let resetValue1 = document.querySelector(".new-name");
  resetValue1.value = "";

  itemUnitPrice = document.querySelector(".new-price").value;
  let resetValue2 = document.querySelector(".new-price");
  resetValue2.value = "";
}

function createNewItem() {}

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
