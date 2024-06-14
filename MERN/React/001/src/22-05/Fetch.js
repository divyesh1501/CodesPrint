// import React, { useEffect, useState } from 'react';

// function Fetch() {
//     const [users, setUsers] = useState([]);
//     console.log("🚀 ~ Fetch ~ users:", users);

//     useEffect(() => {
//         fetch('http://dummyjson.com/users')
//             .then(response => response.json())
//             .then(data => {
//                 console.log("🚀 ~ useEffect ~ data:", data);
//                 console.log("----------:", data)
//                 return setUsers(data.users); // Adjusted to access the array of users
//             })
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);
//     return (
//         <>
//             <h1>User List</h1>
//             <ul>
//                 {
//                     users.map(user => (
//                         <li key={user.id}>
//                             {user.firstName}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     );
// }

// export default Fetch;

// import React, { useEffect, useState } from 'react';

// function Fetch() {
//     const [products, setProducts] = useState([]);
//     console.log("🚀 ~ Fetch ~ products:", products);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => {
//                 console.log("🚀 ~ useEffect ~ data:", data);
//                 return setProducts(data); // Set the state with the data array
//             })
//             .catch(error => console.error('Error fetching products:', error));
//     }, []);

//     return (
//         <>
//             <h1>Product List</h1>
//             <ul>
//                 {
//                     products.map(product => (
//                         <li key={product.id}>
//                             {product.title}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     );
// }

// export default Fetch;
import React, { useEffect, useState } from 'react';

function Fetch() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        rating: {
            rate: 0,
            count: 0
        },
        image: "",
        category: "",
        description: "",
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rate' || name === 'count') {
            setNewProduct(prevState => ({
                ...prevState,
                rating: {
                    ...prevState.rating,
                    [name]: parseFloat(value)
                }
            }));
        } else {
            setNewProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const addProduct = () => {
        console.log("🚀 ~ addProduct ~ newProduct:", newProduct);

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log('New product added:', data);
                // Re-fetch the products to get the latest data, including the newly added product
                fetchProducts();
                setNewProduct({
                    title: "",
                    price: 0,
                    rating: {
                        rate: 0,
                        count: 0
                    },
                    image: "",
                    category: "",
                    description: "",
                });
            })
            .catch(error => console.error('Error adding product:', error));
    };

    return (
        <>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
            <h2>Add New Product</h2>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={newProduct.title} onChange={handleInputChange} />
            </div>
            <div>
                <label>Price: </label>
                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
            </div>
            <div>
                <label>Rate: </label>
                <input type="number" step="0.1" name="rate" value={newProduct.rating.rate} onChange={handleInputChange} />
            </div>
            <div>
                <label>Count: </label>
                <input type="number" name="count" value={newProduct.rating.count} onChange={handleInputChange} />
            </div>
            <div>
                <label>Image URL: </label>
                <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />
            </div>
            <div>
                <label>Category: </label>
                <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} />
            </div>
            <div>
                <label>Description: </label>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} />
            </div>
            <button onClick={addProduct}>Add Product</button>
        </>
    );
}

export default Fetch;
