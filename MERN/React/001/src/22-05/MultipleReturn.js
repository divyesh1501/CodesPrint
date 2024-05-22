import React, { useEffect, useState } from 'react'

function MultipleReturn() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchusers() {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            }
            catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchusers();
    }, [])
    if (isLoading) {
        return <p>Loading.....</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>
                        {user.login}
                    </li>
                })}
            </ul>
        </>
    )
}

export default MultipleReturn
