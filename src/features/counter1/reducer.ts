/*
 * @Author: djw
 * @Description: 测试usereducer
 */

export const reducer = (state:any, action:any) => {
  console.log(action, state)
  switch(action.name) {
    case 'save':console.log(111); return { ...state, list:action.payload };
    default: return state
  }
}
