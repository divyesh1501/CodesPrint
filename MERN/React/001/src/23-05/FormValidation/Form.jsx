import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import UserPage from './UserPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css';

function Form() {
    const [cookies, setCookie] = useCookies(['formData']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('LoginForm');

    useEffect(() => {
        // Check if any user is logged in
        const formData = cookies.formData || {};
        const loggedInUser = Object.values(formData).find(user => user.isLoggedIn);

        setIsLoggedIn(!!loggedInUser);

        // Set currentPage based on isLoggedIn state
        if (loggedInUser) {
            setCurrentPage('UserPage');
        } else {
            setCurrentPage('LoginForm');
        }
    }, [cookies.formData]);

    const toggleRegister = () => {
        setCurrentPage('RegisterForm');
    };

    const toggleLogin = () => {
        setCurrentPage('LoginForm');
    };

    const handleLogout = () => {
        // Clear user isLoggedIn flag when logging out
        const updatedFormData = Object.keys(cookies.formData).reduce((acc, key) => {
            acc[key] = {
                ...cookies.formData[key],
                isLoggedIn: false
            };
            return acc;
        }, {});

        setCookie('formData', updatedFormData, { path: '/' });
        setIsLoggedIn(false);
        setCurrentPage('LoginForm'); // Redirect to login form after logout
    };

    // Render the appropriate page based on currentPage
    let pageContent;
    switch (currentPage) {
        case 'RegisterForm':
            pageContent = <RegisterForm toggleLogin={toggleLogin} />;
            break;
        case 'LoginForm':
            pageContent = <LoginForm toggleRegister={toggleRegister} />;
            break;
        case 'UserPage':
            const loggedInUser = Object.values(cookies.formData).find(user => user.isLoggedIn);
            pageContent = <UserPage userData={loggedInUser} handleLogout={handleLogout} />;
            break;
        default:
            pageContent = <LoginForm toggleRegister={toggleRegister} />;
            break;
    }

    return (
        <div className='form'>
            <ToastContainer />
            {pageContent}
        </div>
    );
}

export default Form;
