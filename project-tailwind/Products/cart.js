//Toggele Navbar
let isOpen = false;

function toggleHeader() {
    const headerElement = document.querySelector('.flex-grow');

    if (isOpen) {
        headerElement.classList.remove('block');
        headerElement.classList.add('hidden');
    } else {
        headerElement.classList.remove('hidden');
        headerElement.classList.add('block');
    }

    isOpen = !isOpen;
}

let cartItems = []; // Array to store cart items

// Function to render cart items on the cart page
function renderCartOnCartPage() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';

    if (cartItems.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.innerHTML = `
            <div class="emptyMessage">
                <p class="font-semibold text-2xl text-red-500 capitalize">Your cart is empty</p>
            </div>
        `;
        cart.appendChild(emptyMessage);
    } else {
        // Render cart items if there are any
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            // Product details
            const details = document.createElement('div');
            details.classList.add('product-details');
            details.innerHTML = `
                <div class="flex flex-col md:flex-row gap-3 my-2">
                    <div class="shadow-lg rounded">
                        <img src="${item.image}" alt="" class="rounded-t w-28 h-28 p-5">
                    </div>
                    <div class="shadow-lg rounded px-5 py-1">
                        <p>${item.title}</p>
                        <p>Rs.${item.price.toFixed(2)}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Total Price: Rs.${item.totalPrice.toFixed(2)}</p>
                        <div class="flex gap-3">
                            <button onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                            <button onclick="decreaseQuantity(${item.id})">-</button>
                            ${item.quantity}
                            <button onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    </div>
                </div>
            `;
            cartItem.appendChild(details);

            cart.appendChild(cartItem);
        });

        // Add total cart price
        const totalCartPrice = calculateTotalCartPrice();
        const totalCartPriceElement = document.createElement('div');
        totalCartPriceElement.innerHTML = `
            <div class="total-cart-price my-5">
                <p class="font-bold text-lg">Total Cart Price : Rs.${totalCartPrice.toFixed(2)}</p>
            </div>
        `;
        cart.appendChild(totalCartPriceElement);
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCartToLocalStorage(); // Save to localStorage
    renderCartOnCartPage();
    updateCartItemCount(); // Update cart item count display
}

// Function to handle decreasing quantity
function decreaseQuantity(productId) {
    const existingCartItem = cartItems.find(item => item.id === productId);
    if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
            existingCartItem.quantity--;
            existingCartItem.totalPrice -= existingCartItem.price;
        } else {
            removeFromCart(productId); // If quantity is 1, remove the item
        }
        saveCartToLocalStorage(); // Save to localStorage
        renderCartOnCartPage();
        updateCartItemCount(); // Update cart item count display
    }
}

// Function to handle increasing quantity
function increaseQuantity(productId) {
    const existingCartItem = cartItems.find(item => item.id === productId);
    if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += existingCartItem.price;
        saveCartToLocalStorage(); // Save to localStorage
        renderCartOnCartPage();
        updateCartItemCount(); // Update cart item count display
    }
}

// Function to save cart items to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to load cart items from localStorage
function loadCartFromLocalStorage() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
    }
}

// Function to update the cart item count display
function updateCartItemCount() {
    const cartItemCountElement = document.getElementById('cartItemCount');
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartItemCountElement.textContent = totalCount;
}

// Function to calculate the total price of all items in the cart
function calculateTotalCartPrice() {
    const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
    return totalPrice;
}

// Call loadCartFromLocalStorage() on page load to load cart items
loadCartFromLocalStorage();

// Call renderCartOnCartPage() on page load to render cart items
window.onload = function () {
    renderCartOnCartPage();
    updateCartItemCount(); // Update cart item count display
};
