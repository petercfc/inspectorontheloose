//other
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

//components
import App from "./App";
import Firebase, { FirebaseContext } from "./Firebase";

//main render
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </ThemeProvider>,
  document.querySelector("#root")
);

//register service worker
serviceWorker.unregister();
