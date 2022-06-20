import "normalize.css";
import "sal.js/dist/sal.css";

import App from "containers/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "styles";

if (process.env.NODE_ENV === "development") {
    console.log("It's looks like that we are in a development mode!");
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
