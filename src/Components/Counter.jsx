import React, { useReducer } from "react";

// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-5 mb-5 text-center">
      <h3>Counter: {state.count}</h3>
      <button
        className="btn-primary p-2 mr-4 mt-4 mb-4"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
      <button
        className="btn-danger p-2 mr-4 mt-4 mb-4  "
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
