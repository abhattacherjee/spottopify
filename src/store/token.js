import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";

const slice = createSlice({
  name: "authorization",
  initialState: {
    value: "",
    expiresIn: "",
  },
  reducers: {
    authorizationReceived: (token, action) => {
      token.value = action.payload.token;
      token.expiresIn = moment().add(action.payload.expiresIn, "seconds");
    },
    authorizationFailed: (token, action) => {},
    authorizationCleared: (token, action) => {
      token.value = "";
    },
  },
});

const { authorizationReceived, authorizationCleared } = slice.actions;

export default slice.reducer;

export const saveToken = (token, expiresIn) => (dispatch, getState) => {
  return dispatch(authorizationReceived({ token, expiresIn }));
};

export const clearToken = () => {
  return authorizationCleared({});
};

export const getToken = createSelector(
  state => state.entities.token,
  token => (moment().isAfter(token.expiresIn, "seconds") ? null : token.value)
);
