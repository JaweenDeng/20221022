/*
 * @Author: djw
 * @Description: 
 */
import { useState, createContext, useReducer } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { increment, decrement, incrementAsync, fetchUserById, incrementAsync1 } from './counter1Slice'
import { Child1 } from './Child1'
import { reducer } from './reducer'

export const Context = createContext({state:{}});
export function Counter1() {
  const count = useAppSelector(state => state.counter1.value)
  const dispatch  = useAppDispatch()
  const [countVal, setCountVal] = useState(0) 
  const [state, dispatch1] = useReducer(reducer, {
    list:'111'
  })
 
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
      <div onClick= {() =>  dispatch1({name:'save', payload:'222'}) }>
        test
      </div>
      { state.list }
      <Context.Provider value={{ state}} >
        <Child1 />
      </Context.Provider>
    </div>
  )
}