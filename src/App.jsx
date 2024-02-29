import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/navbar/Navbar";
import { Cart } from "./components/common";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
