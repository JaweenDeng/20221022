/*
 * @Author: djw
 * @Description: 新闻列表修改弹窗
 */
import { useState } from 'react';
import { IListData } from './postSlice';
interface IProps {
  data:IListData,
  submit:(data:IListData) => void
}
export function PostModal(props:IProps) {
  const { data, submit } = props
  const [title, setTitle] = useState(data.title || '')
  const [content, setContent] = useState(data.content || '')
  const handleTitle = (val:string) => {
    setTitle(val)
  }
  const handleContent = (val:string) => {
    setContent(val)
  }
  const handleSubmit = () => {
    submit({
      title,
      content,
      id:data.id
    })
    setTitle('')
    setContent('')
  }
  return(
    <>
      title:<input name="title" value={ title } onChange={(e) => handleTitle(e.target.value)} /><br />
      content:<input name="content" value={ content } onChange={(e) => handleContent(e.target.value)} /><br />
      <button onClick={ handleSubmit }>提交</button>
    </>
  )
}