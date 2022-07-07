import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './home/Home';

function App() {
  return (
    <div className="App text-center vh-100" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/teste" element={<Teste />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
