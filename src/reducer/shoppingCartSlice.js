import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[]
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    addPost: (state,action) => {
        state.items = [...state.items,{post: action.payload.post,units: action.payload.units}];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer