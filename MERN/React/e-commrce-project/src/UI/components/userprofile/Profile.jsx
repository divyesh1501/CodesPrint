import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../layout/Layout';
import myContext from '../../context/data/myContext';

export default function Profile() {
    const [cookies, , removeCookies] = useCookies(['user']);
    const navigate = useNavigate();

    const context = useContext(myContext)
    const { mode } = context

    const logoutHandler = () => {
        removeCookies('user');
        toast.error('You have been logged out!',{
            autoClose: 3000,
        });
        navigate('/');
    };

    let userData = cookies.user;
    console.log('🚀 ~ Profile ~ userData:', userData);

    return (
        <Layout>
            <div className='container px-3 py-5 my-3 mx-auto flex items-center flex-col border-2 rounded'>
                <div className='flex items-center justify-center flex-col' style={{color: mode === 'dark' ? 'white' : ''}} >
                    <h1>User Details</h1>
                    {userData ? (
                        <>
                            <img src="https://cdn-icons-png.flaticon.com/128/3899/3899618.png" alt="User" className='w-44 h-44' />

                            <div>
                                <h3 className='my-3'>
                                    <strong>Name</strong> : {userData.name}
                                </h3>
                                <hr />
                                <h3 className='my-3'>
                                    <strong>Email</strong> : {userData.email}
                                </h3>
                            </div>

                            <button onClick={logoutHandler} className='bg-red-700 text-white border-0 py-2 rounded w-52 mt-3'>
                                Log Out
                            </button>
                        </>
                    ) : (
                        <div>
                            <h3 className='my-3'>No user data available</h3>
                            <h5 className='flex items-center justify-center'><Link to={'/login'}>Login Here!</Link></h5>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
