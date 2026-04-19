import React, { useEffect, useLayoutEffect, useState } from "react";

export const UserLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect console ->  " + count);
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect console  -> " + count);
  }, [count]);
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        +{" "}
      </button>
      <span
        style={{
          margin: "100px",
          fontSize: "20px",
        }}
      >
        {count}
      </span>
    </div>
  );
};
