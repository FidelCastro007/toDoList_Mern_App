/*
import logo from './logo.svg';
import './App.css';


<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<p> SUscribe to ggm </p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
*/
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

//<Header /> means Components

//Props
/*passing parameters in components is props like func "paras"

//Props Drilling
Drilling means info pass parent to child like "header to content to footer to header (link)"
It can't be happen child to child resource sharing like "footer & Content => (This case possible when the resources are provided by parent then child & other child can mutually share their resources)" but parent to child is possible like "app & footer"
*/
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