import { useReducer } from "react";
import React from "react";

const initialState = {
  firstCounter: 0,
};

//reducerFuntion

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { firstCounter: state.firstCounter + action.value };
      break;

    case "Decrement":
      return { firstCounter: state.firstCounter - action.value };
      break;

    case "IncrementFive":
      return { firstCounter: state.firstCounter + action.value };
      break;

    case "DecrementFive":
      return { firstCounter: state.firstCounter - action.value };
      break;

    case "Reset":
      return initialState;
      break;

    default:
      break;
  }
};
function UseReducerComplexStateObject() {
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <h4 className="text-primary text-center ">
        {" "}
        FirstCounter Value : {count.firstCounter}
      </h4>

      <button
        className="btn btn-lg btn-primary"
        onClick={() => dispatch({ type: "Increment", value: 1 })}
      >
        Increment +1
      </button>
      <button
        className="btn btn-lg btn-secondary"
        onClick={() => dispatch({ type: "Decrement", value: 1 })}
      >
        Decrement -1
      </button>

      <button
        className="btn btn-lg btn-primary"
        onClick={() => dispatch({ type: "IncrementFive", value: 5 })}
      >
        Increment +5
      </button>

      <button
        className="btn btn-lg btn-primary"
        onClick={() => dispatch({ type: "DecrementFive", value: 5 })}
      >
        Decrement -5
      </button>

      <button
        className="btn btn-lg btn-danger"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default UseReducerComplexStateObject;
