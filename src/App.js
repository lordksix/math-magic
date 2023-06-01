import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Math Magicians&apos; Calculator
      </header>
      <main className="app-body">
        <Quotes />
        <Calculator />
      </main>
    </div>
  );
}

export default App;
