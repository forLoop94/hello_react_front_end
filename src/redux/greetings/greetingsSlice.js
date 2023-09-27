import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',

  async (_, thunkAPI) => {
    const url = 'http://localhost:3000/api/v1/greetings';
    try {
      const resp = await fetch(url);
      return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },

);

const initialState = {
  greeting: '',
  isLoading: false,

};

const GreetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(FetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload.greeting;
        state.greeting = data;
      })
      .addCase(FetchGreeting.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default GreetingSlice.reducer;
