// Libraries
import { Routes, Route } from "react-router-dom";

// Assets
import "./assets/styles/App.css";

// Components
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer"

// Pages
import Categories from "./pages/Categories";
import Tests from "./pages/Tests";

function App() {
  return (
    <div id="App" >
      <Navbar />
      <div className="mainBody">
        <Routes>
          <Route index element={<Categories />} />
          <Route path="/" exact element={<Categories />} />
          <Route path="/category/:categoryName" element={<Tests />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
