import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    setProducts: (state,action) => {
        state = [...action.payload];
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = postsSlice.actions

export default postsSlice.reducer