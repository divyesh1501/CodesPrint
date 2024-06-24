import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
    const { register, handleSubmit, reset } = useForm();
    const [cookies, setCookie] = useCookies(['formData']);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        const userData = {
            email: data.email,
            username: data.username,
            password: data.password,
            name: {
                firstname: data.firstname,
                lastname: data.lastname
            },
            address: {
                city: data.city,
                street: data.street,
                number: data.number,
                zipcode: data.zipcode,
                geolocation: {
                    lat: data.lat,
                    long: data.long
                }
            },
            phone: data.phone
        };

        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("🚀 ~ onSubmit ~ result:", result)

            // Retrieve existing users from localStorage
            let existingUsers = JSON.parse(localStorage.getItem('user-info'));

            // If no existing users, initialize as an empty array
            if (!existingUsers) {
                existingUsers = [];
            }

            // Merge the response data (ID) with the submitted user data
            const newUser = { ...userData, id: result.id };

            // Add the new user to the existing users
            existingUsers.push(newUser);

            // Save the updated users list to localStorage
            localStorage.setItem('user-info', JSON.stringify(existingUsers));

            toast.success('User registered successfully!', { autoClose: 3000 });
            reset();
        } catch (error) {
            toast.error(`Error: ${error.message}`, { autoClose: 3000 });
        }
    };


    const handleErrors = (errors) => {
        for (const error in errors) {
            toast.error(errors[error].message, { autoClose: 3000 });
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
                        <div>
                            <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                        </div>
                        <div>
                            <input
                                type='text'
                                name='firstname'
                                placeholder='First Name'
                                {...register('firstname', { required: 'First Name is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='lastname'
                                placeholder='Last Name'
                                {...register('lastname', { required: 'Last Name is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                {...register('username', { required: 'Username is Required' })}
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
                            <input
                                type='text'
                                name='city'
                                placeholder='City'
                                {...register('city', { required: 'City is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='street'
                                placeholder='Street'
                                {...register('street', { required: 'Street is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='number'
                                name='number'
                                placeholder='Number'
                                {...register('number', { required: 'Number is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='zipcode'
                                placeholder='Zip Code'
                                {...register('zipcode', { required: 'Zip Code is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='lat'
                                placeholder='Latitude'
                                {...register('lat', { required: 'Latitude is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='long'
                                placeholder='Longitude'
                                {...register('long', { required: 'Longitude is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='phone'
                                placeholder='Phone'
                                {...register('phone', { required: 'Phone is Required' })}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-400 outline-none'
                            />
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
