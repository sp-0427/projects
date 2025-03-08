import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeArticles from "./components/HomeArticles";
import CategoryPage from "./pages/CategoryPage";
import NewsPage from "./pages/NewsPage";
import NavbarComponent from "./components/NavbarComponent";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/category/:id" element={<CategoryPage />} />
          <Route exact path="/news/:id" element={<NewsPage />} />
        </Routes>
        
        <NewsLetter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;