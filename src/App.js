import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { shopDataStore } from "./data/DataStore";

import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import NotFound404 from "./pages/NotFound404";
import CategoryDetail from "./pages/CategoryDetail/CategoryDetail";

import { Footer, Header } from "./components";

function App() {
  return (
    <Provider store={shopDataStore}>
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category:category" element={<CategoryDetail />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Provider>
  );
}

export default App;
