import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./index.css";
import Header from "./components/Global/Header";
import HeroBanner from "./components/HeroBanner";
import AllProducts from "./components/pages/AllProducts";

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen">
        <Header />
        <HeroBanner />
        <AllProducts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
