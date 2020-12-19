import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import WebNavbar from "./components/Navbar";

import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router basename="/">
        <WebNavbar />
        <Route exact path={["/", "/home"]}>
          <HomePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
