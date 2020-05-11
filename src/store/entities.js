import artistsReducer from "./artists";
import tracksReducer from "./tracks";
import authorizationReducer from "./token";
import { combineReducers } from "redux";

export default combineReducers({
  artists: artistsReducer,
  tracks: tracksReducer,
  token: authorizationReducer,
});
