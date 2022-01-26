import React, { useEffect, useState } from 'react';
import './App.css';
const ajax = function (obj: object) {
  const XML = new XMLHttpRequest();
  XML.onreadystatechange = function (res) {
    if (XML.readyState === 4 && XML.status === 200) {
      console.log("res", res);

    }
  }
}


function App() {
  const [state, setState] = useState<Response | null>(null)
  useEffect(() => {
    ajax({
      url: 'http://localhost:3001/'
    })
  }, [state]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
