import React, { useRef } from 'react'
import Child from './child';

function Parent() {
  const childRef = useRef(null);

  const handleOpenModal = (val) => {
    childRef.current.openModal(val);
  }
  return (
    <div>
      <p>This is Parent.!</p>
      <Child ref={childRef} />
      <button onClick={() => handleOpenModal(true)}>Open Modal</button>
    </div>
  )
}

export default Parent
