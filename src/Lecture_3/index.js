import React, {  } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EmployeesList from "./EmployeesList";
import PatientsList from "./PatientsList";

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
        <Route exact path="/employee" element={<EmployeesList />} />
        <Route path="/patient" element={<PatientsList />} />
      </Routes>
    </Router>
  );
}

export default Lecture_3;
