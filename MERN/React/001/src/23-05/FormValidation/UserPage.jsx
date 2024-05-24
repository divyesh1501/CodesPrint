import React from 'react';
import './user.css';


function UserPage({ userData, handleLogout }) {
    return (
        <div className='user-page'>
            <div className=''>
                <h1>Welcome, {userData.name}!</h1>
                <p className='email'>Email: {userData.email}</p>
                <p>Age: {userData.age}</p>
                <p>Gender: {userData.gender}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default UserPage;
