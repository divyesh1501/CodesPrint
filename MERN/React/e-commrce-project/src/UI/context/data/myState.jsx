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
    console.log("🚀 ~ Fetch ~ products:", products);

    // =========Get-Product========
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
    
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
            })
        console.log("🚀 ~ addProduct ~ newProduct:", newProduct)
        .then(response => response.json())
        .then(data => {
            console.log('New product added:', data);
            // Re-fetch the products to get the latest data, including the newly added product
            fetchProducts();
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
                window.location.href = '/dashboard'
            }, 800);
        })
        .catch(error => {
            console.error('Error adding product:', error);
            toast.error('Failed to add product. Please try again later.', {
                autoClose: 3000,
            });
        });
    };
    
    // const [loading, setLoading] = useState(false);

    return (
        <MyContext.Provider value={{ mode, toggleMode, products, setProducts, newProduct, setNewProduct, addProduct, handleInputChange }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
