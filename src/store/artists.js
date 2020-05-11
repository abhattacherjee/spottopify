import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import * as actions from "./api";

const slice = createSlice({
  name: "artists",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    searchText: "",
  },
  reducers: {
    artistsRequested: (artists, action) => {
      artists.loading = true;
    },
    artistsReceived: (artists, action) => {
      artists.list = action.payload.items;
      artists.loading = false;
      artists.lastFetch = Date.now();
    },
    artistsRequestFailed: (artists, action) => {
      artists.loading = false;
    },
    artistsSearched: (artists, action) => {
      artists.searchText = action.payload.searchText;
    },
    artistsCleared: (artists, action) => {
      artists.list = [];
      artists.lastFetch = "";
    },
  },
});

const {
  artistsRequested,
  artistsReceived,
  artistsRequestFailed,
  artistsSearched,
  artistsCleared,
} = slice.actions;

export const getArtistsByName = createSelector(
  state => state.entities.artists,
  artists =>
    artists.searchText
      ? artists.list.filter(
          artist =>
            artist.name
              .toLowerCase()
              .search(artists.searchText.toLowerCase()) !== -1 ||
            artist.genres.includes(artists.searchText.toLowerCase())
        )
      : artists.list
);

export const loadArtists = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.artists;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    actions.apiCallBegan({
      url: "/me/top/artists",
      method: "get",
      onStart: artistsRequested.type,
      onSuccess: artistsReceived.type,
      onError: artistsRequestFailed.type,
    })
  );
};

export const searchArtists = searchText => artistsSearched({ searchText });

export const clearArtists = () => artistsCleared();

export default slice.reducer;
