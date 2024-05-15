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
let products = []; // Array to store fetched products

// Function to fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products
function renderProducts(products) {
    const productsContainer = document.querySelector('.product');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="item">
        <div class="mb-5 shadow-lg rounded p-5">
            <img src="${product.image}" alt="" class="rounded-t w-full h-56 p-5">
            <h3 class="p-1 font-semibold text-lg line-clamp-1 border-b-2 cursor-pointer">${product.title}</h3>
            <h4 class="p-2 capitalize">${product.category}</h4>
            <p class="p-2 font-semibold flex gap-1 items-center">Price Rs.${product.price} | ${product.rating.rate}
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <button onclick="addToCart(${product.id})" class="border border-black rounded px-2 py-1 uppercase text-xs font-bold fa-solid fa-cart-plus ">Add to Cart</button>
            </p>   
        </div>   
    </div>`;
        productsContainer.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (product) {
        const existingCartItem = cartItems.find(item => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity++;
            existingCartItem.totalPrice += product.price;
        } else {
            cartItems.push({
                id: productId,
                title: product.title,
                price: product.price,
                quantity: 1,
                totalPrice: product.price,
                image: product.image
            });
        }
        renderCart();
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    renderCart();
}

// Function to render cart
function renderCart() {
    const cart = document.getElementById('cart');
    cart.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Product image
        const image = document.createElement('img');
        image.classList.add('product-image');
        image.innerHTML = ``
        // image.src = item.image;
        // image.alt = item.title;
        cartItem.appendChild(image);

        // Product details
        const details = document.createElement('div');
        details.classList.add('product-details');
        details.innerHTML = `
        <div class="flex gap-3">
            <div class="shadow-lg rounded">
            <img src="${item.image}" alt="" class="rounded-t w-28 h-28 p-5">
            </div>
            <div class="shadow-lg rounded p-2">
            <p>${item.title}</p>
            <p>Rs.${item.price} </p>
            <p>Total Price: Rs.${item.totalPrice}</p>
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
}

// Function to get product by ID
function getProductById(productId) {
    // Assuming products is an array of objects fetched from the API
    return products.find(product => product.id === productId);
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
        renderCart();
    }
}

// Function to handle increasing quantity
function increaseQuantity(productId) {
    const existingCartItem = cartItems.find(item => item.id === productId);
    if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice += existingCartItem.price;
        renderCart();
    }
}

// Function to display products based on selected categories
async function displayProductsByCategory(selectedCategories = []) {
    const productDiv = document.querySelector('.product');
    productDiv.innerHTML = '';

    const filteredProducts = selectedCategories.length > 0 ?
        products.filter(product => selectedCategories.includes(product.category)) :
        products;

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="item">
        <div class="mb-5 shadow-lg rounded p-5">
            <img src="${product.image}" alt="" class="rounded-t w-full h-56 p-5">
            <h3 class="p-1 font-semibold text-lg line-clamp-1 border-b-2 cursor-pointer">${product.title}</h3>
            <h4 class="p-2 capitalize">${product.category}</h4>
            <p class="p-2 font-semibold flex gap-1 items-center">Price Rs. ${product.price} | ${product.rating.rate}
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            </p>   
        </div>   
    </div>
        `;
        productDiv.appendChild(productElement);
    });
}

// Function to handle category filtering
function categoryFilter() {
    const checkInputs = document.querySelectorAll("input[type='checkbox']:checked");
    const selectedCategories = Array.from(checkInputs).map(input => input.value);
    displayProductsByCategory(selectedCategories);
}

// Function to populate category checkboxes
async function populateCategoryCheckboxes() {
    const categoryListDiv = document.querySelector('.CategoryList');
    categoryListDiv.innerHTML = ''; // Clear existing checkboxes

    try {
        const productResponse = await fetch('https://fakestoreapi.com/products');
        const fetchedProducts = await productResponse.json();

        const categories = [...new Set(fetchedProducts.map(product => product.category))]; // Get unique categories

        categories.forEach(category => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = category;
            checkbox.addEventListener('change', categoryFilter); // Add event listener

            const label = document.createElement('label');
            label.textContent = category.toUpperCase();


            const div = document.createElement('div');
            div.classList.add('flex', 'flex-row');
            div.appendChild(checkbox);
            div.appendChild(label);

            categoryListDiv.appendChild(div);
        });

        // Update products array
        products = [...fetchedProducts];
    } catch (error) {
        console.error('Error fetching or displaying products:', error);
    }
}

// Initialize the page
async function initialize() {
    try {
        products = await fetchProducts();
        renderProducts(products);
        await populateCategoryCheckboxes(); // Display categories initially
    } catch (error) {
        console.error('Error initializing page:', error);
    }
}

// Call initialize to start
initialize();