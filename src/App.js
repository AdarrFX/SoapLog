import logo from './logo.svg';
import './App.css';
import { LogEntry } from './LogEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
         Soapmaking Log
        </p>

      </header>

      <div className="List-container">

        <LogEntry />

      </div>


    </div>
  );
}

export default App;
