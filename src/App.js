import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="nav">
          <a href="/favorites">Favorites</a>
        </div>
        <a className="fav" href={"/"}>
          <img
            className="logo"
            src="https://freepikpsd.com/file/2019/10/pokemon-logo-text-png-7-Transparent-Images.png"
            alt="logo pokemon"
          />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </>
  );
};

export default App;
