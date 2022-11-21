import { useCallback, useState } from "react";
import Callback from "./Callback";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});

  const updateData = useCallback(() => {
    setData({ name: "suriya", age: 26 });
  });

  return (
    <div className="App">
      <Callback updateData={updateData} /> <br />
      <button onClick={() => console.log(data)}>Print State</button>
    </div>
  );
}
