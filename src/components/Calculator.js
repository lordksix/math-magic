import PropTypes from 'prop-types';
import ResultScreen from './ResultScreen';
import Keypad from './Keypad';

const Calculator = (props) => {
  const { keypad } = props;
  return (
    <div className="calculator-wrapper">
      <ResultScreen />
      <Keypad keypad={keypad} />
    </div>
  );
};

Calculator.propTypes = {
  keypad: PropTypes.arrayOf.isRequired,
};

export default Calculator;
