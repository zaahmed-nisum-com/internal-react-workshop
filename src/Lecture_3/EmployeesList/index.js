import React, { useEffect, useRef } from "react";
import './style.css'

function EmployeesList(props) {
  const counterRef = useRef(null);
  useEffect(() => {
    console.log("component did mount EmployeesList");
    setTimeout(() => {
        counterRef.current.className = 'counter_tag'
    }, 2000);
    return () => {
      console.log("component un mount EmployeesList");
    };
  }, []);
  useEffect(() => {
    console.log("component will update EmployeesList");
    return () => {
      console.log("component un mount EmployeesList");
    };
  });
  return (
    <div>
      <p>Employee</p>
      <p ref={counterRef}>P tag</p>
    </div>
  );
}

export default EmployeesList;
