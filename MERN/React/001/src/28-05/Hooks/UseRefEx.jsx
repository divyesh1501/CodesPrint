import React, { useEffect, useRef } from 'react'

function UseRefEx() {

    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.focus();
    }, [])

    const handleFocus = () => {
        inputEl.current.style.backgroundColor = 'aqua'

    }
    const handleBlur = () => {
        inputEl.current.style.backgroundColor = ''
    }
    return (
        <div>
            <input ref={inputEl} type='text' onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    )
}

export default UseRefEx
