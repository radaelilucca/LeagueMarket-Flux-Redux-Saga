import { Switch, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
