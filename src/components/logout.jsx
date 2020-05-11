import React from "react";
import { getTokenValue } from "../store/token";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { clearAllEntities } from "../store/utilities/storeUtils";

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector(getTokenValue);
  if (token)
    return (
      <div className="text-center">
        <button
          className="btn btn-success"
          onClick={() => {
            clearAllEntities(dispatch);
            window.location = "/";
          }}>
          Logout
        </button>
      </div>
    );
  return <Redirect to="/" />;
};

export default Logout;
