import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";  // Fixed the import path and case

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Fixed the component name case */}
      </Routes>
    </Router>
  );
};

export default App;
