// Add event listener to the calculate button
document
  .getElementById("calculateButton")
  .addEventListener("click", calculateTotal);

const smallPizza = 10.0;
const mediumPizza = 12.5;
const largePizza = 15.0;
const deliveryFee = 3.0;
const salesTax = 0.1125;

function calculateTotal() {
  let total = 0;

  const sizeSelect = document.getElementById("size");
  const selectedSize = sizeSelect.value;

  const sizeContainer = document.getElementById("size-container");
  const pickupDeliveryContainer =
    document.getElementById("PickuporDelivery");

  const pickup = document.getElementById("pickup");
  const delivery = document.getElementById("delivery");

  sizeContainer.style.color = "black";
  pickupDeliveryContainer.style.color = "black";

  if (selectedSize === "small") {
    total = smallPizza;
  } else if (selectedSize === "medium") {
    total = mediumPizza;
  } else if (selectedSize === "large") {
    total = largePizza;
  } else {
    sizeContainer.style.color = "red";
    alert("Please select a pizza size.");
    return;
  }

  if (document.getElementById("extra_cheese").checked) {
    total += 2.0;
  }

  if (document.getElementById("pepperoni").checked) {
    total += 1.5;
  }

  if (document.getElementById("mushrooms").checked) {
    total += 1.0;
  }

  if (document.getElementById("onions").checked) {
    total += 0.75;
  }

  if (document.getElementById("sausage").checked) {
    total += 1.5;
  }

  if (document.getElementById("bacon").checked) {
    total += 1.75;
  }

  total += total * salesTax;

  if (pickup.checked) {
    // Pickup adds no extra charge.
  } else if (delivery.checked) {
    total += deliveryFee;
  } else {
    pickupDeliveryContainer.style.color = "red";
    alert("Please select Pickup or Delivery.");
    return;
  }

  document.getElementById("output").innerHTML =
    "Your total is: $" + total.toFixed(2);
}