import React,{ createContext, useState}  from 'react'
import Counter from './Counter'

function CounterContext() {
    // const CounterContext = React.createContext();
    const CounterContext = createContext();
    const [count , setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    }
  return (
    <CounterContext.Provider value={{count , handleClick}}>
      <Counter />
    </CounterContext.Provider>
  )
}

export default CounterContext;
