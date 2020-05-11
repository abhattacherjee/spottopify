import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokenValue } from "../../store/token";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  // const token = checkIfSessionExpired(useSelector(getToken), useDispatch());
  const token = useSelector(getTokenValue);
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
