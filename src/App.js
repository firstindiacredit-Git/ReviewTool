import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import PercentageCalculator from "./components/PercentageCalculator";
import ReviewPage from "./components/ReviewPage";
// import QRCodeComponent from "./components/QRCodeComponent";
// import CurrencyConverter from "./components/CurrencyConverter";
// import GenerateSignature from "./components/GenerateSignature";
// import Mainpage from "./components/Mainpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Mainpage />} />
        <Route path="/QRCodeComponent" element={<QRCodeComponent />} /> */}
        <Route path="/" element={<ReviewPage />} />
        {/* <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        <Route path="/GenerateSignature" element={<GenerateSignature />} />
        <Route
          path="/PercentageCalculator"
          element={<PercentageCalculator />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
