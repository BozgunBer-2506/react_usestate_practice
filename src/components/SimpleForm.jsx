function SimpleForm() {
  function handleSenden(event) {
    event.preventDefault(); // Stoppt das Neuladen der Seite
    console.log('Formular abgeschickt!');
  }

  return (
    <form onSubmit={handleSenden} style={{ border: '1px solid blue', padding: '10px' }}>
      <h2>Einfaches Formular</h2>
      <input type="text" placeholder="Name hier" />
      <button type="submit">Senden</button>
    </form>
  );
}

export default SimpleForm;