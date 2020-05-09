import { apiCallBegan, apiCallSuccess } from "../api";
import { getTopArtists } from "../../services/fakeSpotifyArtistsService";

const api = store => next => action => {
  if (action.type !== apiCallBegan.type) return next(action);

  // get the action and dispatch
  const { onStart, onSuccess } = action.payload;
  if (onStart) store.dispatch({ type: onStart });
  next(action);

  const response = getTopArtists();
  store.dispatch(apiCallSuccess(response.data));

  if (onSuccess) store.dispatch({ type: onSuccess, payload: response.data });
};

export default api;
