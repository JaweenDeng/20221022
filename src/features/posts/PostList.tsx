import { Button } from 'antd';
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IListData, addList, handleEditList, deleteList } from './postSlice';
import { PostModal  } from "./PostModal";
export function PostList () {
  const List:Array<IListData> = useAppSelector(state => state.post.list)
  const dispatch = useAppDispatch()
  const [ isShowForm, setIsShowForm ] = useState(false)
  let [ curItem, setCurItem ] = useState({} as IListData)
  const handleList = (listData:IListData | {}) => {
    setIsShowForm(true)
    if(Object.keys(listData).length) {
      setCurItem(listData as IListData)
    }
  }
  const handleSubmit = (listData:IListData) => {
    if (listData.id) {
      dispatch(handleEditList(listData))
    } else {
      dispatch(addList({...listData, id:List.length + 1}))
    }
    setIsShowForm(false)
  }
  useEffect(() => {
    console.log('postList')
  }, [])
  return(
    <>
      <Button type="primary" onClick={ handleList }>添加</Button>
      <ul>
        {
          List.map((item:IListData, index:number) => (
            <li key={item.id}>
              <h3>{ item.title }</h3>
              <p>{ item.content }</p>
              <i onClick={ () => handleList(item) }>修改</i>
              <i onClick={ () => dispatch(deleteList(index)) }>删除</i>
            </li>
          ))
        }
      </ul>
      {
        isShowForm && <PostModal data={curItem} submit={ handleSubmit }><div>slot</div></PostModal>
      }
      <Outlet />
    </>
  )
}