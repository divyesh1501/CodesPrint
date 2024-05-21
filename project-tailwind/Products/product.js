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
                 <h4 class="p-2 capitalize lg:block hidden">${product.category}</h4>
                 <p class="p-2 font-semibold flex flex-col xl:gap-3 gap-2">
                     <span class="flex items-center gap-1">
                        Price Rs.${product.price} | ${product.rating.rate} <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                     </span>
                     <button onclick="addToCart(${product.id})" class="border border-black rounded px-2 py-1 uppercase text-xs justify-center font-bold fa-solid fa-cart-plus flex gap-1">
                        <span class="">Add to Cart</span>
                     </button>
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
        saveCartToLocalStorage(); // Save to localStorage
        updateCartItemCount(); // Update cart item count display
    } else {
        console.error(`Product with ID ${productId} not found.`);
    }
}

// Function to get product by ID
function getProductById(productId) {
    // Assuming products is an array of objects fetched from the API
    return products.find(product => product.id === productId);
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
                    <p class="p-2 font-semibold flex flex-col xl:gap-3 gap-2">
                     <span class="flex items-center gap-1">
                        Price Rs.${product.price} | ${product.rating.rate} <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                     </span>
                     <button onclick="addToCart(${product.id})" class="border border-black rounded px-2 py-1 uppercase text-xs justify-center font-bold fa-solid fa-cart-plus flex gap-1">
                        <span class="">Add to Cart</span>
                     </button>
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

// Function to search products
function searchProducts(query) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const lowerCaseQuery = query.toLowerCase();
            const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(lowerCaseQuery) ||
                product.category.toLowerCase().includes(lowerCaseQuery)
            );
            renderProducts(filteredProducts);
        })
        .catch(error => {
            console.error('Error fetching or filtering products:', error);
        });
}

// Initialize the page
async function initialize() {
    try {
        products = await fetchProducts();
        renderProducts(products);
        loadCartFromLocalStorage(); // Load cart items from localStorage
        updateCartItemCount(); // Update cart item count display
        populateCategoryCheckboxes(); // Populate category checkboxes
    } catch (error) {
        console.error('Error initializing page:', error);
    }
    const searchInput = document.querySelector('#searchInput');
    searchInput.addEventListener('input', (event) => {
        searchProducts(event.target.value); 
    });
}

// Call initialize to start
initialize();
