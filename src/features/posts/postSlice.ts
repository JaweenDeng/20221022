/*
 * @Author: djw
 * @Description: postList 数据
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from '../../app/store';
export interface IPostState {
  list:Array<IListData>
}
export interface IListData {
  id:number,
  title:string,
  content:string
}
const initialState:IPostState = {
  list:[
    { id:1, title:'title1', content:'content1' },
    { id:2, title:'title2', content:'content2' },
  ]
}
export const postSlide = createSlice({
  name:'post',
  initialState,
  reducers:{
    addList(state:IPostState, action:PayloadAction<IListData>) {
      state.list.push(action.payload)
    },
    editList(state:IPostState, action:PayloadAction<{index:number, listData:IListData}>) {
      state.list.splice(action.payload.index, 1 , action.payload.listData)
    },
    deleteList(state:IPostState, action:PayloadAction<number>) {
      state.list.splice(action.payload, 1)
    }
  }
})

//导出action
export const { addList, editList, deleteList } = postSlide.actions

//编辑列表action
export const handleEditList = (listData: IListData): AppThunk => (dispatch, getState) => {
  const currentList = getState().post.list;
  const { id } = listData
  const index = currentList.findIndex(item => item.id === id)
  dispatch(editList({index, listData}))
}

export default postSlide.reducer

