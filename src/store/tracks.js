import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import * as actions from "./api";

const slice = createSlice({
  name: "tracks",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    searchText: "",
  },
  reducers: {
    tracksRequested: (tracks, action) => {
      tracks.loading = true;
    },
    tracksReceived: (tracks, action) => {
      tracks.loading = false;
      tracks.list = action.payload.items;
      tracks.lastFetch = Date.now();
    },
    tracksRequestFailed: (tracks, action) => {},
    tracksSearched: (tracks, action) => {
      tracks.searchText = action.payload.searchText;
    },
    tracksCleared: (tracks, action) => {
      tracks.list = [];
      tracks.lastFetch = "";
    },
  },
});

const {
  tracksRequested,
  tracksReceived,
  tracksRequestFailed,
  tracksSearched,
  tracksCleared,
} = slice.actions;

export const getTracksByName = createSelector(
  state => state.entities.tracks,
  tracks =>
    tracks.searchText
      ? tracks.list.filter(
          track =>
            track.name.toLowerCase().search(tracks.searchText.toLowerCase()) !==
              -1 ||
            track.album.name
              .toLowerCase()
              .search(tracks.searchText.toLowerCase()) !== -1
        )
      : tracks.list
);

export const loadTracks = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.tracks;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  return dispatch(
    actions.apiCallBegan({
      url: "/me/top/tracks",
      method: "get",
      onStart: tracksRequested.type,
      onSuccess: tracksReceived.type,
      onError: tracksRequestFailed.type,
    })
  );
};

export const searchTracks = searchText => tracksSearched({ searchText });

export const clearTracks = () => tracksCleared();

export default slice.reducer;
