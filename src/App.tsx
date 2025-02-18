import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Introduction from "./pages/introduction";  // Corregido
import Justification from "./pages/Justification";
import Methodology from "./pages/methodology";    // Corregido
import Conclusion from "./pages/Conclusion";      // Corregido
import Reference from "./pages/reference";        // Corregido
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/justification" element={<Justification />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
