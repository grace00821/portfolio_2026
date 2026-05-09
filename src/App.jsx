import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <nav>
        <h1>My React Site</h1>
      </nav>
      <main>
        <h2>Welcome to my deployed site!</h2>
        <p>This is a functional React application built with Vite.</p>
        <button onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>
      </main>
    </div>
  );
}

export default App;