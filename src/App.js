import React, { useEffect } from "react";
import "./App.css";
import ActionBar from "./components/layout/ActionBar/ActionBar";
import TemplateView from "./views/pages/TemplateView/TemplateView";
import TemplateAdd from "./views/pages/TemplateAdd/TemplateAdd";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar/NavBar";
import Container from "./components/layout/Container/Container";
import Divider from "./components/Divider/Divider";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ActionBar />
      <Divider />
      <Container>
        <Routes>
          <Route exact path="/" element={<TemplateView />} />
          <Route path="/add" element={<TemplateAdd />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
