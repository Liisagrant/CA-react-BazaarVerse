import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
