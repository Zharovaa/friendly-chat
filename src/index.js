import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <HashRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </HashRouter>
  );
};

rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
