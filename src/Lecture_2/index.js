import React, { useState } from "react";

function Lecture_2(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}

export default Lecture_2;
