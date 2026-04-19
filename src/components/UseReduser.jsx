import { useReducer } from "react";

export const UseReduser = () => {
  const reduser = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reduser, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5 className="mb-3 text-primary">useReducer </h5>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={increment}
      >
        {" "}
        +{" "}
      </button>
      <span
        style={{
          margin: "100px",
          fontSize: "20px",
        }}
      >
        {state.count}
      </span>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={decrement}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};
