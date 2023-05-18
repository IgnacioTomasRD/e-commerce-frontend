import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount:0,
    products: []
}


export const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setProducts: (state,action) => {
        state.products = [...state.products,action.payload];
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