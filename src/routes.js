import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageNotFound from "./pages/PageNotFound";
import PageStats from "./pages/PageStats";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/stats" component={PageStats} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
