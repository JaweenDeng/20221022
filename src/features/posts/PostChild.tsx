/*
 * @Author: djw
 * @Description: 匹配二级路由
 */
import { useState, useEffect, useRef } from 'react'
import { useParams, useSearchParams, useNavigate  } from "react-router-dom"
import { LoginApi } from '../../api/test'
import { useSize } from '../../app/useSize'
export const PostChild = () => {
  let params = useParams()
  let [searchParams, setSearchParams] = useSearchParams()
  let navigate = useNavigate()
  console.log(searchParams.get('filter'), params)
  const getData = async () => {
    const data = await LoginApi({})
    console.log(data, 'data')
  }
  const size = useSize()
  console.log(size)
  let [number, setNumber] = useState(2)
  useEffect(() =>{
    getData()
  }, [number])
  console.log(number)
  const refDiv = useRef(null)
  const getLevelRef = () => {
    console.log(refDiv)
  }
  return(
    <>
      <div onClick={ () => setSearchParams({filter:'2342'})}>
        child { params.id } 
      </div>
      <div onClick={ () => navigate('/Counter1')}>
        点击跳转路由
      </div>
      <div ref={ refDiv } onClick={ () => getLevelRef() }>
        测试
      </div>
    </>
  )
}