// Provided for the candidate (mostly)
// Have them add the "Detail" route
import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { List } from "./List";
import { Detail } from "./Detail";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/detail/:username" component={Detail} />
    </Switch>
  </main>
);

export default Main;
