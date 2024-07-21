// script.js
const productList = [
    {
        id: 1,
        name: "Apple iPhone 13",
        price: 59999,
        image: "https://via.placeholder.com/150x150"
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        price: 69999,
        image: "https://via.placeholder.com/150x150"
    },
    {
        id: 3,
        name: "OnePlus 9 Pro",
        price: 49999,
        image: "https://via.placeholder.com/150x150"
    },
    // Add more products to the array
];

const productGrid = document.querySelector(".product-grid");

productList.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `₹ ${product.price}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    productGrid.appendChild(productCard);
});