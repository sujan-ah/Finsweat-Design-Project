import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./component/navbar/Navbar";
import Pricing from "./page/Pricing";
import Footer from "./component/footer/Footer";
import Feature from "./page/Feature";
import Blog from "./page/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
