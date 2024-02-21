import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [],
  isLoading: true,
  error: null,
};

const getLetterFromServer = async () => {
  // axios로 부터 받은 데이터는  객체 , 비구조화 문법으로  뽑기
  const { data } = await axios.get("http://localhost:5000/letters");
  console.log(data);
  return data;
};

//  __getZanNaBiLetter
export const __getZanNaBiLetter = createAsyncThunk(
  "getZanNaBiLetter",
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
  "addZanNaBiLetter",
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
  "updateZanNaBiLetter",
  async ({ id, editedContent }, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:5000/letters/${id}`, {
        content: editedContent,
      });
      const letters = await getLetterFromServer();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteZanNaBiLetter = createAsyncThunk(
  "deleteZanNaBiLetter",
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
  extraReducers: (builder) => {
    // __addZanNaBiLetter
    builder
      .addCase(__addZanNaBiLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__addZanNaBiLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.error = null;
      })
      .addCase(__addZanNaBiLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // __getZanNaBiLetter
      .addCase(__getZanNaBiLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getZanNaBiLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.error = null;
      })
      .addCase(__getZanNaBiLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // __deleteZanNaBiLetter
      .addCase(__deleteZanNaBiLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__deleteZanNaBiLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.error = null;
      })
      .addCase(__deleteZanNaBiLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // __UpdateZanNaBiLetter
      .addCase(__updateZanNaBiLetter.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__updateZanNaBiLetter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.letters = action.payload;
        state.error = null;
      })
      .addCase(__updateZanNaBiLetter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ZaNaBiSlice.reducer;
