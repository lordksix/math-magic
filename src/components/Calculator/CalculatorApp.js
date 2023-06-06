import { useState } from 'react';
import ResultScreen from './ResultScreen';
import Keypad from './Keypad';

const CalculatorApp = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="calculator-wrapper">
      <ResultScreen totalScreen={calculation} />
      <Keypad onClickSetCalculation={setCalculation} calculation={calculation} />
    </div>
  );
};

export default CalculatorApp;
