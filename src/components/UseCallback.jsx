import React, { useState, useCallback } from "react";

export const UseCallback = () => {
  const [number, setNumber] = useState(1);

  const fun = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p
        style={{
          marginLeft: "100px",
          fontSize: "20px",
        }}
      >
        {number}
      </p>
      <button
        onClick={fun}
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click
      </button>
    </div>
  );
};
