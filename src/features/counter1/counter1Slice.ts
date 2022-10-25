/*
 * @Author: djw
 * @Description: 
 */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../../app/store'
import { fetchCount } from '../counter/counterAPI'
export interface ICounterState {
  value:number;
  status:'idle' | 'loading' | 'failed';
}
const initialState: ICounterState = {
  value: 0,
  status: 'idle',
};

export const counter1Slide = createSlice({
  name:'counter1',
  initialState,
  reducers:{
    increment:(state:ICounterState) => {
      state.value += 1
    },
    decrement:(state:ICounterState) => {
      state.value -= 1
    },
    incrementByAmount:(state:ICounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync1.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync1.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync1.rejected, (state) => {
        state.status = 'failed';
      });
  },
})
//异步action
export const incrementAsync = (amount:number) => (dispatch:AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 3000)
}

//异步createAsyncThunk函数
export const incrementAsync1 = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

//ajax action
export const fetchUserById = (amount:number) => {
  return async (dispatch:AppDispatch) => {
    const data = await fetchCount(amount)
    dispatch(incrementByAmount(data.data))
  }
}

//导出action
export const {increment, decrement, incrementByAmount } = counter1Slide.actions


export default counter1Slide.reducer
