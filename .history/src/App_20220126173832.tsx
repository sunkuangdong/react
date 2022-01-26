import React, { useEffect, useState } from 'react';
import './App.css';
const ajax = function (obj: { url: string }) {
  const XML = new XMLHttpRequest();
  XML.open("GET", obj.url, true);
  XML.onreadystatechange = function (res) {
    if (XML.readyState === 4 && XML.status === 200) {
      console.log("res", res);
    }
  }
  XML.send()
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
