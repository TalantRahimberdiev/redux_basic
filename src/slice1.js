
import { createSlice } from "@reduxjs/toolkit"

const slice1 = createSlice({
   name: 'firstSlice',
   initialState: {
      k: 1
   },
   reducers: {
      increment: state => {
         state.k += 1
      },
      decrement: state => {
         state.k -= 1
      },
      incrementByValue: (state, action) => {
         state.k += action.payload
      }
   }
})

export const { increment, decrement, incrementByValue } = slice1.actions
export default slice1.reducer