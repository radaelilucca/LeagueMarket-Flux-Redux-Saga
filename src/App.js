import React from "react";
import "./config/ReactotronConfig";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import GlobalStyle from "./styles/global";
import store from "./store";

import history from "./services/history";

import Header from "./components/Header";

import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
