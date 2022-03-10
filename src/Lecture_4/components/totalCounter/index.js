import React from "react";

// const TotalCounter = (props) => {
  const TotalCounter = React.memo((props) => {
  return (
    <div>
      {console.log(props.total)}
      <p>{props.total}</p>
    </div>
  );
});

export default TotalCounter;
