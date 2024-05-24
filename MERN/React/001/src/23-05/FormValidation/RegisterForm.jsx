import React from 'react';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm({ toggleLogin }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();
    const [cookies, setCookie] = useCookies(['formData']);

    const password = watch('password');

    const onSubmit = data => {
        // Retrieve existing cookie data
        const existingData = cookies.formData || {};

        // Check if email already exists
        if (existingData[data.email]) {
            toast.error('Email already registered!');
            return;
        }

        // Merge new data with existing data
        const updatedData = { ...existingData, [data.email]: data };

        // Set updated data back into cookies
        setCookie('formData', updatedData, { path: '/' });

        // Show success message
        toast.success('Registration successful!');

        // Reset the form after submission
        reset();

        // Toggle to login form
        toggleLogin();
    };

    return (
        <>
            <div className='title'>
                <h1>Register Form</h1>
            </div>
            <div className='form-validation'>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='name'>Name:</label>
                        </div>
                        <div className='col'>
                            <input type='text' name='name' placeholder='Enter Your Name' {...register('name', { required: 'Name is Required' })} />
                        </div>
                        <div className='col'>
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                    </div>
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
                            <input type='password' name='password' placeholder='Enter Your Password' {...register('password', { required: 'Password is Required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} />
                        </div>
                        <div className='col'>
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='confirmPassword'>Confirm Password:</label>
                        </div>
                        <div className='col'>
                            <input type='password' name='confirmPassword' placeholder='Enter Your Password' {...register('confirmPassword', { required: 'Confirm Password is Required', validate: value => value === password || 'Passwords do not match' })} />
                        </div>
                        <div className='col'>
                            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='age'>Age:</label>
                        </div>
                        <div className='col'>
                            <input type='number' name='age' placeholder='Enter Your Age' {...register('age', { required: 'Age is Required', min: { value: 18, message: 'Age must be at least 18' } })} />
                        </div>
                        <div className='col'>
                            {errors.age && <span>{errors.age.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col1'>
                            <label htmlFor='gender'>Gender:</label>
                        </div>
                        <div className='col'>
                            <select name='gender' {...register('gender', { required: 'Gender is Required' })}>
                                <option value=''>Select Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>
                        <div className='col'>
                            {errors.gender && <span>{errors.gender.message}</span>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col2'>
                            <button type='submit'>Register</button>
                        </div>
                    </div>
                    <div className='ac'>
                        <p>Already have an account <span className='link' onClick={toggleLogin}>login here.!</span></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterForm;
