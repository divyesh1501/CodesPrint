
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("🚀 ~ fetchProducts ~ data:", data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products
function renderProducts(products) {
    const productsContainer = document.querySelector('#product');
    productsContainer.innerHTML = '';
const selectedProducts=products?.slice(15,20)
selectedProducts?.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="item grid md:grid-cols-4 grid-cols-2 gap-5 my-12">
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

// Call fetchProducts() to fetch data from the API, and then render the products
fetchProducts().then(data => {
    // Once data is fetched, render the products
    renderProducts(data);
}).catch(error => {
    console.error('Error fetching products:', error);
});