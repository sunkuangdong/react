import React, { useEffect, useState } from 'react';
import './App.css';


const useFetch = async (url: string) => {
  const [state, setState] = useState<Response | null>(null)
  await fetch(url).then(res => {
    console.log("res", res);
    setState(res)
  })
  return state
}

function App() {
  useEffect(() => {
    const state = useFetch("http://localhost:3001/")
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default App;
