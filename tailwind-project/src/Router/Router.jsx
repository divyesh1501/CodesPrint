import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../UI/Pages/HomePage/HomePage'
import ProductPage from '../UI/Pages/ProductPage/ProductPage'
import CategoryPage from '../UI/Pages/CategoryPage/CategoryPage'
import FilterPage from '../UI/Pages/CategoryPage/FilterPage'
import Header from '../UI/Components/Header/Header'
import Footer from '../UI/Components/Footer/Footer'
import Cart from '../UI/Components/Cart/Cart'

export default function Router() {
    

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        exact
                        path="/product"
                        element={<ProductPage />}
                    />
                    <Route
                        exact
                        path="/category"
                        element={<CategoryPage />}
                    />
                    <Route
                        exact
                        path="/filter"
                        element={<FilterPage />}
                    />
                    <Route
                        exact
                        path="/cart"
                        element={<Cart />}
                    />      
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
