import DatePrinter from './components/DatePrinter';
import SimpleForm from './components/SimpleForm';
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import NameForm from './components/NameForm';

import './index.css'; 

function App() {
  return (
    <div className="main-container">
      <h1>React Assignment | The_Bozgun</h1>
      
      <section>
        <DatePrinter />
      </section>

      <section>
        <SimpleForm />
      </section>

      <section>
        <Counter />
      </section>

      <section>
        <NameInput />
      </section>

      <section>
        <NameForm />
      </section>
    </div>
  );
}

export default App;