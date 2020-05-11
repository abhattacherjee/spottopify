import React from "react";
import { clearToken, getToken } from "../store/token";
import { useDispatch, useSelector } from "react-redux";
import { clearArtists } from "../store/artists";
import { Redirect } from "react-router-dom";
import { clearTracks } from "../store/tracks";

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  if (token)
    return (
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(clearToken());
            dispatch(clearArtists());
            dispatch(clearTracks());
            window.location = "/";
          }}>
          Logout
        </button>
      </div>
    );
  return <Redirect to="/" />;
};

export default Logout;
