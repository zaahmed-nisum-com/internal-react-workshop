import React, { useEffect, useState } from "react";

function UseEffectHook(props) {
  const [counter, setCounter] = useState(0);
  const [actions, setActions] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let secondsCounterIntervel = null;

  useEffect(() => {
    setActions(actions + 1);
  }, [counter]);

  useEffect(() => {
    secondsCounterIntervel = setInterval(() => {
      if (seconds == 60) {
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(secondsCounterIntervel);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Sub</button>
      <p>Counter: {counter}</p>
      <p>Actions perform counter: {actions}</p>
      <p>seconds {seconds}</p>
    </div>
  );
}

export default UseEffectHook;
