import logo from "./logo.svg";
import "./App.css";
import Navi from "./layouts/navi/Navi";
import HomePage from "./layouts/homepage/HomePage";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Login from "./layouts/login/Login";
import Card from "./layouts/card/Card";
import Dashboard from "./layouts/dashboard/Dashboard";
import { useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navi></Navi>

      <Dashboard></Dashboard>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
