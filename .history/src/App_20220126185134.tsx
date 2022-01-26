import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  let template = null
  const [state, setState] = useState<DocumentFragment>()
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        template = document.createRange().createContextualFragment(response.data.Classnum);
        setState(template)
      }
    })
  }, []);
  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
