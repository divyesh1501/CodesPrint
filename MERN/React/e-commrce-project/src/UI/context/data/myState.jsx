import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, updateQuantity } from '../../redux/cartSlice';

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
    const [productCard, setProductCard] = useState([])
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
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error));
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

    // =========Update-Product========
    const updateProduct = () => {
        if (!newProduct.title || !newProduct.price || !newProduct.rating.rate || !newProduct.rating.count || !newProduct.image || !newProduct.category || !newProduct.description) {
            toast.error('Please fill in all fields!', {
                autoClose: 3000,
            });
            return;
        }

        fetch(`https://fakestoreapi.com/products/${productIdToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product updated:', data);
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
                setIsUpdating(false);
                setProductIdToUpdate(null);
                toast.success('Product updated successfully!', {
                    autoClose: 3000,
                });
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 800);
            })
            .catch(error => {
                console.error('Error updating product:', error);
                toast.error('Failed to update product. Please try again later.', {
                    autoClose: 3000,
                });
            });
    };

    // =========Delete-Product========
    const deleteProduct = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Product deleted:', data);
                fetchProducts();
                toast.error('Product deleted successfully!', {
                    autoClose: 3000,
                });
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                toast.error('Failed to delete product. Please try again later.', {
                    autoClose: 3000,
                });
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

    // =========Add-to-Cart-Product========
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    console.log(cartItems);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Product added to cart', {
            autoClose: 3000,
        });
    };

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cartItems));
    // }, [cartItems]);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('user')) || {};
        const updatedCart = {
            ...currentUser,
            cartItems
        };
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log("🚀 ~ useEffect ~ updatedCart:", updatedCart)
    }, [cartItems]);

    const [cartData, setCartData] = useState({});
    useEffect(() => {
        // Retrieve the cart data from localStorage when the component mounts
        const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
        setCartData(savedCart);
        console.log("🚀 ~ useEffect ~ savedCart:", savedCart);
    }, []);


    
    // ===============deleteCart===================
    const deleteCartItem = (id) => {
        dispatch(deleteFromCart({ id }));
        toast.info('Product removed from cart', {
            autoClose: 3000,
        });
    };

    // ======================updateCart==========
    const incrementQuantity = (id) => {
        dispatch(updateQuantity({ id, quantity: 1 }));
    };

    const decrementQuantity = (id, quantity) => {
        if (quantity === 1) {
            deleteCartItem(id);
        } else {
            dispatch(updateQuantity({ id, quantity: -1 }));
        }
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // ==============total-cartAmount================
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => {
            temp += parseInt(item.price) * item.quantity;
        });
        setTotalAmount(temp);
    }, [cartItems]);

    const shipping = cartItems.length > 0 ? 100 : 0;
    const grandTotal = shipping + totalAmount;

    // ============razor-payment-gateway============================

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const buyNow = () => {
        if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
            toast.error("All fields are required", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            toast.error("User data is missing. Please log in again.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const addressInfo = {
            name,
            address,
            pincode,
            phoneNumber,
            date: new Date().toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }),
        };

        const options = {
            key: "rzp_test_5KDsYH6StZ89gb", // Your Razorpay key
            key_secret: "Pu6YvA4bNocPAHtIbA1rSxti",
            amount: parseInt(grandTotal * shipping),
            currency: "INR",
            order_receipt: 'order_rcptid_' + name,
            order_id: '', // Order ID from your backend
            name: "One5",
            description: "Order description",
            prefill: {
                name: user.name,
                email: user.email,
                contact: phoneNumber,
            },
            theme: {
                color: "#3399cc",
            },
            handler: function (response) {
                toast.success('Payment Successful', {
                    autoClose: 2500,
                });
                const paymentId = response.razorpay_payment_id;
                const orderInfo = {
                    cartItems,
                    addressInfo,
                    date: new Date().toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }),
                    email: user.email,
                    name: user.name,
                    paymentId,
                };

                let orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders.push(orderInfo);
                localStorage.setItem('orders', JSON.stringify(orders));

                console.log('OrderInfo:', orderInfo);

                cartItems.forEach(item => {
                    dispatch(deleteFromCart({ id: item.id }));
                });

                toast.success('Your order has been placed!', {
                    autoClose: 4000,
                });

                setName("");
                setAddress("");
                setPincode("");
                setPhoneNumber("");
            },
        };

        var razorpay = new window.Razorpay(options);
        razorpay.open();
    };


    // ============get-order============================
    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        try {
            const result = localStorage.getItem('orders');
            if (result) {
                const ordersArray = JSON.parse(result);
                setOrder(ordersArray);
            }
        } catch (error) {
            console.log(error); // Handle errors appropriately
        }
    };

    useEffect(() => {
        getOrderData();
    }, []);

    // ============get-user-data===================
    const [userData, setUserData] = useState([]);

    const getUserData = async () => {
        try {
            const result = localStorage.getItem('formData');
            if (result) {
                const userArray = JSON.parse(result);
                setUserData(userArray);
                console.log("🚀 ~ getUserData ~ userArray:", userArray)
            }
        } catch (error) {
            console.log(error); // Handle errors appropriately
        }
    };

    useEffect(() => {
        getUserData();
    }, []);
    // ============filter-product===================

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    // ===============homepage-filter===========================
    const filteredProducts = productCard.filter((obj) => {
        const matchesSearchKey = searchkey ?
            (obj.title.toLowerCase().includes(searchkey.toLowerCase()) ||
                obj.category.toLowerCase().includes(searchkey.toLowerCase())) : true;
        const matchesFilterType = filterType ? obj.category.toLowerCase() === filterType.toLowerCase() : true;
        const matchesFilterPrice = filterPrice ? obj.price <= filterPrice : true;
        return matchesSearchKey && matchesFilterType && matchesFilterPrice;
    });


    // ===============allproduct-filter===========================
    const filteredAllProducts = products.filter((obj) => {
        const matchesSearchKey = searchkey ?
            (obj.title.toLowerCase().includes(searchkey.toLowerCase()) ||
                obj.category.toLowerCase().includes(searchkey.toLowerCase())) : true;
        const matchesFilterType = filterType ? obj.category.toLowerCase() === filterType.toLowerCase() : true;
        const matchesFilterPrice = filterPrice ? obj.price <= filterPrice : true;
        return matchesSearchKey && matchesFilterType && matchesFilterPrice;
    });


    return (
        <MyContext.Provider value={{ mode, toggleMode, products, productCard, setProducts, newProduct, setNewProduct, addProduct, updateProduct, deleteProduct, setFormForUpdate, handleInputChange, addCart, name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow, incrementQuantity, decrementQuantity, deleteCartItem, totalAmount, cartItems, shipping, grandTotal, order, userData, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, filteredProducts, filteredAllProducts, cartData }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;

