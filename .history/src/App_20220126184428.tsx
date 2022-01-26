import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState<DocumentFragment | null>(null)
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      console.log("response", response.data);
      if (response.data) {
        const template = document.createRange().createContextualFragment(response.data.Classnum);
        setState(template)
      }
    })

    // setState(response.response)
  }, []);
  return (
    <div className="App">
      <ul>
        {state}
      </ul>
    </div>
  );
}

export default App;
