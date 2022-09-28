import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [m, setM] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setM(data[0]))

  }, [])
  return (
    <div className="App">
      <img src={m.img} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
