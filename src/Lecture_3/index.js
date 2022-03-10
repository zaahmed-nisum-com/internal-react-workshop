import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PatientsList from "./PatientsList";
import EmployeesList from "./EmployeesList";

function Lecture_3(props) {
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
              <Link to="/employee">Employees List</Link>
            </li>
            <li
              style={{
                display: "inline-table",
                padding: "10px",
              }}
            >
              <Link to="/patient">Patients Lists</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/employee" element={<EmployeesList />} />
        <Route
          path="/employee/create"
          element={
            <div>
              <p>employee create</p>
            </div>
          }
        />
        <Route path="/patient" element={<PatientsList />} />
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default Lecture_3;
