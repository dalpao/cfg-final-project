import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../routes/Contact";
import Home from "../routes/Home";

// creating routes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
