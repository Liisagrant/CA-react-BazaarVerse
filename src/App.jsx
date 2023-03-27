import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import Header from "./components/Global/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
