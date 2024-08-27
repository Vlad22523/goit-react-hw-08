import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
