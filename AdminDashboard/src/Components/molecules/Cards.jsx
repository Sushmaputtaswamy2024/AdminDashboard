import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <div className="card" onClick={() => navigate("/people")}>
        <h3>People</h3>
        <p>View all people</p>
      </div>

      <div className="card" onClick={() => navigate("/files")}>
        <h3>Files</h3>
        <p>View all files</p>
      </div>
    </div>
  );
}
