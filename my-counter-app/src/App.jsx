import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear input
  const clearInput = () => {
    setInput("");
  };

  // Calculate result
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Calculator</h2>

      {/* Display */}
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "200px",
          height: "40px",
          fontSize: "18px",
          textAlign: "right",
          marginBottom: "10px",
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", justifyContent: "center" }}>
        {/* Number buttons */}
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"].map((btn, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (btn === "C") clearInput();
              else if (btn === "=") calculate();
              else handleClick(btn);
            }}
            style={{ height: "40px", fontSize: "18px" }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App