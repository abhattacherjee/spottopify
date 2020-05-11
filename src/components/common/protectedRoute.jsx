import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../store/token";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const token = useSelector(getToken);
  return (
    <Route
      {...rest}
      render={props => {
        if (!token)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
