import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './UI/Pages/HomePage/HomePage'
import ProductPage from './UI/Pages/ProductPage/ProductPage'
import CategoryPage from './UI/Pages/CategoryPage/CategoryPage'
import FilterPage from './UI/Pages/CategoryPage/FilterPage'
import Router from './Router/Router'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <CategoryPage /> */}
      {/* <FilterPage /> */}
      <Router />
    </>
  )
}

export default App
