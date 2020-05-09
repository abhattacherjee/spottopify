import configureStore from "../configureStore";
import * as artists from "../artists";
import { getTopArtists } from "../../services/fakeSpotifyArtistsService";

describe("artistsSlice", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });
  const artistsSlice = () => store.getState().entities.artists;
  it("should load artists from the cache", () => {});
  it("should load artists from the service into the store", () => {
    store.dispatch(artists.loadArtists());
    expect(artistsSlice().list).toMatchObject(getTopArtists().data);
  });
  it("should select artists from the store based on artist name", () => {
    store.dispatch(artists.loadArtists());
    store.dispatch(artists.searchArtists("Coldpl"));
    expect(artists.getArtistsByName(store.getState())).toHaveLength(1);
  });
});
