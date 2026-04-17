// ✅ FETCH PRODUCTS FROM API
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        const app = document.getElementById("app");
        app.innerHTML = "";

        data.slice(0, 6).forEach(product => {
            const div = document.createElement("div");

            div.innerHTML = `
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <img src="${product.image}" width="100"/>
        <button class="add-btn">Add to Cart</button>
      `;

            app.appendChild(div);
        });
    })
    .catch(error => {
        console.error("Error fetching products:", error);
    });


// ✅ ADD TO CART (LOCALSTORAGE + EVENT)
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
        const productDiv = e.target.parentElement;

        const item = {
            name: productDiv.querySelector("h3").textContent,
            price: productDiv.querySelector("p").textContent
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();
        showMessage("Item added to cart!");
    }
});


// ✅ UPDATE CART COUNT
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDisplay = document.getElementById("cart-count");

    if (cartDisplay) {
        cartDisplay.textContent = "Cart: " + cart.length;
    }
}


// ✅ SHOW SMALL MESSAGE (BETTER THAN ALERT)
function showMessage(text) {
    const message = document.createElement("p");
    message.textContent = text;
    message.style.background = "green";
    message.style.color = "white";
    message.style.padding = "10px";
    message.style.position = "fixed";
    message.style.top = "10px";
    message.style.right = "10px";

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2000);
}


// ✅ PAGE LOAD EVENT
window.addEventListener("load", () => {
    console.log("Page loaded successfully");
    updateCartCount();
});