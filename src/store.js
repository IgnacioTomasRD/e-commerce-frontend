import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducer/postsSlice'
import shoppingCartReducer from './reducer/shoppingCartSlice'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    shoppingCart:shoppingCartReducer
  },
  middleware: [saga]
})
