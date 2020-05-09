import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Artists from "./components/artists";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <main className="container">
      <Provider store={store}>
        <Artists />
      </Provider>
    </main>
  );
}

export default App;
