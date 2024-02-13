import { useReducer } from "react";
import React from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

//reducerFuntion

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;

    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
      break;

    case "IncrementFive":
      return { ...state, firstCounter: state.firstCounter + action.value };
      break;

    case "DecrementFive":
      return { ...state, firstCounter: state.firstCounter - action.value };
      break;

    case "Reset":
      return initialState;
      break;

    case "IncrementSecondCounterOne":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;

    case "DecrementSecondCounterOne":
      return { ...state, secondCounter: state.secondCounter - action.value };
      break;

    default:
      break;
  }
};
function UseReducerComplexTwo() {
  const [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <h4 className="text-primary text-center ">
        {" "}
        FirstCounter Value : {count.firstCounter}
      </h4>

      <h4 className="text-info text-center ">
        {" "}
        SecondCounter Value : {count.secondCounter}
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
      <br />
      <br />

      <button
        className="btn btn-lg btn-primary"
        onClick={() =>
          dispatch({ type: "IncrementSecondCounterOne", value: 1 })
        }
      >
        IncrementSecond +1
      </button>
      <button
        className="btn btn-lg btn-secondary"
        onClick={() =>
          dispatch({ type: "DecrementSecondCounterOne", value: 1 })
        }
      >
        Decrement Second -1
      </button>
    </>
  );
}

export default UseReducerComplexTwo;
