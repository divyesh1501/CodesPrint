import React from 'react'
import useFetch from './useFetch';

function Fetch() {
    const [users] = useFetch();
    console.log("🚀 ~ Fetch ~ users:", users)



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
