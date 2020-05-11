import { createAction } from "@reduxjs/toolkit";
import { clearAllEntities } from "./utilities/storeUtils";

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");

export const handleAPIError = errorMessage => (dispatch, getState) => {
  if (errorMessage.toLowerCase().search("status code 401") !== -1) {
    // clear the store as authentication was unsuccessful
    clearAllEntities(dispatch);
  }
};
