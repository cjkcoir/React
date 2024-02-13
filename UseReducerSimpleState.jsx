import React from "react";
import { useReducer } from "react";

// initial value of state is set to 0(zero)
const initialState = 0;
// Defining reducerFunction - {accepts two values and returns one value} (state,action are param)
// action - instruction to the reducer function
// in our example three actions, increment,decrement, reset

// const reducerFunction = (state, action) => {
//   return newState;
// };

const reducerFunction = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
      break;

    case "Decrement":
      return state - 1;
      break;

    case "Reset":
      return initialState;
      break;

    default:
      return state;
      break;
  }
};

function UseReducerSimpleState() {
  //  reducerFunction is a fn, initial state is Initial state value
  //  <= useReducer() returns 2 values , 1.cureent state  ie .count & 2. dispatch method
  // --> which was stored in array destructure const[count,dispatch]
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <h4 className="text-center">
        <span className="text-primary">Counter Value : </span>
        <span className="text-danger">{count}</span>
      </h4>

      <button
        className="btn btn-lg btn-primary"
        onClick={() => dispatch("Increment")}
      >
        Increment +1
      </button>
      <button
        className="btn btn-lg btn-secondary"
        onClick={() => dispatch("Decrement")}
      >
        Decrement -1
      </button>
      <button
        className="btn btn-lg btn-danger"
        onClick={() => dispatch("Reset")}
      >
        Reset
      </button>
    </>
  );
}

export default UseReducerSimpleState;
