import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState<string>("")
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        setState(response.data.Classnum)
      }
    })
  }, []);
  return (
    <div className="App">
      {document.createRange().createContextualFragment(state)}
    </div>
  );
}

export default App;
