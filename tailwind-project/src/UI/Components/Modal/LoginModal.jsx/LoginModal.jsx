// LoginModal.js
import { X } from 'lucide-react';
import React, { useState } from 'react';

const initialData = {
    username: '',
    password: ''
}

export const LoginModal = ({ isOpen, onClose, toggle }) => {
    const [formData, setFormData] = useState(initialData);

    function openRegModal() {
        toggle();
        onClose();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (you can add your login logic)
        console.log('Form submitted:', formData);
        // Clear form fields after submission
        setFormData(initialData);
        // Close the modal after submission
        onClose();
    };

    return (
        <section>
            <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                        {/* Modal content */}
                        <div className="modal-content py-4 text-left px-6">

                            {/* Title */}
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Login</p>
                                <button onClick={onClose} className="modal-close cursor-pointer z-50">
                                    <X />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="pb-8">
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <p className='mb-5'>Don't have a accout <span className='text-blue-500 cursor-pointer' onClick={openRegModal} >Click Here!</span></p>
                                <div className="flex items-center justify-between">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Login
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


