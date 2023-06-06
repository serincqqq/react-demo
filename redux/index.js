import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
store.subscribe(() => {
  root.render(
    <>
      <App></App>
    </>
  );
});
root.render(
  <>
    <App></App>
  </>
);
