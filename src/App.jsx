import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/HeroBanner";
import AllProducts from "./components/pages/AllProducts";

function App() {
  return (
    <Router>
        <Layout>
          <HeroBanner />
          <AllProducts />
        </Layout>
    </Router>
  );
}

export default App;
