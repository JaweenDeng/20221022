/*
 * @Author: djw
 * @Description: 匹配二级路由
 */
import { useParams, useSearchParams, useNavigate  } from "react-router-dom"
export const PostChild = () => {
  let params = useParams()
  let [searchParams, setSearchParams] = useSearchParams()
  let navigate = useNavigate()
  console.log(searchParams.get('id'), setSearchParams)
  return(
    <>
      <div onClick={ () => setSearchParams({filter:'2342'})}>
        child { params.id } 
      </div>
      <div onClick={ () => navigate('/Counter1')}>
        点击跳转路由
      </div>
    </>
  )
}