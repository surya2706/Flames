import { createSlice } from '@reduxjs/toolkit';

const initialState = { name1: '', name2: '' };

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateName1: (state, action) => {
      state.name1 = action.payload;
    },
    updateName2: (state, action) => {
      state.name2 = action.payload;
    },
  },
});

export const { updateName1, updateName2 } = inputSlice.actions;

export default inputSlice.reducer;
