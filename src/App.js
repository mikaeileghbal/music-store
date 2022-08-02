import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import NotFound404 from "./pages/NotFound404";
import Category from "./pages/Category/Category";

import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category:category" element={<Category />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
