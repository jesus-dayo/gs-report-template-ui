import React from "react";
import "./App.css";
import ActionBar from "./components/layout/ActionBar/ActionBar";
import TemplateView from "./views/pages/TemplateView/TemplateView";
import TemplateAdd from "./views/pages/TemplateAdd/TemplateAdd";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ActionBar />
      <div>
        <Routes>
          <Route exact path="/" element={<TemplateView />} />
          <Route path="/add" element={<TemplateAdd />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
