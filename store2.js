console.log("connected");

// Declare variables using let or const

const products = [
  {
    id: 1,
    title: "Matcha Powder",
    price: 25,
    img: "./img/pexels-eva-bronzini-6833728.jpg",
  },
  {
    id: 2,
    title: "Matcha Whisk",
    price: 25,
    img: "./img/pexels-charlotte-may-5946646.jpg",
  },
  {
    id: 3,
    title: "Pilates Bottle",
    price: 30,
    img: "./img/pexels-alexazabache-3766257.jpg",
  },
  {
    id: 4,
    title: "Pilates Bag",
    price: 30,
    img: "./img/pexels-tree-of-life-seeds-1708680-3577288.jpg",
  },
];

let chosenProduct = products[0];

// Use of Functions
// Use of document.querySelector()

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menuItem");
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");

//   Use of Events and Loop (addEventListener, forEach)

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      chosenProduct = products[index];
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = `$${chosenProduct.price}.00`;
      currentProductImg.src = products[index].img;
    });
  });
});
