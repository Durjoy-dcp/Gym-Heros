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
    <div>
      <h1>WOk</h1>

    </div>
  );
}

export default App;
