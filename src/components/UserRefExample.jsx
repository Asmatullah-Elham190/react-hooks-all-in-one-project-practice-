import React, { useState, useRef, useEffect } from "react";

export const UserRefExample = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const preState = useRef("");

  useEffect(() => {
    preState.current = name;
  }, [name]);

  const handleClick = () => {
    inputRef.current.focus();
    console.log("Current Input Value:", inputRef.current.value);
  };

  return (
    <div className="p-3 border rounded bg-light">
      <h5 className="mb-3 text-primary">useRef Practice</h5>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control" // Bootstrap styling
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Focus Input
        </button>
      </div>

      <div className="alert alert-info py-2">
        <p className="mb-1">
          <strong>Current Typing:</strong> {name}
        </p>
        <p className="mb-0 text-muted">
          <strong>Previous Value:</strong> {preState.current}
        </p>
      </div>
    </div>
  );
};
