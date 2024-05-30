import React, { useContext } from 'react'
import ContextC from './ContextC'
import { FirstName, LastName } from './ContextAPI'


function ContextB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <div>
            <h1>My name is {fname} {lname}</h1>
            {/* <ContextC /> */}
        </div>
    )
}

export default ContextB


