import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 'Routes' importieren
import Homepage from "./sites/Homepage";
import Datenschutz from "./sites/Datenschutz";
import Impressum from "./sites/Impressum";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route direct path="/" element={<Homepage />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
};

export default App;
