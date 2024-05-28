import React, { useEffect, useState } from 'react'

function useFetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error))
    }, [])

    return [users];
}

export default useFetch
