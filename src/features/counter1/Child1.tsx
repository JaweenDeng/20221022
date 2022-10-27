/*
 * @Author: djw
 * @Description: 测试useContext
 */
import { useContext } from 'react'
import { Context } from './Counter1'
export const Child1 = () => {
  const ctx = useContext(Context)
  return(
    <>
      <div onClick={ () => console.log(ctx.state)}>useContext</div>
    </>
  )
}
