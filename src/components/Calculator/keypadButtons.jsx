import { v4 as uuidv4 } from 'uuid';

const KEYPAD = [
  {
    category: 'number', value: '0', row: 5, id: uuidv4(),
  },
  {
    category: 'number', value: '1', row: 4, id: uuidv4(),
  },
  {
    category: 'number', value: '2', row: 4, id: uuidv4(),
  },
  {
    category: 'number', value: '3', row: 4, id: uuidv4(),
  },
  {
    category: 'number', value: '4', row: 3, id: uuidv4(),
  },
  {
    category: 'number', value: '5', row: 3, id: uuidv4(),
  },
  {
    category: 'number', value: '6', row: 3, id: uuidv4(),
  },
  {
    category: 'number', value: '7', row: 2, id: uuidv4(),
  },
  {
    category: 'number', value: '8', row: 2, id: uuidv4(),
  },
  {
    category: 'number', value: '9', row: 2, id: uuidv4(),
  },
  {
    category: 'operation', value: 'x', row: 2, id: uuidv4(),
  },
  {
    category: 'operation', value: '+', row: 4, id: uuidv4(),
  },
  {
    category: 'number', value: '÷', row: 1, id: uuidv4(),
  },
  {
    category: 'operation', value: '-', row: 3, id: uuidv4(),
  },
  {
    category: 'number', value: '=', row: 5, id: uuidv4(),
  },
  {
    category: 'number', value: '+/-', row: 1, id: uuidv4(),
  },
  {
    category: 'number', value: '%', row: 1, id: uuidv4(),
  },
  {
    category: 'operation', value: 'AC', row: 1, id: uuidv4(),
  },
  {
    category: 'operation', value: '.', row: 5, id: uuidv4(),
  },
];

export default KEYPAD;
