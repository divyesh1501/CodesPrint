import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers] = useState([]);
    console.log("🚀 ~ Fetch ~ users:", users)

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <h1>User List</h1>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>
                            <a href={user.html_url}>
                                {user.login}
                            </a>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Fetch
