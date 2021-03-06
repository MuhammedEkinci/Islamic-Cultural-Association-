import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
