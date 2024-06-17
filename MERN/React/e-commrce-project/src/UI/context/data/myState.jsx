// import React, { useEffect, useState } from 'react';
// import MyContext from './myContext';
// import { toast } from 'react-toastify';

// function MyState(props) {
//     const [mode, setMode] = useState('light');

//     const toggleMode = () => {
//         if (mode === 'light') {
//             setMode('dark');
//             document.body.style.backgroundColor = 'rgb(17,24,39)';
//         } else {
//             setMode('light');
//             document.body.style.backgroundColor = 'white';
//         }
//     };

//     const [products, setProducts] = useState([]);
//     const [prductCard, setProductCard] = useState([])
//     const [newProduct, setNewProduct] = useState({
//         title: "",
//         price: "",
//         rating: {
//             rate: "",
//             count: ""
//         },
//         image: "",
//         category: "",
//         description: "",
//     });

//     const [isUpdating, setIsUpdating] = useState(false);
//     const [productIdToUpdate, setProductIdToUpdate] = useState(null);

//     console.log("🚀 ~ Fetch ~ products:", products);

//     // =========Get-Product========
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = () => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => {
//                 setProducts(data);
//             })
//             .catch(error => console.error('Error fetching products:', error));
//     };
//     // =========Get-limited-Product========

//     useEffect(() => {
//         fetchLimitedProducts(); // Change the number to display more or fewer products
//     }, []);

//     const fetchLimitedProducts = () => {
//         fetch('https://fakestoreapi.com/products')
//             .then(response => response.json())
//             .then(data => {
//                 const limitedProducts = data.slice(0, 4);
//                 setProductCard(limitedProducts);
//             })
//             .catch(error => console.error('Error fetching products:', error));
//     };

//     // =========Add-Product========
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'rate' || name === 'count') {
//             setNewProduct(prevState => ({
//                 ...prevState,
//                 rating: {
//                     ...prevState.rating,
//                     [name]: parseFloat(value)
//                 }
//             }));
//         } else {
//             setNewProduct(prevState => ({
//                 ...prevState,
//                 [name]: value
//             }));
//         }
//     };

//     const addProduct = () => {
//         // Validate the newProduct object before proceeding
//         if (!newProduct.title || !newProduct.price || !newProduct.rating.rate || !newProduct.rating.count || !newProduct.image || !newProduct.category || !newProduct.description) {
//             toast.error('Please fill in all fields!', {
//                 autoClose: 3000,
//             });
//             return;
//         }

//         fetch('https://fakestoreapi.com/products', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newProduct),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('New product added:', data);
//                 // Re-fetch the products to get the latest data, including the newly added product
//                 fetchProducts();
//                 setNewProduct({
//                     title: "",
//                     price: "",
//                     rating: {
//                         rate: "",
//                         count: ""
//                     },
//                     image: "",
//                     category: "",
//                     description: "",
//                 });
//                 toast.success('Product added successfully!', {
//                     autoClose: 3000,
//                 });
//                 setTimeout(() => {
//                     window.location.href = '/dashboard'
//                 }, 800);
//             })
//             .catch(error => {
//                 console.error('Error adding product:', error);
//                 toast.error('Failed to add product. Please try again later.', {
//                     autoClose: 3000,
//                 });
//             });
//     };

//     // =========Update-Product========
//     const updateProduct = () => {
//         if (!newProduct.title || !newProduct.price || !newProduct.rating.rate || !newProduct.rating.count || !newProduct.image || !newProduct.category || !newProduct.description) {
//             toast.error('Please fill in all fields!', {
//                 autoClose: 3000,
//             });
//             return;
//         }

//         fetch(`https://fakestoreapi.com/products/${productIdToUpdate}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newProduct),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Product updated:', data);
//                 fetchProducts();
//                 setNewProduct({
//                     title: "",
//                     price: "",
//                     rating: {
//                         rate: "",
//                         count: ""
//                     },
//                     image: "",
//                     category: "",
//                     description: "",
//                 });
//                 setIsUpdating(false);
//                 setProductIdToUpdate(null);
//                 toast.success('Product updated successfully!', {
//                     autoClose: 3000,
//                 });
//                 setTimeout(() => {
//                     window.location.href = '/dashboard'
//                 }, 800);
//             })
//             .catch(error => {
//                 console.error('Error updating product:', error);
//                 toast.error('Failed to update product. Please try again later.', {
//                     autoClose: 3000,
//                 });
//             });
//     };

//     // =========Delete-Product========
//     const deleteProduct = (id) => {
//         fetch(`https://fakestoreapi.com/products/${id}`, {
//             method: 'DELETE',
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Product deleted:', data);
//                 fetchProducts();
//                 toast.error('Product deleted successfully!', {
//                     autoClose: 3000,
//                 });
//             })
//             .catch(error => {
//                 console.error('Error deleting product:', error);
//                 toast.error('Failed to delete product. Please try again later.', {
//                     autoClose: 3000,
//                 });
//             });
//     };

//     // =========Set-Form-For-Update========
//     const setFormForUpdate = (id) => {
//         const productToUpdate = products.find(product => product.id === id);
//         if (productToUpdate) {
//             setNewProduct({
//                 title: productToUpdate.title,
//                 price: productToUpdate.price,
//                 rating: {
//                     rate: productToUpdate.rating.rate,
//                     count: productToUpdate.rating.count
//                 },
//                 image: productToUpdate.image,
//                 category: productToUpdate.category,
//                 description: productToUpdate.description,
//             });
//             setIsUpdating(true);
//             setProductIdToUpdate(id);
//         }
//     };

//     return (
//         <MyContext.Provider value={{ mode, toggleMode, products, prductCard, setProducts, newProduct, setNewProduct, addProduct, updateProduct, deleteProduct, setFormForUpdate, handleInputChange }}>
//             {props.children}
//         </MyContext.Provider>
//     );
// }

// export default MyState;


import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { toast } from 'react-toastify';

function MyState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17,24,39)';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };

    const [products, setProducts] = useState([]);
    const [prductCard, setProductCard] = useState([]);
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        rating: {
            rate: "",
            count: ""
        },
        image: "",
        category: "",
        description: "",
    });

    const [isUpdating, setIsUpdating] = useState(false);
    const [productIdToUpdate, setProductIdToUpdate] = useState(null);

    console.log("🚀 ~ Fetch ~ products:", products);

    // =========Get-Product========
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        const localProducts = localStorage.getItem('products');
        if (localProducts) {
            setProducts(JSON.parse(localProducts));
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    localStorage.setItem('products', JSON.stringify(data));
                })
                .catch(error => console.error('Error fetching products:', error));
        }
    };

    // =========Get-limited-Product========
    useEffect(() => {
        fetchLimitedProducts(); // Change the number to display more or fewer products
    }, []);

    const fetchLimitedProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                const limitedProducts = data.slice(0, 4);
                setProductCard(limitedProducts);
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    // =========Add-Product========
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
        // Validate the newProduct object before proceeding
        if (!newProduct.title || !newProduct.price || !newProduct.rating.rate || !newProduct.rating.count || !newProduct.image || !newProduct.category || !newProduct.description) {
            toast.error('Please fill in all fields!', {
                autoClose: 3000,
            });
            return;
        }

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        setNewProduct({
            title: "",
            price: "",
            rating: {
                rate: "",
                count: ""
            },
            image: "",
            category: "",
            description: "",
        });

        toast.success('Product added successfully!', {
            autoClose: 3000,
        });

        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 800);
    };

    // =========Update-Product========
    const updateProduct = () => {
        if (!newProduct.title || !newProduct.price || !newProduct.rating.rate || !newProduct.rating.count || !newProduct.image || !newProduct.category || !newProduct.description) {
            toast.error('Please fill in all fields!', {
                autoClose: 3000,
            });
            return;
        }

        const updatedProducts = products.map(product =>
            product.id === productIdToUpdate ? newProduct : product
        );

        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        setNewProduct({
            title: "",
            price: "",
            rating: {
                rate: "",
                count: ""
            },
            image: "",
            category: "",
            description: "",
        });

        setIsUpdating(false);
        setProductIdToUpdate(null);

        toast.success('Product updated successfully!', {
            autoClose: 3000,
        });

        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 800);
    };

    // =========Delete-Product========
    const deleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        toast.error('Product deleted successfully!', {
            autoClose: 3000,
        });
    };

    // =========Set-Form-For-Update========
    const setFormForUpdate = (id) => {
        const productToUpdate = products.find(product => product.id === id);
        if (productToUpdate) {
            setNewProduct({
                title: productToUpdate.title,
                price: productToUpdate.price,
                rating: {
                    rate: productToUpdate.rating.rate,
                    count: productToUpdate.rating.count
                },
                image: productToUpdate.image,
                category: productToUpdate.category,
                description: productToUpdate.description,
            });
            setIsUpdating(true);
            setProductIdToUpdate(id);
        }
    };

    return (
        <MyContext.Provider value={{ mode, toggleMode, products, prductCard, setProducts, newProduct, setNewProduct, addProduct, updateProduct, deleteProduct, setFormForUpdate, handleInputChange }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;

