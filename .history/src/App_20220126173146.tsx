import React, { useEffect, useState } from 'react';
import './App.css';
const ajax = require("ajax");


function App() {
  const [state, setState] = useState<Response | null>(null)
  useEffect(() => {
    ajax({
      url: 'http://localhost:3001/'
    }).then((response: Response) => {
      console.log("res", response);
      setState(response)
    })
  }, [state]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
