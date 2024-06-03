import React, { createContext } from 'react'
import ContextA from './ContextA'


const FirstName = createContext();
const LastName = createContext();

function ContextAPI() {
    return (
        <div>
            <FirstName.Provider value={"Divyesh"}>
                <LastName.Provider value={"Patel"}>
                    <ContextA />
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    )
}

export default ContextAPI;
export { FirstName, LastName };
