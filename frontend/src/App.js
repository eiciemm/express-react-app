import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [triangle, setTriangle] = useState('');
  const [text, setText] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // useEffect(() =>{
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // },[])

  const upcase = () => {
    const obj = { message: text };
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch('/upcase', {method, headers, body})
      .then((res) => res.json())
      .then((data) => setText(data.message));
  }

  const calculate = () => {
    const method = "POST";
    const obj = { width, height };
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch('/calculate', {method, headers, body})
      .then((res) => res.json())
      .then((data) => setTriangle(data.result));
  }

  const fetchDb = () => {
    const method = "GET";
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch('/memo', {method, headers})
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="App">
      <h1>DBに問い合わせる</h1>
      <button onClick={fetchDb}>Access Database</button>

      <h1>ローマ字を全て大文字にして返すAPI</h1>
      <p>{ text }</p>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={upcase}>UPCASE CONVERTER</button>

      <h1>三角形の面積を計算して返すAPI</h1>
      <p>{ triangle } ｃｍ²</p>
      <p>底辺<input type="number" onChange={e => setWidth(e.target.value)} />cm</p>
      <p>高さ<input type="number" onChange={e => setHeight(e.target.value)} />cm</p>
      <button onClick={calculate}>calculate</button>
    </div>
  );
}

export default App;