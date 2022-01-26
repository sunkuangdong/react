import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [state, setState] = useState<string>("")
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        setState(response.data.Classnum)
        const appDocument = document.querySelector('#app-document')
      }
    })
  }, []);
  return (
    <div className="App" id="app-document">
    </div>
  );
}

export default App;
