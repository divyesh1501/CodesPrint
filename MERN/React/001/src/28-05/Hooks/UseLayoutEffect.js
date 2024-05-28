import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {

    useEffect(() => {
        console.log("useeffcet")
    }, [])
    useLayoutEffect(() => {
        console.log("useLayoutEffcet")
    }, [])

    return (

        <div>

        </div>
    )
}

export default UseLayoutEffect
