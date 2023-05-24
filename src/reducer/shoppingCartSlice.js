import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
  isOpen: false,
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialState,
  reducers: {
    addPost: (state,action) => {
        state.items = [...state.items,{post: action.payload.post,units: action.payload.units}];
    },
    setOpen(state,action){
      state.isOpen = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost,setOpen}  = shoppingCartSlice.actions

export default shoppingCartSlice.reducer