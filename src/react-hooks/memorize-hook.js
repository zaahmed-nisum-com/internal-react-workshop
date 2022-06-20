import React, { useEffect, useState } from "react";
import LiveActiveUsers from "./components/liveActiveUsers";
import Users from "./components/users";

function MemorizeHook(props) {
  const [users, setUsers] = useState([
    { id: 1, name: "Zain Ahmed" },
    { id: 2, name: "Faraz Ahmed" },
    { id: 3, name: "Arsalan Ahmed" },
  ]);
  const [ActiveUserCounter, setActiveUserCounter] = useState(0);

  let activeUserCounterIntervel = null;

  useEffect(() => {
    activeUserCounterIntervel = setInterval(() => {
      setActiveUserCounter((itm) => itm + 1);
    }, 1000);

    return () => {
      clearInterval(activeUserCounterIntervel);
      activeUserCounterIntervel = null;
    };
  }, []);

  return (
    <div>
      <Users users={users} />
      <LiveActiveUsers ActiveUserCounter={ActiveUserCounter} />
    </div>
  );
}

export default MemorizeHook;
