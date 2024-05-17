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

async function fetchMenProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=3');
        const data = await response.json();
        console.log("🚀 ~ fetchMenProducts ~ data:", data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products
function renderMenProducts(products) {
    const productsContainer = document.querySelector('#men');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="item">
            <div class="mb-5 shadow-lg rounded p-5">
            <img src="${product.image}" alt="" class="rounded-t w-full h-56 p-5">
            <h3 class="p-1 font-semibold text-lg line-clamp-1 border-b-2 cursor-pointer">${product.title}</h3>
            <h4 class="p-2 capitalize lg:block hidden">${product.category}</h4>
            <p class="p-2 font-semibold flex flex-col xl:gap-3 gap-2"> <span class="flex items-center gap-1" >Price Rs.${product.price} | ${product.rating.rate} <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
            <button onclick="addToCart(${product.id})" class="border border-black rounded px-2 py-1 uppercase text-xs justify-center font-bold flex gap-1 "><a href="../Products/Products.html" class="">shop now</a></button>
            </p>   
        </div>   
            </div>`;
        productsContainer.appendChild(productElement);
    });
}

// Call fetchMenProducts() to fetch data from the API, and then render the products
fetchMenProducts().then(data => {
    // Once data is fetched, render the products
    renderMenProducts(data);
}).catch(error => {
    console.error('Error fetching products:', error);
});


async function fetchWomenProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("🚀 ~ fetchMenProducts ~ data:", data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products
function renderWomenProducts(products) {
    const productsContainer = document.querySelector('#women');
    productsContainer.innerHTML = '';
    const selectedProducts = products?.slice(15, 18)
    selectedProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="item">
            <div class="mb-5 shadow-lg rounded p-5">
            <img src="${product.image}" alt="" class="rounded-t w-full h-56 p-5">
            <h3 class="p-1 font-semibold text-lg line-clamp-1 border-b-2 cursor-pointer">${product.title}</h3>
            <h4 class="p-2 capitalize lg:block hidden">${product.category}</h4>
            <p class="p-2 font-semibold flex flex-col xl:gap-3 gap-2"> <span class="flex items-center gap-1" >Price Rs.${product.price} | ${product.rating.rate} <i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
            <button onclick="addToCart(${product.id})" class="border border-black rounded px-2 py-1 uppercase text-xs justify-center font-bold flex gap-1 "><a href="../Products/Products.html" class="">shop now</a></button>
            </p>   
        </div>
            </div>`;
        productsContainer.appendChild(productElement);
    });
}

// Call fetchWomenProducts() to fetch data from the API, and then render the products
fetchWomenProducts().then(data => {
    // Once data is fetched, render the products
    renderWomenProducts(data);
}).catch(error => {
    console.error('Error fetching products:', error);
});


// Slider

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.getElementById('customerSlider');
const slides = slider.children;
const totalSlides = slides.length;
let slideIndex = 0;

function showSlides() {
    // Hide all slides
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('md:block');
        slides[i].classList.add('md:hidden');
    }

    // Show only the slides within the current view
    for (let i = slideIndex; i < slideIndex + 3; i++) {
        const index = i >= totalSlides ? i % totalSlides : i;
        slides[index].classList.remove('md:hidden');
        slides[index].classList.add('md:block');
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlides();
}

// Event listeners for arrow buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Initial setup
showSlides();

// Continuous looping slider
setInterval(nextSlide, 5000); // Change slide every 5 seconds



