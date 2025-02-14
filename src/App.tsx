import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResearchPage from "./pages/ResearchPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/investigacion" element={<ResearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
