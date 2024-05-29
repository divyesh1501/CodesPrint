import React, { useState } from 'react'

export default function ReactForm() {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");

    const inputEvent = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const handelClick = () => {
        console.log("first")
        setFullName(name);
    }

    return (
        <>
            <div>
                <h1>Hello, {fullName}</h1>
                <input type="text" value={name} onChange={inputEvent}  placeholder='Enter Your Name' />
                <button onClick={handelClick}>Submit</button>
            </div>
        </>
    )
}
