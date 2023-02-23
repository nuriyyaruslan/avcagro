import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import NewsService from "../services/NewsServices";

const initialState = {
  news: [],
  isLoading: false,
  errorMessage: ''
};

export const retrieveNews = createAsyncThunk(
  "news/retrieve",
  async () => {
    const res = await NewsService.getNews();
    return res.data
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [retrieveNews.fulfilled]: (state) => {
      state.isLoading = true
    },
    [retrieveNews.fulfilled]: (state, action) => {
      state.news = action.payload
    },
    [retrieveNews.rejected]: (state) => {
      state.isLoading = false
    }
  },
});

const { reducer } = newsSlice;
export default reducer;
