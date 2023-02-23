import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slices/newsSlice';

const reducer = {
  news: newsReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;