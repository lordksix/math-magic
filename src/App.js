import CalculatorApp from 'components/Calculator/CalculatorApp';
import QuotesApp from 'components/Quotes/QuotesApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Math Magicians&apos; Website
      </header>
      <main className="app-body">
        <QuotesApp />
        <CalculatorApp />
      </main>
    </div>
  );
}

export default App;
