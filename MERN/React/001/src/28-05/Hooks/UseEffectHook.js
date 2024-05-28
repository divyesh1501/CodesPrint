import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [clicked, setClicked] = useState();
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     //code to run after update or render
    // }, [dependency])

    useEffect(() => {
        console.log('we r use useEffect') 
    }, [clicked])

    return (
        <div>
            <button onClick={() => setClicked('Subscribe')}>Subscribe</button>
            <br />
            <hr />
            <button onClick={() => setClicked('To')}>To</button>
            <br />
            <hr />
            <button onClick={() => setClicked('One5')}>One5</button>

            <h1>{clicked}</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>INC</button>
        </div>
    )
}

export default UseEffectHook
