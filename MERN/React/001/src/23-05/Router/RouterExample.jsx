import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import LogIn from './LogIn';
import Error from './Error';

export default function RouterExample() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/login' element={<LogIn />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
