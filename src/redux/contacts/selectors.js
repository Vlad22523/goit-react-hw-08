import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

export const selectFilteredCont = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    return contacts.filter((cont) =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
