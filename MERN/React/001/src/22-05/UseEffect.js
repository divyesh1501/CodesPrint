import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [clicked, setClicked] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        // code to run after render or update
        console.log('we r learning React')

        return (
            () => {
                console.log("first state")
            }
        )
    }, [count])

    return (
        <>
            <button onClick={() => setClicked('Subscribe')}>Subscribe</button>
            <br /> <hr />
            <button onClick={() => setClicked('To')}>To</button>
            <br /> <hr />
            <button onClick={() => setClicked('One5')}>One5</button>
            <h1>{clicked}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <h1>{count}</h1>

        </>
    )
}

export default UseEffect
