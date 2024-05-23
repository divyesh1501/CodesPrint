import React from 'react'
import { useForm } from 'react-hook-form'
import "./form.css";

function FormValidation() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password")

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [age, setAge] = useState('');
    // const [gender, setGender] = useState('');
    // const [errors, setErrors] = useState('');


    // const validateForm = () => {
    //     const errors = {};

    //     if (!name) {
    //         errors.name = 'Name is Required';
    //     }
    //     if (!email) {
    //         errors.email = 'Email is Required';
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         errors.email = 'Email is Invaild'
    //     }
    //     if (!password) {
    //         errors.password = 'Password is Required';
    //     } else if (password.length < 6) {
    //         errors.password = 'Password must be 6 characters'
    //     }
    //     if (!confirmPassword) {
    //         errors.confirmPassword = 'Confirm Password is Required';
    //     } else if (password !== confirmPassword) {
    //         errors.confirmPassword = 'Password Doest not Match'
    //     }
    //     if (!age) {
    //         errors.age = 'Age is Required';
    //     } else if (isNaN(age) || age < 18) {
    //         errors.age = 'Age must be a number and at least 18'
    //     }
    //     if (!gender) {
    //         errors.gender = 'Gender is Required';
    //     }

    //     console.log(errors)
    //     return errors;
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const validationErrors = validateForm();
    //     if (Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors)
    //     } else {
    //         console.log('Form Submit')
    //     }
    // }

    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='container'>
                <h1>Form Validation</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className='col'>
                    <label htmlFor="" >Name:</label>
                    <input type="text" name='name' {...register('name', { required: 'Name is Required' })} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                {/* value={name} onChange={(e) => setName(e.target.value)}  */}

                <div className='col'>
                    <label htmlFor="">Email:</label>
                    <input type="email" name='email' {...register('email', { required: 'Email is Required', pattern: { value: /\S+@\S+\.\S+/, message: 'Email is invalid' } })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                {/* value={email} onChange={(e) => setEmail(e.target.value)} */}

                <div className='col'>
                    <label htmlFor="">Password:</label>
                    <input type="password" name='password' {...register('password', { required: 'Password is Required', minLength: { value: 6, message: 'Password Must be 6 characters long' } })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                {/* value={password} onChange={(e) => setPassword(e.target.value)} */}

                <div className='col'>
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" name='confirmPassword' {...register('confirmPassword', { required: 'Confirm Password is Required', validate: value => value === password || 'Passwords Does not Match' })} />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>

                {/* value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} */}

                <div className='col'>
                    <label htmlFor="">Age:</label>
                    <input type="number" name='age' {...register('age', { required: 'Age is Required', min: { value: 18, message: 'Age must be a number and at least 18' } })} />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>

                {/* value={age}
                onChange={(e) => setAge(e.target.value)} */}

                <div className='col'>
                    <label htmlFor="">Gender:</label>
                    <select name="gender" id="" {...register('gender', { required: 'Gender is Required' })}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <span>{errors.gender.message}</span>}
                </div>

                {/* value={gender} onChange={(e) => setGender(e.target.value)} */}

                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default FormValidation
