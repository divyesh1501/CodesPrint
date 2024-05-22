import React from 'react'
import "./MobileList.css"

export default function MobileLIst(props) {
    const {img,title,price} = props

    return (
        <div className='main'>
            <img
                src={img}
                className="image"
                alt="i-phone"
            />
            <div className='info'>
                <h2>{title}</h2>
                <p>$ {price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
