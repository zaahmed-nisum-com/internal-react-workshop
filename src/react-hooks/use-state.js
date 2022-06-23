import React, { useState } from "react";

function UseStateHook(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [randomNumber, setRandomNumber] = useState(0);
  let randomNumber = 0;

  const handleRandomNumber = (e) => {
    console.log(e.target.value);
    // setRandomNumber(e.target.value);
    randomNumber = e.target.value;
  };

  return (
    <div>
      <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <input onChange={handleRandomNumber} />
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{password}</p>
      <p>{randomNumber}</p>
    </div>
  );
}

export default UseStateHook;
