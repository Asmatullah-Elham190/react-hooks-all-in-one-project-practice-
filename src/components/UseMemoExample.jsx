import React, { useState, useMemo } from "react";

export const UseMemoExample = () => {
  const [number, setNumber] = useState(0);

  const [color, setColor] = useState("primary");

  const superPowerFunction = (num) => {
    console.log("Calculating super power...");

    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    return num * 2;
  };

  const styleMemo = useMemo(() => {
    return {
      color: color === "primary" ? "blue" : "red",
      fontWeight: "bold",
    };
    console.log("Calculating style...");
  }, [color]);

  const doubleNumber = useMemo(() => {
    return superPowerFunction(number);
  }, [number]);

  return (
    <div className="p-3 border rounded bg-light">
      <h5 className="mb-3 text-primary">useMemo Practice</h5>

      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter a number..."
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>

      <div className="alert alert-info py-2" style={styleMemo}>
        <p>
          <strong>Current Number:</strong> {number}
        </p>

        <p>
          <strong>Double Number:</strong> {doubleNumber}
        </p>

        <button
          className="btn btn-sm btn-outline-info mt-2"
          onClick={() =>
            setColor(
              (prev) => (prev = prev === "primary" ? "danger" : "primary"),
            )
          }
        >
          Change Color
        </button>
      </div>
    </div>
  );
};
