import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';


function App() {
  const [m, setM] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setM(data[0]))

  }, [])
  return (
    <div className='container'>
      <Header></Header>

    </div>
  );
}

export default App;
