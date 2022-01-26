import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState<Response | null>(null)
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      console.log("response", response.data);
      if (response.data) {
        setState(response.data.Classnum)
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
