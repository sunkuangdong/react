import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  let template = null
  useEffect(() => {
    axios.get('http://localhost:3001/').then(response => {
      if (response.data) {
        template = document.createRange().createContextualFragment(response.data.Classnum);
        console.log(template);
        
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
