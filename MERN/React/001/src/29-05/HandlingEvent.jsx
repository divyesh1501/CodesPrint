import React, { useState } from 'react'

export default function HandlingEvent() {
    const purple = '#8e44ad'
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('click me');

    const bgChange = () => {
        console.log("first")
        let newBg = '#34495e';
        setBg(newBg)
        setName("Ouch !! ")
    }
    const bgBack = () => {
        console.log("first")
        setBg(purple);
        setName('click.........')
    }
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            </div>
        </>
    )
}
