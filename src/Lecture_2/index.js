import React, { useState } from "react";

function Lecture_2(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>email</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>password</p>
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
