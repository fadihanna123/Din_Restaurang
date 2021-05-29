import AOS from "aos";
import App from "App";
import GlobalStyles from "global";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
