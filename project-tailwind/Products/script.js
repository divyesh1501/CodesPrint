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

// let checkCat = ["men's clothing","jewelery","electronics","women's clothing"]
// console.log("🚀 ~ checkCat:", checkCat.includes("jewelery"))
let productDiv = document.querySelector('.product');
let CategoryListDiv = document.querySelector('.CategoryList');
let allCategory = [];
// let allCheckCat = [];
let displayProduct = async (allCheckCat = []) => {
    // CategoryListDiv.innerHTML = '';
    productDiv.innerHTML = '';
    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();
    // console.log("finalProduct:", finalProduct)
    finalProduct.forEach(e => {


        // Category Data
        if (!allCategory.includes(e.category)) {
            CategoryListDiv.innerHTML += `
            <div class="flex flex-row">
                 <input type="checkbox" onclick='categoryFilter()' value="${e.category}" name="" id="">
                 <label for="" class="py-1 px-1 capitalize line-clamp-1">
                        ${e.category}
                 </label>
            </div>`
            allCategory.push(e.category)
        }

        if (allCheckCat.length == 0) {
            // console.log("first")
            allCheckCat = allCategory;
        }
        if (allCheckCat.includes(e.category)) {

            // Product Data
            productDiv.innerHTML += `
            <div class="item">
                <div class="mb-5 shadow-lg rounded p-5">
                    <img src="${e.image}" alt="" class="rounded-t w-full h-56 p-5">
                    <h3 class="p-1 font-semibold text-lg line-clamp-1 border-b-2 cursor-pointer">${e.title}</h3>
                    <h4 class="p-2 capitalize">${e.category}</h4>
                    <p class="p-2 font-semibold flex gap-1 items-center">Price Rs. ${e.price} | ${e.rating.rate}
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    </p>
                </div>
            </div>`
        }
    });
}

displayProduct();

let categoryFilter = () => {
    // alert("hello")
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkData = [];
    checkInput.forEach((ele) => {
        if (ele.checked) {
            checkData.push(ele.value);
        }
    })
    displayProduct(checkData);
}

