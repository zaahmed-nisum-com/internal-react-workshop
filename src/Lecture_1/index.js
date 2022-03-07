import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Lecture_1(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "inline-flex",
            }}
          >
            <li
              style={{
                display: "inline-table",
                padding: "10px",
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              style={{
                display: "inline-table",
                padding: "10px",
              }}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              style={{
                display: "inline-table",
                padding: "10px",
              }}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="home-container">
              <p>home</p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <p>about</p>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <p>contact</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default Lecture_1;
