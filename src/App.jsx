import "./App.css";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";

import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCountContainer stock={5} />
    </>
  );
}

export default App;
