import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError
    } = useForm();
    const [cookies, setCookie] = useCookies(['formData']);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            // Retrieve existing cookie data
            const existingData = cookies.formData || {};

            // Check if email already exists
            if (existingData[data.email]) {
                toast.error('Email already registered!', {
                    autoClose: 3000,
                });
                return;
            }

            // Merge new data with existing data
            const updatedData = { ...existingData, [data.email]: data };

            // Set updated data back into cookies
            setCookie('formData', updatedData, { path: '/' });

            // Show success message
            toast.success('Registration successful!', {
                autoClose: 3000,
            });

            // Reset the form after submission
            reset();
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Error during registration', {
                autoClose: 3000,
            });
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
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <Layout>
            <div className='container px-3 py-5 mx-auto flex justify-center items-center'>
                <div className='bg-gray-800 px-3 py-10 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit, handleErrors)} className='form'>
                        <div className="">
                            <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                        </div>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                {...register('name', { required: 'Name is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Your Email'
                                {...register('email', {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Email is invalid'
                                    }
                                })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter Your Password'
                                {...register('password', {
                                    required: 'Password is Required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long'
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                        message: 'Password must include uppercase, lowercase, number, and special character'
                                    }
                                })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none pr-10'
                            />
                            <button
                                type='button'
                                className='absolute inset-y-1 right-0 px-3 pb-4'
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash className='text-gray-400' size={20} /> : <FaEye className='text-gray-400' size={20} />}
                            </button>
                        </div>
                        <div>
                            <select
                                name='userType'
                                {...register('userType', { required: 'User type is required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            >
                                <option value=''>Select User Type</option>
                                <option value='admin'>Admin</option>
                                <option value='user'>User</option>
                            </select>
                        </div>
                        <div className='flex justify-center mb-3'>
                            <button
                                type='submit'
                                className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'
                            >
                                Sign Up
                            </button>
                        </div>
                        <div>
                            <h2 className='text-white'>Have an account? <Link className='text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Signup;
