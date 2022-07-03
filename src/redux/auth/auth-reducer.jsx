import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addUser, loginUser } from "./auth-operations";

const users = createReducer([], {
  [addUser.fulfilled]: (state, { payload }) => {
    if (!payload) {
      return state;
    };
      return [...state, payload];
  },
    [loginUser.fulfilled]: (state, { payload }) => {
      return [...state, payload];
  },
});

export default combineReducers({
  users,
});