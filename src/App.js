import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import "./App.css";
import configureStore from "./store/configureStore";
import Artists from "./components/artists";
import ProtectedRoute from "./components/common/protectedRoute";
import Login from "./components/login";
import Logout from "./components/logout";
import Navbar from "./components/common/navbar";
import Tracks from "./components/tracks";

const store = configureStore();
// noinspection SpellCheckingInspection
const persistor = persistStore(store);
const items = [
  { path: "/artists", label: "Top Artists", show: "authenticated" },
  { path: "/tracks", label: "Top Tracks", show: "authenticated" },
  { path: "/logout", label: "Logout", show: "authenticated" },
];

const header = { path: "/", label: "Spottopify" };
function App() {
  return (
    <main className="container">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar items={items} header={header} />
          <Switch>
            <ProtectedRoute path="/artists" component={Artists} />
            <ProtectedRoute path="/tracks" component={Tracks} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Redirect from="/" to="/artists" exact />
          </Switch>
        </PersistGate>
      </Provider>
    </main>
  );
}

export default App;
