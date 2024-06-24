import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Profile from '../../components/userprofile/Profile';

function Login() {
    const { register, handleSubmit, reset } = useForm();
    const [cookies, setCookie] = useCookies(['formData', 'user']);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [token, setToken] = useState('');

    function fetchDataAndStore() {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // Store in localStorage
                localStorage.setItem('user', JSON.stringify(data));

                // Store in cookies (as a string)
                setCookie('user', JSON.stringify(data), { path: '/' });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Call the function
    fetchDataAndStore();

    const onSubmit = async (data) => {
        const userData = {
            username: data.username,
            password: data.password,
        };

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const result = await response.json();

            // Storing user details and token in localStorage
            // localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', result.token);

            // Storing user details and token in cookies
            // setCookie('user', JSON.stringify(result.user), { path: '/' });
            setCookie('token', result.token, { path: '/' });

            toast.success('Log in successfully!', { autoClose: 3000 });
            setToken(result.token); // Assuming the token is part of the response
            reset();
        } catch (error) {
            toast.error(`Error: ${error.message}`, { autoClose: 3000 });
        }
    };

    const handleErrors = (errors) => {
        for (const error in errors) {
            toast.error(errors[error].message, {
                autoClose: 3000,
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <Layout>
            {/* <Profile token={token} /> */}
            <div className='container px-3 py-5 mx-auto flex justify-center items-center'>
                <div className='bg-gray-800 px-3 py-10 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit, handleErrors)} className='form'>
                        <div className="">
                            <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                name='username'
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Username'
                                {...register('username', {
                                    required: 'Username is required',
                                })}
                            />
                        </div>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none pr-10'
                                placeholder='Password'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must have at least 6 characters'
                                    }
                                })}
                            />
                            <button
                                type='button'
                                className='absolute inset-y-1 right-0 px-3 pb-4'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash className='text-gray-400' size={20} /> : <FaEye className='text-gray-400' size={20} />}
                            </button>
                        </div>
                        <div className='flex justify-center mb-3'>
                            <button
                                type='submit'
                                className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
                            >
                                Login
                            </button>
                        </div>
                        <div>
                            <h2 className='text-white'>Don't have an account? <Link className='text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                        </div>
                    </form>
                    {token && <p>Token: {token}</p>}
                </div>
            </div>
        </Layout>
    );
}

export default Login;