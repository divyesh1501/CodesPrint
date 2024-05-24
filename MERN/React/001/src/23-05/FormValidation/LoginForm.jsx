import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import UserPage from './UserPage';

function LoginForm({ toggleRegister }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [cookies, setCookie] = useCookies(['formData']);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    const onSubmit = data => {
        const { email, password } = data;
        const formData = cookies.formData || {};

        // Retrieve user data from cookies based on email
        const user = formData[email];

        if (user && user.password === password) {
            // Mark user as logged in
            setIsLoggedIn(true);
            setUserData(user);
        } else {
            alert('Invalid credentials. Please try again.');
        }
        reset();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserData(null);
    };

    if (isLoggedIn) {
        return <UserPage userData={userData} handleLogout={handleLogout} />;
    }

    return (
        <>
            <div className='title'>
                <h1>Login Form</h1>
            </div>
            <div className='form-validation'>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='email'>Email:</label>
                        </div>
                        <div className='col'>
                            <input type='email' name='email' placeholder='Enter Your Email' {...register('email', { required: 'Email is Required', pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' } })} />
                        </div>
                        <div className='col'>
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='password'>Password:</label>
                        </div>
                        <div className='col'>
                            <input type='password' name='password' placeholder='Enter Your Password' {...register('password', { required: 'Password is Required' })} />
                        </div>
                        <div className='col'>
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col2'>
                            <button type='submit'>Login</button>
                        </div>
                    </div>
                    <div className='ac'>
                        <p>Not registered yet? <span className='link' onClick={toggleRegister}>Register here.!</span></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
