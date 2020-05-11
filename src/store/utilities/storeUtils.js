import { clearToken } from "../token";
import { clearTracks } from "../tracks";
import { clearArtists } from "../artists";

export function clearAllEntities(dispatch) {
  dispatch(clearToken());
  dispatch(clearTracks());
  dispatch(clearArtists());
}
