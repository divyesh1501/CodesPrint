import React, { useEffect } from "react"
import ReactDOM from "react-dom";
import './modal.css'

function ShowModal({ closeModal, children }) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])



    return ReactDOM.createPortal(
        <>
            <div className="modal-wrapper" onClick={closeModal} ></div>
            <div className="modal-container">
                {/* <h2>STAY TUNED</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iusto, distinctio deserunt quae vitae rem quos ad dolores amet consectetur!</p>
                <button onClick={closeModal} className='modal-btn'>Accept It</button> */}
                {children}
            </div>
        </>,
        document.querySelector('.myPortalModalDiv')
    )
}

export default ShowModal