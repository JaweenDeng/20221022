/*
 * @Author: djw
 * @Description: 
 */
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { increment, decrement, incrementAsync, fetchUserById, incrementAsync1 } from './counter1Slice'
export function Counter1() {
  const count = useAppSelector(state => state.counter1.value)
  const dispatch  = useAppDispatch()
  const [countVal, setCountVal] = useState(0) 
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="incrementAsync value"
          onClick={() => dispatch(incrementAsync(countVal))}
        >
          incrementAsync
        </button>
        <button
          aria-label="fetchUserById value"
          onClick={() => dispatch(fetchUserById(countVal))}
        >
          fetchUserById
        </button>
        <button
          aria-label="fetchUserById value"
          onClick={() => dispatch(incrementAsync1(countVal))}
        >
          incrementAsync1
        </button>
        <input onChange={(e) => {setCountVal(+e.target.value)}} />
      </div>
    </div>
  )
}