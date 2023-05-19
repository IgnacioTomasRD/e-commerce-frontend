import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount:0,
    posts: []
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    setPosts: (state,action) => {
        state.posts = [...state.posts,action.payload];
        state.totalCount++;
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
export const { increment, decrement, incrementByAmount } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer