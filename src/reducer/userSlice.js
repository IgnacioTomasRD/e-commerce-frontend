import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: ""
}


export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state,action) => {
        state.items = [...state.items,{post: action.payload.post,units: action.payload.units}];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = userSlice.actions

export default userSlice.reducer