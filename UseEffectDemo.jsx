// eslint-disable-next-line no-unused-vars
import React from "react";

import { useState, useEffect } from "react";

function UseEffectDemo() {
  // eslint-disable-next-line no-unused-vars
  const [count1, setCount1] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [count2, setCount2] = useState(0);

  //case 1--- useEffect without condition  - on every render & every state change

  //   useEffect(() => {

  //     console.log("useEffect is executing");

  //   }, );

  // case 2--- useEffect WITH condition  - on  render & every COUNT1 state changes

  //   useEffect(() => {

  //     console.log("useEffect is executing");

  //   }, [count1]);

  // case 2--- useEffect WITH condition  Empty array[] - on first time render ONLY

  useEffect(() => {
    console.log("useEffect is executing");
  }, []);

  return (
    <div>
      <h4 className="text-primary text-decoration-underline ">
        useEffect Demo
      </h4>
      <button
        className="btn btn-lg btn-primary "
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count 1
      </button>{" "}
      <h4>Count 1 : {count1}</h4>
      <br />
      <button
        className="btn btn-lg btn-danger  "
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Count 2
      </button>{" "}
      <h4>Count 2 : {count2}</h4> <br />
    </div>
  );
}

export default UseEffectDemo;
