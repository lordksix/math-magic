import Calculator from './components/Calculator';
import './App.css';

const BUTTONS = [
  { category: 'number', value: 0, id: 0 },
  { category: 'number', value: 1, id: 1 },
  { category: 'number', value: 2, id: 2 },
  { category: 'number', value: 3, id: 3 },
  { category: 'number', value: 4, id: 4 },
  { category: 'number', value: 5, id: 5 },
  { category: 'number', value: 6, id: 6 },
  { category: 'number', value: 7, id: 7 },
  { category: 'number', value: 8, id: 8 },
  { category: 'number', value: 8, id: 8 },
  { category: 'number', value: 9, id: 8 },
  { category: 'operation', value: '*', id: 10 },
  { category: 'operation', value: '+', id: 11 },
  { category: 'operation', value: '/', id: 12 },
  { category: 'operation', value: '-', id: 13 },
  { category: 'operation', value: '=', id: 14 },
  { category: 'number', value: '±', id: 15 },
  { category: 'number', value: '%', id: 16 },
  { category: 'number', value: 'AC', id: 17 },
  { category: 'number', value: '.', id: 18 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Calculator buttons={BUTTONS} />
    </div>
  );
}

export default App;
