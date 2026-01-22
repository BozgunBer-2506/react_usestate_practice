function DatePrinter() {
  // Funktion zeigt Datum in der Konsole
  function zeigeDatum() {
    const heute = new Date().toString();
    console.log("Datum:", heute);
  }

  // Kurze Begrüßung
  function zeigeGruss() {
    console.log("Hallo! Teil 1 funktioniert.");
  }

  return (
    <div style={{ padding: '10px', border: '1px solid gray' }}>
      <h2>Datum Drucker</h2>
      
      {/* Event Handler ohne Klammern aufrufen */}
      <button onClick={zeigeDatum}>Datum anzeigen</button>
      <button onClick={zeigeGruss}>Begrüßung</button>
    </div>
  );
}

export default DatePrinter;