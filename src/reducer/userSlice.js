import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: "",
  firstName: "",
  lastName: "",
  isLogin: false,
}


export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLogin: (state,action) => {
        state.userId= action.payload.userId;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isLogin = true;
    },
    setLogout(state,action){
      return initialState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = userSlice.actions

export default userSlice.reducer