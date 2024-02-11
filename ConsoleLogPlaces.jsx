// Possible places of console.log() in reactjs

// eslint-disable-next-line no-unused-vars
import React from "react";

import { useState ,useEffect} from "react";

function ConsoleLogPlaces() {
  const [name, setName] = useState("");

  useEffect(() => {
    // 3. log inside useEffect
    console.log("log only once inside useEffect but WITHOUT conditon",name);
  }, [name]);

  //1.log before return
//   console.log("console log before retun ");

  //method
  function handleClick(event) {
    // 2.log inside function -handleClick
    console.log(event);
  }
  return (
    <div>
      ConsoleLogPlaces
      <button onClick={handleClick} className="btn btn-lg btn-primary ">
        Click on handleClick
      </button>
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default ConsoleLogPlaces;
