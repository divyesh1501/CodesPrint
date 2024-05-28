import React, { useState } from 'react'
import datas from "../Hooks/data.json";

function UseStateExample() {

    const [nData, setnData] = useState(datas);
    // const handleClick = () => {
    //     setnData([])
    // }
    const handleUpdate = (itemId) => {
        setnData(nData.map(items => {
            if (items.id === itemId) {
                return { name: 'newName' }
            } else {
                return items;
            }
        }))
    }
    const handleSingleRemove = (itemId) => {
        setnData(nData.filter(item => item.id !== itemId))
    }
    return (
        <div>
            <ul>
                {nData.map(items =>
                    <li key={items.id}>
                        {items.name}
                        <br />
                        <button onClick={() => handleUpdate(items.id)}>Update</button>
                        <button onClick={() => handleSingleRemove(items.id)}>Remove</button>
                    </li>
                )}

            </ul>
            {/* <button onClick={handleClick}>Clear</button> */}
            <button onClick={() => setnData([])}>Clear</button>
        </div>
    )
}

export default UseStateExample
