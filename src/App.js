import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { shopDataStore } from "./data/DataStore";

import {
  Home,
  Basket,
  CategoryDetail,
  ProductDetail,
  NotFound404,
} from "./pages";
import { Footer, Header, Notification } from "./components";

function App() {
  return (
    <Provider store={shopDataStore}>
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:category" element={<CategoryDetail />} />
            <Route exact path="/basket" element={<Basket />} />
            <Route exact path="/:volume/:title" element={<ProductDetail />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        <Footer />
        <Notification />
      </>
    </Provider>
  );
}

export default App;
