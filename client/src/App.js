//JSX - javascript & Xml (file)
import Header from "./Header";
import Footer from "./Footer";
import Additem from "./Additem";
import SearchItem from "./SearchItem";
import { DataProvider } from "./context/dataContext";
import Home from "./Home";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import ItemsList from "./todoItemsList";
import LineItem from "./LineItem";

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="GGM's To do List" />
        <Additem />
        <SearchItem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="items/:id" element={<ItemsList />} />
          <Route path="lineitem/:id" element={<LineItem />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
