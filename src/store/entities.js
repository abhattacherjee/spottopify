import artistsReducer from "./artists";
import { combineReducers } from "redux";

export default combineReducers({
  artists: artistsReducer,
});
