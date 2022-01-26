import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  let template = null
  const [state, setState] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        template = response.data.Classnum
      }
    })
  }, []);
  return (
    <div className="App">
      {template}
    </div>
  );
}

export default App;
