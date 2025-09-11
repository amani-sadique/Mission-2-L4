console.log("Connected");

document.body.style.backgroundColor = "#9DA993";


document.addEventListener("DOMContentLoaded", initialise);

document.addEventListener("DOMContentLoaded", initialise);
let allProducts;

    // clear existing list
    list.innerHTML = "";

// ==== Selecting Elements ==== //
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");
// This is our element (p tag) where we will render out the array of items

// ====== Data Structure ====== //
const shoppingList = []; // Create an empty array to store our objects e.g. {item: "orange", quantity: 4}

// ======== function ========= //
// ====================================== //
//             addItem Function
// ====================================== //
function addItem(event) {
  // Prevent the default behaviour of our button (which is to submit the form and refresh the page)
  event.preventDefault();

  // 1. Create an object. e.g {item:tomato, quantity: 2}
  const itemToAdd = {
    item: itemInputEl.value,
    quantity: quantityInputEl.value,
  };

  // 2. Push object to the shoppingList array
  shoppingList.push(itemToAdd);
  console.log(shoppingList);

  // 3. Display item
  // Call the function that will re-render the array on the page with the new updates
  displayListItems();

  // Clear up the input fields
  itemInputEl.value = "";
  quantityInputEl.value = "";
}

////////////////////////////////////////////
// ====================================== //
//        displayListItems Function
// ====================================== //
function displayListItems() {
  // clear the display
  shoppingListDisplayEl.innerHTML = "";

  // for each item in the shoppingList array, display item, quantity and a delete button
  shoppingList.forEach(function (groceryItem, index) {
    // Update the HTML to what is currently rendered (as part of the loop), plus a new string
    shoppingListDisplayEl.innerHTML += `<p> ${groceryItem.item} x ${groceryItem.quantity} 
         <span style="cursor:pointer" onclick="deleteItem(${index})">&#10062</span>
       </p>
      `;
  });
}
