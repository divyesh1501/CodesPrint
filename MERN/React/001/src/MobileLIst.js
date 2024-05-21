import React from 'react'
import "./MobileList.css"

export default function MobileLIst() {

    const img = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1"

    const title = "Iphone 15 Pro"
    const price = "28000"
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
