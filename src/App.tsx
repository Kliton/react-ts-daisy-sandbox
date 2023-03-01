import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}

export default App;
