import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  let template = null
  const [state, setState] = useState("")
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        template = document.createRange().createContextualFragment(response.data.Classnum);
        setState(JSON.stringify(template))
      }
    })
  }, []);
  return (
    <div className="App">
      {JSON.parse(state)}
    </div>
  );
}

export default App;
