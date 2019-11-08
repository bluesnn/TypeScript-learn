import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
