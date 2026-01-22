import { useState } from 'react';

function Counter() {
  const [zahl, setZahl] = useState(0);

  function plusEins() {
    setZahl(zahl + 1);
  }

  function minusEins() {
    setZahl(zahl - 1);
  }

  return (
    <div style={{ border: '2px solid black', padding: '20px', margin: '10px' }}>
      <h2>Zähler</h2>
      <p style={{ fontSize: '20px' }}>Aktueller Stand: {zahl}</p>
      
      <button onClick={minusEins}>-1</button>
      <button onClick={() => setZahl(0)}>Reset</button>
      <button onClick={plusEins}>+1</button>
    </div>
  );
}

export default Counter;