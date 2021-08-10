import logo from "./logo.svg";
import "./App.css";
import Navi from "./layouts/navi/Navi";
import HomePage from "./layouts/homepage/HomePage";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Login from "./layouts/login/Login";
function App() {
  return (
    <div className="App">
      <Navi></Navi>

      <HomePage></HomePage>
      <Login></Login>
    </div>
  );
}

export default App;
