import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    data: null,
    error: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState, 
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataWithAxios.pending, (state) => {
                state.isLoading = true
                state.error = null
              })
              .addCase(fetchDataWithAxios.fulfilled, (state, action) => {
                if(action.payload.Response === 'False'){
                  state.error = action.payload.Error
                }
                  state.data = action.payload

                state.isLoading = false
              })
          },
        })
        
        // Async action creator using axios
        export const fetchDataWithAxios = createAsyncThunk(
          'modal/fetchDataWithAxios',
          async (movieName, { rejectWithValue }) => {
            try {
              const response = await axios.get(`http://www.omdbapi.com/?apikey=7949dd65&t=${movieName}`)
              return response.data
            } catch (error) {
              return rejectWithValue(error.message)
            }
          }
        )

export default movieSlice.reducer