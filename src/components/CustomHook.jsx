import React, { useEffect, useState } from "react";

// ✅ Custom Hook
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};

// ✅ Component
export const CustomHook = () => {
  const [showData, setShowData] = useState(false);
  const data = useFetch("https://jsonplaceholder.typicode.com/users");

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
        onClick={() => setShowData((prev) => !prev)}
      >
        {showData ? "Hide Data" : "Show Data"}
      </button>

      {showData && data && (
        <div>
          {data.map((user) => (
            <div
              style={{
                padding: "200px",
                margin: "10px",
                marginTop: "20px",
                alignContent: "center",
                textAlign: "center",
                fontSize: "20px",
                backgroundColor: "#f0f0f0",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              key={user.id}
            >
              <h5>{user.name}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
