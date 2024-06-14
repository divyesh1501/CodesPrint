import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyState from '../UI/context/data/myState';
import Home from '../UI/pages/home/Home';
import Order from '../UI/pages/order/Order';
import Cart from '../UI/pages/cart/Cart';
import Dashboard from '../UI/pages/admin/dashboard/Dashboard';
import Allproducts from '../UI/pages/allproducts/Allproducts';
import Login from '../UI/pages/registration/Login';
import Signup from '../UI/pages/registration/Signup';
import ProductInfo from '../UI/pages/prductInfo/ProductInfo';
import Profile from '../UI/components/userprofile/Profile';
import AddProduct from '../UI/pages/admin/pages/AddProduct';
import UpdateProduct from '../UI/pages/admin/pages/UpdateProduct';
import Nopage from '../UI/pages/nopage/Nopage';
import AdminProtectedRouter, { ProtectedRouter } from './ProtectedRouter';

function Router() {
    return (
        <MyState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/order" element={<ProtectedRouter Component={Order} />} />
                    <Route path="/cart" element={<ProtectedRouter Component={Cart} />} />
                    <Route path="/dashboard" element={<AdminProtectedRouter Component={Dashboard} />} />
                    <Route path="/allproducts" element={<Allproducts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/productinfo/:id" element={<ProductInfo />} />
                    <Route path="/addproduct" element={<AdminProtectedRouter Component={AddProduct} />} />
                    <Route path="/updateproduct" element={<AdminProtectedRouter Component={UpdateProduct} />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </BrowserRouter>
        </MyState>
    );
}

export default Router;
