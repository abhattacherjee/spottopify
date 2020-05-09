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
      artists.list = action.payload;
      artists.loading = false;
      artists.lastFetch = Date.now();
    },
    artistsRequestFailed: (artists, action) => {
      artists.loading = false;
    },
    artistsSearched: (artists, action) => {
      artists.searchText = action.payload.searchText;
    },
  },
});

const {
  artistsRequested,
  artistsReceived,
  artistsRequestFailed,
  artistsSearched,
} = slice.actions;

export const getArtistsByName = createSelector(
  state => state.entities.artists,
  artists =>
    artists.searchText
      ? artists.list.filter(
          artist =>
            artist.name
              .toLowerCase()
              .search(artists.searchText.toLowerCase()) !== -1
        )
      : artists.list
);

export const loadArtists = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.artists;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    actions.apiCallBegan({
      url: "getTopArtists",
      method: "post",
      onStart: artistsRequested.type,
      onSuccess: artistsReceived.type,
      onError: artistsRequestFailed.type,
    })
  );
};

export const searchArtists = searchText => artistsSearched({ searchText });

export default slice.reducer;
