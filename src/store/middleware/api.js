import axios from "axios";
import { apiCallBegan, apiCallSuccess } from "../api";

const api = store => next => async action => {
  if (action.type !== apiCallBegan.type) return next(action);

  // get the action and dispatch
  const {
    onStart,
    onSuccess,
    url,
    method,
    data,
    baseUrl,
    params,
  } = action.payload;
  if (onStart) store.dispatch({ type: onStart });
  next(action);

  // const response = getTopArtists();
  const response = await axios.request({
    baseURL: baseUrl ? baseUrl : "https://api.spotify.com/v1",
    url,
    crossDomain: true,
    headers: {
      Authorization: `Bearer ${store.getState().entities.token.value}`,
    },
    params,
    method,
    data,
  });

  store.dispatch(apiCallSuccess(response.data));

  if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
};

export default api;
