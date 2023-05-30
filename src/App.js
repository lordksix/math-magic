import Calculator from './components/Calculator';
import './App.css';

const BUTTONS = [
  {
    category: 'number', value: 0, row: 5, column: 0, id: 0,
  },
  {
    category: 'number', value: 1, row: 4, column: 0, id: 1,
  },
  {
    category: 'number', value: 2, row: 4, column: 1, id: 2,
  },
  {
    category: 'number', value: 3, row: 4, column: 2, id: 3,
  },
  {
    category: 'number', value: 4, row: 3, column: 0, id: 4,
  },
  {
    category: 'number', value: 5, row: 3, column: 1, id: 5,
  },
  {
    category: 'number', value: 6, row: 3, column: 2, id: 6,
  },
  {
    category: 'number', value: 7, row: 2, column: 0, id: 7,
  },
  {
    category: 'number', value: 8, row: 2, column: 1, id: 8,
  },
  {
    category: 'number', value: 9, row: 2, column: 2, id: 9,
  },
  {
    category: 'operation', value: '*', row: 2, column: 3, id: 10,
  },
  {
    category: 'operation', value: '+', row: 4, column: 3, id: 11,
  },
  {
    category: 'operation', value: '/', row: 1, column: 3, id: 12,
  },
  {
    category: 'operation', value: '-', row: 3, column: 3, id: 13,
  },
  {
    category: 'operation', value: '=', row: 5, column: 2, id: 14,
  },
  {
    category: 'number', value: '±', row: 1, column: 1, id: 15,
  },
  {
    category: 'number', value: '%', row: 1, column: 2, id: 16,
  },
  {
    category: 'number', value: 'AC', row: 1, column: 0, id: 17,
  },
  {
    category: 'number', value: '.', row: 5, column: 1, id: 18,
  },
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
