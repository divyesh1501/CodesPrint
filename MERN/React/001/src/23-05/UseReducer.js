import React, { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === 'incr') {
        return { count: state.count + 1 }
    } else if (action.type === 'decr') {
        return { count: state.count - 1 }
    } else {
        throw new Error('Unsupported action type')
    }
}
export default function UseReducer() {

    // const [count, setCount] = useState(0);
    // console.log(count);
    // console.log(setCount);

    const [state, dispatech] = useReducer(reducer,
        { count: 0 });

    // reducer function(which is pure function)
    // it has state and action

    const handleClickforInc = () => {
        dispatech({ type: 'incr' });
    }
    const handleClickforDec = () => {
        dispatech({ type: 'decr' });
        ;
    }
    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={handleClickforInc}>Inc</button>
            <button onClick={handleClickforDec}>Dec</button>
        </>
    )
}
