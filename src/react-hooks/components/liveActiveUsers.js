import React from "react";

function LiveActiveUsers(props) {
  console.log("LiveActiveUsers");
  return (
    <div>
      <p>Active Users Counter{props.ActiveUserCounter}</p>
    </div>
  );
}

export default LiveActiveUsers;
