import React from 'react'
import MobileLIst from './MobileLIst'
import data from './data.json'

export default function Mobile() {
    return (
        <div>
            {data.map((ele) => {
                return <MobileLIst
                    img={ele.img}
                    title={ele.title}
                    price={ele.price} />
            })}
        </div>
    )
}
