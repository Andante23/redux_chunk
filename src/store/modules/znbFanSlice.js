import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [],
  isLoading: true,
  error: null,
};

const getLetterFromServer = async () => {
  const { data } = await axios.get("http://localhost:5000/letters");
  console.log(data);
  return data;
};

//  __getZanNaBiLetter
export const __getZanNaBiLetter = createAsyncThunk(
  "getLetter",
  async (payload, thunkAPI) => {
    try {
      const letters = await getLetterFromServer();

      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// __addZanNaBiLetter
export const __addZanNaBiLetter = createAsyncThunk(
  "addLetter",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:5000/letters", payload);
      const znbFanLetter = await getLetterFromServer();
      return znbFanLetter;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// updateZanNaBiLetter
export const __updateZanNaBiLetter = createAsyncThunk(
  "updateLetter",
  async ({ id, editingText }, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:5000/letters/${id}`, {
        content: editingText,
      });
      const letters = await getLetterFromServer();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteZanNaBiLetter = createAsyncThunk(
  "deleteLetter",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:5000/letters/${id}`);
      const letters = await getLetterFromServer();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const ZaNaBiSlice = createSlice({
  name: "zanabiLetter",
  initialState,
  reducers: {},
  extraReducers: {
    // addZanNaBiLetter

    [__addZanNaBiLetter.pending]: (state, action) => {
      state.isLoading = true;
    },

    [__addZanNaBiLetter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.letters = action.payload;
      state.error = null;
    },

    [__addZanNaBiLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // getZanNaBiLetter
    [__getZanNaBiLetter.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getZanNaBiLetter.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.letters = action.payload;
      state.error = null;
    },
    [__getZanNaBiLetter.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ZaNaBiSlice.reducer;
