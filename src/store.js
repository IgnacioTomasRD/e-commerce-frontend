import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './reducer/shoppingCartSlice'
import userReducer from './reducer/userSlice'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    shoppingCart:shoppingCartReducer,
    user: userReducer
  },
  middleware: [saga]
})
