import configureStore from "../configureStore";
import * as artists from "../artists";
import { getTopArtists } from "../../services/fakeSpotifyArtistsService";

// tests
// if artists exist in the cache
//    load the store from the cache
// if artists do not exist in the cache
//    call api and load the store if auth token is valid
//    clear store if auth token is not valid

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
