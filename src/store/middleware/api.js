import axios from "axios";
import { apiCallBegan, apiCallSuccess, handleAPIError } from "../api";

const api = store => next => async action => {
  if (action.type !== apiCallBegan.type) return next(action);

  // get the action and dispatch
  const {
    onStart,
    onSuccess,
    url,
    method,
    data,
    params,
    onError,
  } = action.payload;
  if (onStart) store.dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL: "https://api.spotify.com/v1",
      url,
      headers: {
        Authorization: `Bearer ${store.getState().entities.token.value}`,
      },
      params,
      method,
      data,
    });

    store.dispatch(apiCallSuccess(response.data));
    if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    handleAPIError(error.message)(store.dispatch, store.getState);
    // store.dispatch(apiCallFailed(error.message));
    if (onError) store.dispatch({ type: onError, payload: error.message });
  }
};

export default api;
