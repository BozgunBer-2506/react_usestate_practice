import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', border: '1px solid orange', marginTop: '10px' }}>
      <h2>Wer bist du?</h2>
      
      {/* Controlled Input */}
      <input
        type="text"
        placeholder="Dein Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hallo {name}!</p>
    </div>
  );
}

export default NameInput;