import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState<Response | null>(null)
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      console.log("response", JSON.parse(response.data));
      if (response.data) {
        // setState(JSON.parse(response.data))
      }
    })

    // setState(response.response)
  }, []);
  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
