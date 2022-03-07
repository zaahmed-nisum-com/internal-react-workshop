import React, { useEffect,useRef } from "react";

function PatientsList(props) {
    useEffect(() => {
        console.log("component did mount PatientsList");
        return () => {
          console.log("component un mount PatientsList");
        };
      }, []);
      useEffect(() => {
        console.log("component will update PatientsList");
        return () => {
          console.log("component un mount PatientsList");
        };
      });
  return (
    <div>
      <p>Patients</p>
    </div>
  );
}

export default PatientsList;
