import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cookies, setCookie] = useCookies(['formData', 'user']);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const existingData = cookies.formData || {};

        if (cookies.user) {
            // User is already logged in
            toast.warning('User already logged in!');
            return;
        }

        if (existingData[data.email] && existingData[data.email].password === data.password) {
            toast.success('Login successful!');
            setCookie('user', existingData[data.email], { path: '/' }); // Set the user cookie
            navigate('/profile'); // Redirect to profile or any other protected route
        } else {
            toast.error('Email or password is incorrect');
        }
    };

    const handleErrors = (errors) => {
        for (const error in errors) {
            toast.error(errors[error].message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <Layout>
            <div className='container px-3 py-5 mx-auto flex justify-center items-center'>
                <div className='bg-gray-800 px-3 py-10 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit, handleErrors)} className='form'>
                        <div className="">
                            <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                        </div>
                        <div>
                            <input
                                type="email"
                                name='email'
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Email'
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Entered value does not match email format'
                                    }
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
                </div>
            </div>
        </Layout>
    );
}

export default Login;
