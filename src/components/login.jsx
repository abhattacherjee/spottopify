import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveToken, getTokenValue } from "../store/token";

const Login = props => {
  const authEndpoint = "https://accounts.spotify.com/authorize";
  const clientId = "2659526ce38a4cc2be038bc81af08052";
  const redirectUri = "http://localhost:3000/login";
  const scopes = ["user-top-read"];
  const dispatch = useDispatch();

  const token = useSelector(getTokenValue);
  useEffect(() => {
    if (token) return;
    let { access_token: _token, _expiresIn } = hash;
    if (_token) dispatch(saveToken(_token, _expiresIn));
  });

  const hash = props.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  return (
    <React.Fragment>
      {!token && (
        <div className="text-center">
          <a
            className="btn btn-success"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}>
            Login to Spotify
          </a>
        </div>
      )}
      {token && <Redirect to="/" />}
    </React.Fragment>
  );
};

export default Login;
