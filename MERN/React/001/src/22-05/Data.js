import React, { useState } from 'react'
import data from './data.json'

function Data() {
    const [nData, setnData] = useState(data)
    console.log(data)
    const handleClick = () => {
        setnData([]);
    }

    const handeleSingleRemove = (itemId) => {
        setnData(nData.filter(item => item.id !== itemId));
    }
    const handeleUpdate = (itemId) => {
        setnData(nData.map(items => {
            if (items.id === itemId) {
                return { name: "newName" }
            } else {
                return items;
            }
        }))
    }
    return (
        <>
            <ul>
                {
                    nData.map(items =>
                        <li key={items.id}>
                            {console.log(items.id)}
                            {items.name}

                            <br />

                            <button style={{ marginLeft: "5px", marginTop: "5px" }} onClick={() => handeleUpdate(items.id)}>Update</button>

                            <br />
                            
                            <button style={{ marginLeft: "5px", marginTop: "5px" }} onClick={() => handeleSingleRemove(items.id)}>Remove</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={handleClick}>Clear</button>
        </>
    )
}

export default Data
