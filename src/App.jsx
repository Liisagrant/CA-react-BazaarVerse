import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import Header from "./components/Global/Header";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
      <Router>
        <Header />
        <HeroBanner />
      </Router>
    </>
  );
}

export default App;
