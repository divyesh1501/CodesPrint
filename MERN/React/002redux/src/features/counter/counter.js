import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice';

export default function Counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button aria-label='Increment value'
                    onClick={() => dispatch(increment())}>Increment</button>
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>{count}</span>
                <button aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}>Decrement</button>
                <br />
                <button aria-label='Increment value by 100'
                    onClick={() => dispatch(incrementByAmount(100))}>Increment value by 100</button>
                <br />
                <button aria-label='Decrement value by 50'
                    onClick={() => dispatch(decrementByAmount(50))}>Decrement value by 50</button>
            </div>
        </div>
    )
}
