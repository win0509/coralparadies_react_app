
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-lists" element={<SearchList />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
