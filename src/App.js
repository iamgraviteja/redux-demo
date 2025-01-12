import Layout from "./components/Layout/Layout";
import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let timer = useRef(null);
  const handleStart = () => {
    timer.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(timer.current);
  };

  const padStartNum = (num) => {
    return num.toString().padStart(2, 0);
  };

  const processCount = (count) => {
    const seconds = count % 60;
    const minutes = Math.floor(count / 60) % 60;
    const hours = Math.floor(count / 3600);

    return `${padStartNum(hours)}:${padStartNum(minutes)}:${padStartNum(
      seconds
    )}`;
  };

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div>{processCount(count)}</div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
