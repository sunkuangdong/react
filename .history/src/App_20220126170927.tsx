import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(null)
  useEffect(() => {
    const response = fetch("http://localhost:3001/")
    console.log(response);
  }, [state]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
