import "normalize.css";
import "sal.js/dist/sal.css";

import App from "App";
import GlobalStyles from "styles";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);