import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./pages/Home";
import Precios from "./pages/Precios";
import Blog from "./pages/Blog";
import Registro from "./pages/Registro";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
