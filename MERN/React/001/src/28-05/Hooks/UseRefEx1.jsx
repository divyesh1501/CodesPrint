import React, { useEffect, useRef } from 'react'

function UseRefEx1() {

    const count = useRef(0);

    useEffect(() => {
        console.log("The Component have been renderd");
    })

    const handle = () => {
        count.current = (count.current + 1);
        console.log(`Clicked ${count.current} times`)
    }

    return (
        <div>
            {/* <p>{count}</p> */}
            <button onClick={handle}>Click Me</button>
        </div>
    )
}

export default UseRefEx1
