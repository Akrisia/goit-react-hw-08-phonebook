import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, updateFilter } from './contacts-actions';

const items = createReducer([], {
    [addContact]: (state, { payload }) => {
    if (state.map(item => item.name.toLowerCase()).includes(payload.name.toLowerCase())) {
      return alert(`${payload.name} is already in contacts`)
        };
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) => state.filter(({id}) => id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});