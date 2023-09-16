import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moveApi from '../../common/apis/movieApi'
import { APIKEY } from './../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (movieSearch) => {
  const movieText = movieSearch
  const response = await moveApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`);
  return response.data.Search;
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (movieSearch) => {
    const seriesText = movieSearch
    const response = await moveApi.get(`?apikey=${APIKEY}&s=${seriesText}&type=series`);
    return response.data.Search;
  });
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', 
  async (id) => {
    const response = await moveApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
  });

const initialState = {
  movies: {},
  shows : {},
  selectMovieOrShow : {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        console.log("fetched successfully");
        state.movies = action.payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, action) => {
        console.log("fetched successfully");
        state.shows = action.payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
        console.log("fetched details successfully");
        state.selectMovieOrShow = action.payload;
      })
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
