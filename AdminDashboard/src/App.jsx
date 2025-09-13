import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/molecules/Login";
import Dashboard from "./Components/pages/Dashborad";
import People from "./Components/templates/PeopleList";
import FileList from "./Components/templates/FileList";
import Home from "./Components/templates/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/people" element={<People/>} />
      <Route path="/files" element={<FileList />} />
    </Routes>
  );
}

export default App;
