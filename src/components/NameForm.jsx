import { useState } from 'react';

function NameForm() {
  // Two States: vorname and nachname
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');

  return (
    <div style={{ padding: '20px', border: '2px solid green', marginTop: '10px' }}>
      <h2>Profil-Check</h2>
      
      <input 
        type="text" 
        placeholder="Vorname" 
        value={vorname} 
        onChange={(e) => setVorname(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="Nachname" 
        value={nachname} 
        onChange={(e) => setNachname(e.target.value)} 
      />

      <p>Willkommen, {vorname} {nachname}!</p>
    </div>
  );
}

export default NameForm;