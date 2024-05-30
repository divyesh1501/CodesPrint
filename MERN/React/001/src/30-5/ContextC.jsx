import React from 'react'
import { FirstName, LastName } from './ContextAPI'

function ContextC() {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return (<LastName.Consumer>
                        {(lname) => {
                            return <h1>My name is {fname} {lname}</h1>
                        }}
                    </LastName.Consumer>)
                }}
            </FirstName.Consumer>
        </div>
    )
}
export default ContextC


