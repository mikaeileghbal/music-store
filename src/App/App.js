import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Basket from "./pages/Basket";
import NotFound404 from "./pages/NotFound404";
import Header from "./view/header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/album" element={<Album />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
