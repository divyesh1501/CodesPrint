import React, { useEffect } from "react"
import ReactDOM from "react-dom";
import './modal.css'

function ShowModal({ closeModal, children, handleCloseButton }) {

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
                {children}
                {handleCloseButton}
            </div>
        </>,
        document.querySelector('.myPortalModalDiv')
    )
}

export default ShowModal