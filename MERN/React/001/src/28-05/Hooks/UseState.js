import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);
    
    console.log("🚀 ~ UseState ~ setCount:", setCount)
    console.log("🚀 ~ UseState ~ count:", count)

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default UseState
