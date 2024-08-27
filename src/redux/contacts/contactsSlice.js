import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAddThunk,
  fetchContactsThunk,
  fetchDeleteThunk,
} from "../contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchDeleteThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(fetchAddThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          fetchAddThunk.pending,
          fetchDeleteThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          fetchAddThunk.rejected,
          fetchDeleteThunk.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const contactReducer = slice.reducer;
