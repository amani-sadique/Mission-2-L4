console.log("Connected!!!🐈");

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
////////////////////////////////////////////
// ====================================== //
//             deleteItem Function
// ====================================== //
function deleteItem(itemToDeleteIndex) {
  console.log("index of the itemToDelete:", itemToDelete);

  // Delete the item using splice method
  // This will use the index of the item deleted passed in as an argument when the function is called
  // It will delete one element from that index (therefore that element itself)
  shoppingList.splice(itemToDeleteIndex, 1);
  console.log(shoppingList);

  // Call the function that will re-render the array onto the page with the new updates
  displayListItems();
}


// ===================================================== //
//  ************** Shopping Basket Logic **************
// ===================================================== //

// ==== Selecting Elements ==== //
const shoppingBasketInputEl = document.getElementById("shopping-basket")
const itemsStillToBuyDisplayEl = document.getElementById("items-still-to-buy-display")

function addToBasket(event){
  event.preventDefault(); // prevent the form refreshing the page
  const basketArray = shoppingBasketInputEl.value.toLowerCase().split(/,\s*/) 
  // Convert string "tomato,bread" to array ["tomato","bread"]

  // ====== Filter new array - itemsStillToBuy ===== //
  // Filter returns a new array of elements that pass a certain condition or test
  // In this example, it will the elements that aren't in the basket yet
  const itemsStillToBuy = shoppingList.filter(function (groceryItem){
      // Condition: We are comparing the shoppingList array with the basketArray.
      // As you iterate over the shoppingList array we are seeing if any of the elements/grocery items are NOT in the basket yet
      // Or in other words the basketArray does NOT INCLUDE this item
      // Those things that are NOT in the basket yet are added to the new array called itemsStillToBuy
     return !basketArray.includes(groceryItem.item.toLowerCase())
  })

  // ========= Displaying the result ========= //
  // Conditional logic- if they still have things to buy or not
  // If the itemsStillToBuy array is empty, then display a success message
  // Otherwise display a message telling them they still have items to get
  if (itemsStillToBuy.length === 0 ){
    itemsStillToBuyDisplayEl.innerHTML = `<p>Congrats! You are done shopping! 🛍️ ➡️ 🏠</p>`
  } else {
    itemsStillToBuyDisplayEl.innerHTML = `<p>Here are the items you still need to get:</p>`
    
    // Then display/render the itemsStillToBuy​ array onto the page
    itemsStillToBuy.forEach(function(groceryItem){
      //update the HTML to what is currently rendered, plus a new string
      itemsStillToBuyDisplayEl.innerHTML += `<p>${groceryItem.item}</p>`
    })
  }
}

















