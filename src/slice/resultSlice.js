import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { validate, getResult, changeToLowerCase } from '../helper';

const initialState = {
  letter: '',
  message: '',
  hasError: false,
  errorMessage: '',
  inputError: {},
};

export const fetchResult = createAsyncThunk(
  '/fetchResult',
  async ({name1, name2}, thunkApi) => {
    const flamespair = {
      name_1: changeToLowerCase(name1),
      name_2: changeToLowerCase(name2)
    };
    const res = await fetch('/getResult', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(flamespair),
    }).then((data) => data.json())
      .then((json) => ({ name1, name2, ...json}))
    return res;
  }
);

export const resultSlice = createSlice({
  name: 'inputValidate',
  initialState,
  reducers: {
    validateInputs: (state, { payload }) => {
      const { name1, name2 } = payload;
      const inputError = validate(name1, name2);
      state.inputError = inputError;
    },
    sameNamesError: (state, action) => {
      state.hasError = true;
      state.errorMessage = 'Both names are same'
    },
  },
  extraReducers: {
    [fetchResult.pending]: (state) => {
      state.fetchingResult = true;
    },
    [fetchResult.fulfilled]: (state, { payload }) => {
      state.fetchingResult = false;
      state.letter = payload.letter;
      state.message = getResult(payload.name1, payload.name2, payload.letter);
    },
    [fetchResult.rejected]: (state) => {
      state.fetchingResult = false;
    },
  },
});

export const { sameNamesError, validateInputs } = resultSlice.actions;

export default resultSlice.reducer;
