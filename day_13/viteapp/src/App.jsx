import Header from "./assets/Component/Header";
import Body from "./assets/Component/Body";
import Footer from "./assets/Component/Footer";
import Home from "./assets/Component/Home";
import About from "./assets/Component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Body />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
