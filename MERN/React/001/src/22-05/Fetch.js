import React, { useEffect, useState } from 'react';

function Fetch() {
    const [users, setUsers] = useState([]);
    console.log("🚀 ~ Fetch ~ users:", users);

    useEffect(() => {
        fetch('http://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                console.log("🚀 ~ useEffect ~ data:", data);
                return setUsers(data.users); // Adjusted to access the array of users
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <>
            <h1>User List</h1>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            {user.firstName}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Fetch;
