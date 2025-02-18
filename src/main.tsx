import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Introduction from "./pages/introduction";
import Justification from "./pages/Justification";
import Methodology from "./pages/methodology";
import Conclusion from "./pages/Conclusion";
import Reference from "./pages/reference";  
import Results from "./pages/Results";
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="justification" element={<Justification />} />
        <Route path="methodology" element={<Methodology />} />
        <Route path="conclusion" element={<Conclusion />} />
        <Route path="reference" element={<Reference />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
