import "./App.css";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";

import { Navbar } from "./components/layout/navbar/Navbar";
import Count1 from "./components/pages/coun1/Count1";
import Count2 from "./components/pages/count2/Count2";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      
      <hr></hr>
      <ItemDetailContainer />
      
    </>
  );
}

export default App;
