import React, { useRef, forwardRef, useImperativeHandle } from "react";

export const UseImperativeHandle = () => {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />

      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={() => childRef.current.sayHello()}
      >
        Click
      </button>
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: () => {
      alert("Hello from Child");
    },
  }));

  return <div>Child Component</div>;
});
