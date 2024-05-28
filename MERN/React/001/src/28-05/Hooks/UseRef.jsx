import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
  const [userInput, setUserInput] = useState('');
  // const [render, setRender] = useState(0);

  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
    // setRender(render + 1)
  })


  return (
    <div>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <p>The Component rendered {render.current} times</p>
    </div>
  )
}

export default UseRef
