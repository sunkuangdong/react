import React, { useEffect, useState } from 'react';
import './App.css';
const ajax = function (obj: { url: string }) {
  let response: any = null
  const XML = new XMLHttpRequest();
  XML.open("GET", obj.url, true);
  XML.onreadystatechange = function (res) {
    if (XML.readyState === 4 && XML.status === 200) {
      if (res && res.target) {
        response = res.target
      }
    }
  }
  XML.send()
  return response
}


function App() {
  const [state, setState] = useState<Response | null>(null)
  useEffect(() => {
    const response = ajax({
      url: 'http://localhost:3001/'
    })
    console.log("res", response.response);
    setState(response.response)
  }, [state]);
  return (
    <div className="App">

    </div>
  );
}

export default App;
