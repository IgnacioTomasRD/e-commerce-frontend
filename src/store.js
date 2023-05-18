import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducer/productSlice'
import shoppingCartReducer from './reducer/shoppingCartSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    shoppingCart:shoppingCartReducer
  },
})
