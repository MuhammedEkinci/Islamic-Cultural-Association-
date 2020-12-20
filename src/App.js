import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router basename="/">
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
